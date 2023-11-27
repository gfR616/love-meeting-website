import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import api from '../../api'
import SelectedField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultySelectField from '../common/form/multySelectField'

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'male'
  })
  const [, setQualities] = useState({})
  const [errors, setErrors] = useState({})
  const [professions, setProfession] = useState()
  const isValid = Object.keys(errors).length === 0

  useEffect(() => {
    if (api.professions && api.professions.fetchAll) {
      api.professions.fetchAll().then((data) => setProfession(data))
    }
    if (api.qualities && api.qualities.fetchAll) {
      api.qualities.fetchAll().then((data) => setQualities(data))
    }
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
      <RadioField
        onChange={handleChange}
        options={[
          { name: 'Male', value: 'male' },
          { name: 'Female', value: 'memale' },
          { name: 'Other', value: 'other' }
        ]}
        name="sex"
        value={data.sex}
        label="Выберите ваш пол:"
      />
      <MultySelectField onChange={handleChange} options />
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
