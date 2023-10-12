import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import Bookmark from './bookmark'

const UserTable = ({ users, onSort, selectedSort, onToggleBookmark, onDelete, ...rest }) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    proffession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <Bookmark status={user.bookmark} onClick={() => onToggleBookmark(user._id)}></Bookmark>),
    },
    delete: {
      component: (user) => (
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>удалить</button>),
    },
  }

  return (
    <table className="table" >
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </ table >
  )
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default UserTable
