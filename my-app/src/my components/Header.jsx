import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import propTypes from 'prop-types';
// import {Link} from "react-router-dom";


export default function Header(props) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TO DO APP</a>
          {/* <Link className="navbar-brand" to="/">TO DO APP</Link> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            {/* <Link className="nav-link" to="/about">About</Link> */}
            </li>
        </ul>
      </div>
    </div>
  </nav>
)
}


Header.defaultProps={ 
  title: "TITLE"
}

Header.proptype={ 
  title: propTypes.string
}