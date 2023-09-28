import React, { useState } from "react";
import api from '../api'



const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll())

  const chooseColor = ({ color }) => {
    if (color === "primary") {
      return "badge text-bg-primary"
    } else if (color == "secondary") {
      return "badge text-bg-secondary"
    } else if (color == "success") {
      return "badge text-bg-success"
    } else if (color == "danger") {
      return "badge text-bg-danger"
    } else if (color == "info") {
      return "badge text-bg-info"
    } else if (color == "dark") {
      return "badge text-bg-dark"
    }
  }

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user._id !== userId))
  }


  const table = (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Колличество встреч</th>
          <th scope="col">Оценка</th>
        </tr>
      </thead>
      <tbody className='table-group-divider'>
        {
          users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((q, index) => (
                  <span key={q._id} className={chooseColor(q)} style={{ marginRight: '5px' }}>
                    {q.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td><button onClick={() => handleDelete(user._id)}>удалить</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )

  return (
    <>
      {table}
    </>
  )
}

export default Users