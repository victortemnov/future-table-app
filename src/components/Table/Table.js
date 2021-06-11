import React from "react";

const Table = (props) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "id")}>
            ID {props.sortByField === "id" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "firstName")}>
            First name{" "}
            {props.sortByField === "id" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "lastName")}>
            Last name{" "}
            {props.sortByField === "id" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "email")}>
            Email{" "}
            {props.sortByField === "id" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "phone")}>
            Phone{" "}
            {props.sortByField === "id" ? <small>{props.sort}</small> : null}
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
