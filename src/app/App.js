import React from 'react'
import Users from './components/users'
import { Route, Switch } from 'react-router-dom'
import Login from './components/navigation/login'

export default function App() {
  return (
    <>
    <Switch>
        {/* <Route path="/" component={Users}></Route> */}
        <Route path="/login" component={Login}></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
      <Users />
    </>
  )
}
