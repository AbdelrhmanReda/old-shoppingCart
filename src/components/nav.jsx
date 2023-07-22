import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Home
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/shoppingcart" className="nav-link">
                Shopping Cart
              </Link>
              </li>
              {/* <li className="nav-item"><Link to={"/about"}  className="navbar-Link">About</Link></li> */}
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              </li>
              
            </ul>
          </div>
          <Link to={"/shoppingcart"}>
            <span className="badge badge-primary">{this.props.listCount}</span>
          </Link>
        </nav>
      </>
    );
  }
}

export default Navbar;
