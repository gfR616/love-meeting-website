import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultySelectField = ({ options, onChange, name, label, defaultValue }) => {
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

  const handleChange = (value) => {
    // eslint-disable-next-line object-shorthand
    onChange({ name: name, value })
  }

  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label w-100">
        {label}
      </label>
      <Select
        isMulti
        name={name}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
      />
    </div>
  )
}
MultySelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array
}

export default MultySelectField
