import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './components/layouts/login'
import Main from './components/layouts/main'
import Users from './components/layouts/users'
import NavBar from './components/navBar'

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}
