import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import ShowForm from "./Components/ShowForm";

function App() {
  const API = [];
  const [data, setData] = useState(API);
  const myuser = (person) => {
    person.id = data.length + 1;
    setData([...data, person]);
  };

  return (
    <div className="container">
      <div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Dear!</strong> My Picture is Not Showing it showing it's path
        'coz we can do this using file system But We did not Read Yet! So not
        Possible Yet!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="row">
        <div className="col-5">
          <UserForm myuser={myuser} />
        </div>
        <div className="col-7">
          <ShowForm datas={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
