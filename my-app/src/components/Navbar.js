import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {

  const location = useLocation();

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/' ? "active": ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/about' ? "active": ""}`} to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{ height: '25px', width: '25px' }} onClick={props.toggleModeBackP}></div>
            <div className="bg-warning rounded mx-2" style={{ height: '25px', width: '25px' }} onClick={props.toggleModeBackW}></div>
            <div className="bg-danger rounded mx-2" style={{ height: '25px', width: '25px' }} onClick={props.toggleModeBackD}></div>
            <div className="bg-success rounded mx-2" style={{ height: '25px', width: '25px' }} onClick={props.toggleModeBackS}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode} aria-checked="true" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set Title here',
  about: 'About Us'
}