import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import Qualities from '../../ui/qualities'
import UserCard from '../../ui/userCard'
import QualitiesCard from '../../ui/qualitiesCard'

const UserPage = ({ userId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])
  const handleClick = () => {
    history.push(history.location.pathname + '/edit')
  }
  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard data={user.qualities} />
            <h2>Профессия: {user.profession.name}</h2>
            <Qualities qualities={user.qualities} />
            <p>completedMeetings: {user.completedMeetings}</p>
            <h2>Rate: {user.rate}</h2>
            <button onClick={handleClick}>Изменить</button>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage
