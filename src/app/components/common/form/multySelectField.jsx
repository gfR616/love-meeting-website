import React from 'react'
import Select from 'react-select'

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

export default MultySelectField
