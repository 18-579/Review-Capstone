import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username:"",
    email: "",
    password: "",
  });
  

  const { username,email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
  
    e.preventDefault();
    await axios.post("http://localhost:8085/user", user);
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter UserName"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                User Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter UserEmail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
               User Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter UserPassword"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/login">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}