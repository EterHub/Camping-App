import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search ..."
      className="max-w-xs outline outline-2 outline-black focus:outline-blue-500 rounded-lg p-2"
    />
  );
};

export default SearchBar;
