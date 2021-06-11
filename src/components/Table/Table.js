import React from "react";
import SortDirection from "./SortDirection";

const Table = (props) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "id")}>
            ID{" "}
            {props.sortByField === "id" ? (
              <SortDirection iconDirection={props.sort} />
            ) : null}
          </th>
          <th onClick={props.onSort.bind(null, "firstName")}>
            First name{" "}
            {props.sortByField === "firstName" ? (
              <SortDirection iconDirection={props.sort} />
            ) : null}
          </th>
          <th onClick={props.onSort.bind(null, "lastName")}>
            Last name{" "}
            {props.sortByField === "lastName" ? (
              <SortDirection iconDirection={props.sort} />
            ) : null}
          </th>
          <th onClick={props.onSort.bind(null, "email")}>
            Email{" "}
            {props.sortByField === "email" ? (
              <SortDirection iconDirection={props.sort} />
            ) : null}
          </th>
          <th onClick={props.onSort.bind(null, "phone")}>
            Phone{" "}
            {props.sortByField === "phone" ? (
              <SortDirection iconDirection={props.sort} />
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((user) => {
          return (
            <tr
              key={user.id + user.phone}
              onClick={props.selectRow.bind(null, user)}
            >
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
