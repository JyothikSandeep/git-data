import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
const Login = () => {
   const [data, setData] = useState();
   function handleChange(e) {
     setData({ ...data, [e.target.name]: e.target.value });
   }
  return (
    <div>
      {console.log(data)}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div className="card w-25 text-center">
          <p className="lead fs-1 ">Login</p>
          <input
            className="form-control w-75 text-center mb-3"
            style={{ margin: "0 auto" }}
            placeholder="Enter user Name"
            type="text"
            name="name"
            id=""
            onChange={handleChange}
          />
          <input
            className="form-control w-75 text-center mb-3"
            style={{ margin: "0 auto" }}
            type="password"
            placeholder="Enter Password"
            name="password"
            id=""
            onChange={handleChange}
          />

          <p className="small">
            If you dont have an account{" "}
            <NavLink
              className="btn text-primary "
              to="/registration"
              style={{ margin: 0, padding: 0, marginTop: 0 }}
            >
              Register
            </NavLink>
          </p>
          <div className="text-center mb-5 mt-2">
            <button className="btn btn-primary w-75">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login