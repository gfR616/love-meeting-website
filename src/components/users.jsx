import React, { useState } from "react";
import api from '../api'



const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user._id !== userId))
  }

  const renderPhrase = (number) => {
    if (number > 4 || number === 1) {
      return <h2><span class="badge text-bg-primary">{number} человек тусанет с тобой сегодня</span></h2>
    } else if (number <= 4 && number > 1) {
      return <h2><span class="badge text-bg-primary">{number} человека тусанет с тобой сегодня</span></h2>
    } else if (number === 0) {
      return <h2><span class="badge text-bg-danger">Никто не тусанет с тобой сегодня</span></h2>
    }
  }

  const table = (
    <table className="table table-hover">
      {users.length > 0 && (
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Колличество встреч</th>
            <th scope="col">Оценка</th>
            <th />
          </tr>
        </thead>
      )}
      <tbody className='table-group-divider'>
        {
          users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((q) => (
                  <span key={q._id} className={"badge m-1 bg-" + q.color}>
                    {q.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td><button
                className="btn btn-danger"
                onClick={() => handleDelete(user._id)}
              >удалить</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )

  return (
    <>
      {renderPhrase(users.length)}
      {table}
    </>
  )
}

export default Users