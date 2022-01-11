import React from "react";

function MyTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
          <th scope="col">Distance</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => ( 
          <tr key={row.id}>
            <td>{row.date.slice(0, 10)}</td>
            <td>{row.title}</td>
            <td>{row.amount}</td>
            <td>{row.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
