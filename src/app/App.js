import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './layouts/login'
import Main from './layouts/main'
import Users from './layouts/users'
import NavBar from './components/ui/navBar'

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
