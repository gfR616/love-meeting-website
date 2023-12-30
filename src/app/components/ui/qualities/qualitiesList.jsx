import React from 'react'
import PropTypes from 'prop-types'
import Quality from './quality'
import useQualities from '../../../hooks/useQualities'

const QualitiesList = ({ qualities }) => {
  const q = qualities
  console.log('dasda:' + q)
  const { isLoading } = useQualities()
  if (isLoading) return 'Loading...'
  return (
    <>
      {qualities &&
        qualities.map((qual) => {
          console.log(qual)
          return <Quality key={qual} id={qual} />
        })}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.string
}

export default QualitiesList
