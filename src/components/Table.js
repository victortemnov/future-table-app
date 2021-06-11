import React from "react";

const Table = (props) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((member) => {
          return (
            <tr key={member.id + member.phone}>
              <td onClick={props.onSort.bind(null, "id")}>{member.id}</td>
              <td onClick={props.onSort.bind(null, "firstName")}>
                {member.firstName}
              </td>
              <td onClick={props.onSort.bind(null, "lastName")}>
                {member.lastName}
              </td>
              <td onClick={props.onSort.bind(null, "email")}>{member.email}</td>
              <td onClick={props.onSort.bind(null, "phone")}>{member.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
