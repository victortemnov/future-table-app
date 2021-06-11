import React from "react";

const SortDirection = ({ iconDirection }) => {
  return iconDirection === "asc" ? <span>▲</span> : <span>▼</span>;
};

export default SortDirection;
