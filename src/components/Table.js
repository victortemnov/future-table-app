import React from "react";

const Table = (props) => {
  return (
    <table className="table">
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
          <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.firstName}</td>
            <td>{member.lastName}</td>
            <td>{member.email}</td>
            <td>{member.phone}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

export default Table;
