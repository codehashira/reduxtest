import React from "react";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div>
      <input
        type={"text"}
        className="searchInput_container"
        placeholder="Search your tasks"
      />
    </div>
  );
};

export default SearchInput;
