import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaGraduationCap, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className="sticky-top shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-1 fs-6">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <span className="small">
            <FaPhoneAlt className="me-1" /> Call: +91-XXXXXXXXXX
          </span>
          <span className="small">
            <FaEnvelope className="me-1" /> Info@divyanshushuklaschool.com
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2" to="/">
            <FaGraduationCap className="fs-2 text-warning" />
            <div>
              <div className="lh-1 fs-5 fw-bold text-dark">Divyanshu Shukla</div>
              <small className="text-muted fs-6">Higher Secondary School</small>
            </div>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#schoolNav">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="schoolNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold" to="/about-us">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold" to="/academics">Academics</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold" to="/admissions">Admissions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold" to="/notices">Notice Board</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold" to="/contact-us">Contact</NavLink>
              </li>
              <li className="nav-item ms-lg-2">
                <Link to="/login" className="btn btn-warning fw-bold px-3">Student Portal</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar