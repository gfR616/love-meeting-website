import React, { useState, useEffect } from 'react'
import TextField from '../textField'
import { validator } from '../../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const isValid = Object.keys(errors).length === 0

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'email введен некорректно'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isContainCapital: {
        message: 'Пароль должен содержать хотябы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотябы одну цифру'
      },
      min: {
        message: 'Пароль должен содержать не менее 8 символов',
        value: 8
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 shadow p-4 mx-auto">
          <h3 className="mb-4">Вход</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Электронная почта"
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
