import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultySelectField = ({ options, onChange }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options

  return (
    <Select
      isMulti
      name="colors"
      options={optionsArray}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
    />
  )
}
MultySelectField.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func
}

export default MultySelectField
