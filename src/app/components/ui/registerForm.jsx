import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import api from '../../api'
import SelectedField from '../common/form/selectField'

const RegisterForm = () => {
  const [data, setData] = useState({ email: '', password: '', profession: '' })
  const [errors, setErrors] = useState({})
  const [professions, setProfession] = useState()
  const isValid = Object.keys(errors).length === 0

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])

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
    },
    profession: {
      isRequired: {
        message: 'Необходимо выбрать профессию'
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
      <SelectedField
        onChange={handleChange}
        options={professions}
        defaultOption="Выбор..."
        error={errors.profession}
        value={data.profession}
        label="Выберите вашу профессию:"
      />
      <button
        type="submit"
        disabled={!isValid}
        className="btn btn-primary w-100 mx-auto mt-3"
      >
        Submit
      </button>
    </form>
  )
}

export default RegisterForm
