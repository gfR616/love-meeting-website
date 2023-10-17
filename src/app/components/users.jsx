import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './pagination'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'
import UserTable from './usersTable'
import _ from 'lodash'
import NavBar from './navigation/navBar'

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
  const pageSize = 8
  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

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

  const handleSort = (item) => {
    setSortBy(item)
  }

  const filteredUsers =
    users && selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        )
      : users

  const count = filteredUsers ? filteredUsers.length : 0
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
  const userCrop = sortedUsers
    ? paginate(sortedUsers, currentPage, pageSize)
    : []

  const clearFilter = () => {
    setSelectedProf()
  }

  useEffect(() => {
    if (
      filteredUsers &&
      currentPage > Math.ceil(filteredUsers.length / pageSize) &&
      currentPage > 1
    ) {
      setCurrentPage(currentPage - 1)
    }
  }, [users])
  if (users) {
    return (
      <>
        <NavBar />
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
              <UserTable
                users={userCrop}
                selectedSort={sortBy}
                onSort={handleSort}
                onDelete={handleDelete}
                onToggleBookmark={handleBookmark}
              />
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
      </>
    )
  }
  return 'Loading...'
}

Users.propTypes = {
  users: PropTypes.array
}

export default Users
