import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import User from './user'
import Pagination from './pagination'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'

const Users = ({ users: allUsers, ...rest }) => {
  const count = allUsers.length
  const pageSize = 4

  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()

  useEffect(() => {
    api.professions.fetchAll().then((data) =>
      setProfession(data))
  }, [])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionSelect = item => {
    setSelectedProf(item)
  }

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession === selectedProf)
    : allUsers

  const userCrop = paginate(filteredUsers, currentPage, pageSize)

  const clearFilter = () => { setSelectedProf() }

  return (
    <>
      {professions && (
        <>
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className='btn btn-secondary mt-2' onClick={clearFilter}>очистить</button>
        </>
      )}
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Колличество встреч</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Users
