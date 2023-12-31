import React from 'react'
import PropTypes from 'prop-types'
import { useQualities } from '../../../hooks/useQualities'

const Quality = ({ id }) => {
  const { getQuality, isLoading } = useQualities()
  if (isLoading) return 'Loading...'
  const quality = getQuality(id)
  if (!quality) {
    return 'Quality not found' // или вернуть заглушку, например, <span>Loading...</span>
  }
  const { color, name } = quality
  return <span className={'badge m-1 bg-' + color}>{name}</span>
}
Quality.propTypes = {
  id: PropTypes.string.isRequired
}

export default Quality
