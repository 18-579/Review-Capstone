import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    
    username:"",
    email: "",
    password: "",
  });

  const { username,email,password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8085/user/${id}`, user);
    navigate("/login");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8085/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                User Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter User Name"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                User Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter User Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                User Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter User Password"
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