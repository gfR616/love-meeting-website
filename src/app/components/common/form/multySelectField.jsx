import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultySelectField = ({ options, onChange, name }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options)
          .map((optionName) => {
            const option = options[optionName]
            return option
              ? { label: option.name, value: option._id }
              : undefined
          })
          .filter(Boolean)
      : options

  const handleChange = (e) => {
    onChange(e)
  }

  return (
    <Select
      isMulti
      name={name}
      options={optionsArray}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  )
}
MultySelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string
}

export default MultySelectField
