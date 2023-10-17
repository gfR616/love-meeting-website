import React from 'react'
import Users from './components/users'
import { Route, Switch } from 'react-router-dom'
import Login from './components/navigation/login'
import UsersPages from './components/navigation/usersPages'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersPages} />
      </Switch>
    </>
  )
}
