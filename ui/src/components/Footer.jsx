import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronUp,
} from 'react-icons/fa'

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Column 1: School Info */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none text-white mb-3">
              <FaGraduationCap className="fs-1 text-warning" />
              <div>
                <h5 className="fw-bold mb-0 text-white">Divyanshu Shukla</h5>
                <small className="text-muted">Higher Secondary School</small>
              </div>
            </Link>
            <p className="text-white-50 small mb-3">
              Nurturing young minds with quality education, strong moral values, modern science labs, and holistic sports development.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/about-us" className="text-white-50 text-decoration-none">About School</Link></li>
              <li className="mb-2"><Link to="/admissions" className="text-white-50 text-decoration-none">Admissions</Link></li>
              <li className="mb-2"><Link to="/notices" className="text-white-50 text-decoration-none">Notice Board</Link></li>
              <li className="mb-2"><Link to="/contact-us" className="text-white-50 text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase">Academics</h6>
            <ul className="list-unstyled small text-white-50">
              <li className="mb-2">Primary School (Nursery - 5th)</li>
              <li className="mb-2">Middle School (6th - 8th)</li>
              <li className="mb-2">High School (9th &amp; 10th)</li>
              <li className="mb-2">Science Stream (11th &amp; 12th)</li>
              <li className="mb-2">Commerce &amp; Arts Streams</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase">School Campus</h6>
            <p className="text-white-50 small mb-2 d-flex gap-2">
              <FaMapMarkerAlt className="text-warning mt-1 flex-shrink-0" />
              <span>Divyanshu Shukla Higher Secondary School, Tarabganj Road, Gonda, Uttar Pradesh</span>
            </p>
            <p className="text-white-50 small mb-2 d-flex gap-2">
              <FaPhoneAlt className="text-warning mt-1 flex-shrink-0" />
              <span>+91-XXXXXXXXXX</span>
            </p>
            <p className="text-white-50 small mb-0 d-flex gap-2">
              <FaEnvelope className="text-warning mt-1 flex-shrink-0" />
              <span>info@divyanshushuklaschool.com</span>
            </p>
          </div>
        </div>

        <hr className="border-secondary opacity-50 my-3" />

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-2">
          <p className="text-white-50 small mb-0">
            &copy; 2026 <strong className="text-white">Divyanshu Shukla Higher Secondary School</strong>. All Rights Reserved.
          </p>
          <button
            type="button"
            className="btn btn-warning btn-sm rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
            onClick={scrollTop}
            aria-label="Scroll to top"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer