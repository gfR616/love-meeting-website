import React, { useState } from 'react'
import LoginForm from '../components/ui/loginForm'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === 'register' ? type : 'login')
  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 shadow p-4 mx-auto">
          {formType === 'register' ? (
            <>
              <h3 className="mb-4">Регистрация</h3>
              <RegisterForm /> <p>Уже есть аккаунт?</p>
              <a role="button" onClick={toggleFormType}>
                Войти
              </a>
            </>
          ) : (
            <>
              <h3 className="mb-4">Вход</h3>
              <LoginForm />{' '}
              <p className="mt-3">
                Еще нет аккаунта?{' '}
                <a role="button" onClick={toggleFormType}>
                  Зарегистрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
