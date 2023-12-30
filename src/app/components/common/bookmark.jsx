import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ status, ...rest }) => {
  return (
    <div {...rest}>
      <i className={'bi bi-suit-heart' + (status ? '-fill' : '')}></i>
    </div>
  )
}

Bookmark.propTypes = {
  status: PropTypes.bool
}

export default Bookmark
