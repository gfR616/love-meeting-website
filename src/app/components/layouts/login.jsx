import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  return (
    <form action="">
      <div>
        <label htmlFor="email">Почта</label>
        <input
          type="text"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        ></input>
      </div>
    </form>
  )
}

export default Login
