import React, { useHistory } from 'react'

const UserCard = ({ user }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(history.location.pathname + '/edit')
  }
  return <button onClick={handleClick}>123</button>
}

export default UserCard
