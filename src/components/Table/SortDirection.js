import React from "react";

const SortDirection = ({ sortDirection }) => {
  return sortDirection === "asc" ? <span>🠕</span> : <span>🠗</span>;
};

export default SortDirection;
