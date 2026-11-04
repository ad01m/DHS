import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaArrowRight, FaShieldAlt } from 'react-icons/fa'

const HeroBanner = () => {
  return (
    <section 
      className="hero-section text-white position-relative py-5 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(rgba(11, 23, 42, 0.85), rgba(11, 23, 42, 0.85)), url("/images/school-campus.jpg") center/cover no-repeat',
        minHeight: '550px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container position-relative z-1 py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <span className="badge bg-warning text-dark px-3 py-2 text-uppercase mb-3 fw-bold d-inline-flex align-items-center gap-1 shadow-sm">
              <FaShieldAlt /> Academic Session 2026 - 2027
            </span>
            <h1 className="display-4 fw-bold mb-3 lh-sm">
              Welcome to <span className="text-warning">Divyanshu Shukla</span> Higher Secondary School
            </h1>
            <p className="lead text-light mb-4" style={{ maxWidth: '700px' }}>
              Empowering young minds with modern digital academics, experienced faculty, fully equipped science laboratories, and robust moral values.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/admissions" className="btn btn-primary btn-lg fw-bold px-4 py-3 shadow">
                Apply For Admission <FaArrowRight className="ms-2" />
              </Link>
              <Link to="/contact-us" className="btn btn-outline-light btn-lg fw-bold px-4 py-3">
                Visit Campus
              </Link>
            </div>
          </div>

          <div className="col-lg-4 text-center d-none d-lg-block">
            <div className="p-4 bg-white bg-opacity-10 backdrop-blur rounded-4 border border-light border-opacity-25 shadow-lg text-start">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-warning text-dark p-3 rounded-circle fs-3">
                  <FaGraduationCap />
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-white">Excellence in Education</h5>
                  <small className="text-white-50">Gonda, Uttar Pradesh</small>
                </div>
              </div>
              <p className="small text-light mb-3">
                Nursery se lekar Inter Science, Commerce aur Arts tak ki behtareen padhai ek hi campus mein.
              </p>
              <Link to="/about-us" className="text-warning fw-semibold text-decoration-none small">
                Read About Our Legacy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner