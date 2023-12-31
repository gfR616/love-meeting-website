import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import qualityService from '../services/quality.service'

const QualitiesContext = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContext)
}

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getQualities = async () => {
      try {
        const { content } = await qualityService.fetchAll()
        console.log('юз кволитис:', content)
        setQualities(content)
        setLoading(false)
      } catch (error) {
        errorCatcher(error)
      }
    }
    getQualities()
  }, [])
  const getQuality = (id) => {
    const quality = qualities.find((q) => q._id === id)
    console.log('getQuality:', id, quality)
    return quality
  }

  function errorCatcher(error) {
    const message = error.response?.data?.message
    setError(message)
  }
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

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
