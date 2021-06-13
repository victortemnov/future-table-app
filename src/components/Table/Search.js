import React, { useState } from "react";

const Search = (props) => {
  const [value, setValue] = useState("");
  const valueChanger = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-group mb-3 mt-1">
      <div className="input-group-prepend">
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-warning"
          onClick={() => props.onSearch(value)}
        >
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        onChange={valueChanger}
        value={value}
      />
    </div>
  );
};

export default Search;
