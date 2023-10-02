import React from "react";

const SearchStatus = (number) => {
  if (number > 4 || number === 1) {
    return <h2><span class="badge text-bg-primary">{number} человек тусанет с тобой сегодня</span></h2>
  } else if (number <= 4 && number > 1) {
    return <h2><span class="badge text-bg-primary">{number} человека тусанет с тобой сегодня</span></h2>
  } else if (number === 0) {
    return <h2><span class="badge text-bg-danger">Никто не тусанет с тобой сегодня</span></h2>
  }
}

export default SearchStatus