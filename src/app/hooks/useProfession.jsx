import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import professionService from '../services/profession.service'
import { toast } from 'react-toastify'

const ProfessionContext = React.createContext()

export const useProfession = () => {
  return useContext(ProfessionContext)
}

export const ProfessionProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [professions, setProfessions] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [])
  useEffect(() => {
    getProfessionsList()
  }, [])

  function errorCather(error) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }

  function getProfession(id) {
    return professions.find((p) => p._id === id)
  }

  async function getProfessionsList() {
    try {
      const { content } = await professionService.get()
      setProfessions(content)
      setLoading(false)
    } catch (error) {
      errorCather(error)
    }
  }
  return (
    <ProfessionContext.Provider
      value={{ isLoading, professions, getProfession }}
    >
      {children}
    </ProfessionContext.Provider>
  )
}

ProfessionProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
