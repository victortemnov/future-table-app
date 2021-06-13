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
        {props.data.map((person) => {
          return (
            <tr
              key={person.id + person.phone + Math.random()}
              onClick={props.selectRow.bind(null, person)}
            >
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
