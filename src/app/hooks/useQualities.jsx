import React, { useContext, useEffect, useState } from 'react'
import qualityService from '../services/quality.service'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

const QualitiesContext = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContext)
}
export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getQualities = async () => {
      try {
        const content = await qualityService.fetchAll()
        console.log(content)
        setQualities(content)
        setIsLoading(false)
      } catch (error) {
        errorCatcher(error)
      }
    }
    getQualities()
  }, [])

  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
  }

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  const getQuality = (id) => {
    console.log(id)
    return qualities.find((q) => q._id === id)
  }

  return (
    <QualitiesContext.Provider
      value={{
        qualities,
        getQuality,
        isLoading
      }}
    >
      {children}
    </QualitiesContext.Provider>
  )
}

QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default useQualities
