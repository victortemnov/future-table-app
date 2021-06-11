import React from "react";

const Table = (props) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "id")}>ID</th>
          <th onClick={props.onSort.bind(null, "firstName")}>First name</th>
          <th onClick={props.onSort.bind(null, "lastName")}>Last name</th>
          <th onClick={props.onSort.bind(null, "email")}>Email</th>
          <th onClick={props.onSort.bind(null, "phone")}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((member) => {
          return (
            <tr key={member.id + member.phone}>
              <td>{member.id}</td>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
