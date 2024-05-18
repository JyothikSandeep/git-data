import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [data, setData] = useState();
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function onHandleSubmit() {
    console.log("inside submit");
    const d = await axios.get("http://localhost:4000/data");
    axios.post("http://localhost:4000/register",data);
    console.log(d);
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
          <p className="lead fs-1 ">Register</p>
          <input
            className="form-control w-75 text-center mb-3"
            style={{ margin: "0 auto" }}
            placeholder="Enter user Name"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
          <input
            className="form-control w-75 text-center mb-3"
            style={{ margin: "0 auto" }}
            type="number"
            placeholder="Enter Phone number"
            name="phonenumber"
            id="phone"
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

          <input
            className="form-control w-75 text-center mb-3"
            style={{ margin: "0 auto" }}
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            id=""
            onChange={handleChange}
          />

          <p className="small">
            Already Have an account{" "}
            <NavLink
              className="btn text-primary "
              to="/login"
              style={{ margin: 0, padding: 0, marginTop: 0 }}
            >
              Login
            </NavLink>
          </p>
          <div className="text-center mb-5 mt-2">
            <button className="btn btn-primary w-75" onClick={onHandleSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
