import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <div {...rest}>
      <i className={"bi bi-suit-heart" + (status ? "-fill" : "")}></i>
    </div>
  )
}

export default Bookmark