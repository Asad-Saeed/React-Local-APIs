import React from "react";

function ShowForm(props) {
  // Button
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="container">
      <h2 className="text-center display-4">All Users Data</h2>
      <button className="btn btn-warning form-control" onClick={refreshPage}>
        Delete
      </button>
      <div className="form-group"></div>
      <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Image</th>
        </tr>
        {props.datas.map((pro) => (
          <tr>
            <td>{pro.id}</td>
            <td>{pro.name}</td>
            <td>{pro.email}</td>
            <td>{pro.phone}</td>
            <td>{pro.avatar}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ShowForm;
