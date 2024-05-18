import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active ml-3 ">
              <NavLink
                class="nav-link ml-3 "
                style={{
                  textDecoration: "none",
                  marginLeft: 20,
                  marginRight: 20,
                  color: "black",
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link ml-3"
                style={{
                  textDecoration: "none",
                  marginRight: 20,
                  color: "black",
                }}
                to="login"
              >
                Login
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                class="nav-link ml-3"
                style={{
                  textDecoration: "none",
                  marginRight: 20,
                  color: "black",
                }}
                to="registration"
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header