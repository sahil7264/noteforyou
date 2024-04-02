import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full">
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search here"
        className="border-b-3 font-normal w-full p-3 rounded-xl outline-none text-md"
      />
    </div>
  );
};

export default SearchBox;
