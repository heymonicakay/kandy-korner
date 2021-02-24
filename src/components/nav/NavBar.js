import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
          <div className="navbar__title">
            Kandy Korner
          </div>
          <Link className="navbar__link" to="/">Locations</Link>
          <Link className="navbar__link" to="/products">Products</Link>
          <Link className="navbar__link" to="/employees">Employees</Link>
        </ul>
    )
}