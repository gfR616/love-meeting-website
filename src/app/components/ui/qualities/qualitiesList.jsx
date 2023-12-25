import React from 'react'
import PropTypes from 'prop-types'
import Quality from './quality'

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities &&
        qualities.map((qual) => <Quality key={qual._id} {...qual} />)}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList
