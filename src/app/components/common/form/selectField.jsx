import React from 'react'
import PropTypes from 'prop-types'

const SelectedField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name
}) => {
  const getInputClasses = () => {
    return 'form-select' + (error ? ' is-invalid' : '')
  }
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label w-100">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

SelectedField.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string
}

export default SelectedField
