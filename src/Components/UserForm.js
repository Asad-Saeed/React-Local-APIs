import React, { useState } from "react";

function UserForm(props) {
  //for empty inputs
  const empty = {
    id: null,
    name: "",
    email: "",
    phone: "",
    avatar: "",
  };

  const [handle, setHandle] = useState(empty);
  //function for getting the inputs
  const handleInput = (event) => {
    const { name, value } = event.target;
    setHandle({ ...handle, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.myuser(handle);
        setHandle(empty);
      }}
    >
      <h2 className="text-center display-4">Add User Data</h2>
      <div className="form-group">
        <label>Enter Name</label>
        <input
          value={handle.name}
          onChange={handleInput}
          name="name"
          className="form-control"
          type="text"
        />
      </div>
      <div className="form-group">
        <label>Enter Email</label>
        <input
          value={handle.email}
          onChange={handleInput}
          name="email"
          className="form-control"
          type="text"
        />
      </div>
      <div className="form-group">
        <label>Enter Phone</label>
        <input
          name="phone"
          value={handle.phone}
          onChange={handleInput}
          className="form-control"
          type="text"
        />
      </div>
      <input
        name="avatar"
        value={handle.avatar}
        onChange={handleInput}
        type="file"
        id="avatar"
        accept="image/png, image/jpeg"
      />
      <br />
      <br />
      <div className="form-group">
        <input
          type="submit"
          disabled={!handle.email}
          className="btn btn-primary"
        />
      </div>
    </form>
  );
}

export default UserForm;
