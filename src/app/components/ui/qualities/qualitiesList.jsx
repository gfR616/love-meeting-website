import React from 'react'
import PropTypes from 'prop-types'
import Quality from './quality'
import useQualities from '../../../hooks/useQualities'

const QualitiesList = ({ qualities }) => {
  const { isLoading } = useQualities()
  if (isLoading) return 'Loading...'
  return (
    <>
      {qualities &&
        qualities.map((qual) => {
          return <Quality key={qual._id} id={qual._id} />
        })}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList
