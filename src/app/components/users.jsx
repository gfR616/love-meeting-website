import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import User from './user'
import Pagination from './pagination'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()

  const pageSize = 4

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const filteredUsers = selectedProf
    ? allUsers.filter(
      (user) =>
        JSON.stringify(user.profession) === JSON.stringify(selectedProf),
    )
    : allUsers

  const count = filteredUsers.length
  const userCrop = paginate(filteredUsers, currentPage, pageSize)

  const clearFilter = () => {
    setSelectedProf()
  }

  useEffect(() => {
    if (
      currentPage > Math.ceil(filteredUsers.length / pageSize) &&
      currentPage > 1
    ) {
      setCurrentPage(currentPage - 1)
    }
  }, [allUsers])

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
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
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array,
}

export default Users
