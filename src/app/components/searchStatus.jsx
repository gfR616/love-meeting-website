import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
  if (length > 4 || length === 1) {
    return (
      <h2>
        <span className="badge text-bg-primary">
          {length} человек тусанет с тобой сегодня
        </span>
      </h2>
    )
  } else if (length <= 4 && length > 1) {
    return (
      <h2>
        <span className="badge text-bg-primary">
          {length} человека тусанет с тобой сегодня
        </span>
      </h2>
    )
  } else if (length === 0) {
    return (
      <h2>
        <span className="badge text-bg-danger">
          Никто не тусанет с тобой сегодня
        </span>
      </h2>
    )
  }
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
}

export default SearchStatus
