import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark"

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookmark,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((q) => (
          <Qualitie key={q._id} {...q} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <Bookmark
          status={bookmark}
          onClick={() => onToggleBookmark(_id)}
        />
      </td>
      <td><button
        className="btn btn-danger"
        onClick={() => onDelete(_id)}
      >удалить</button>
      </td>
    </tr>
  )
}

export default User