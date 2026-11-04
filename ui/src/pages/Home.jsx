import React from 'react'
import HeroBanner from '../components/HeroBanner'
import NoticeBoard from '../components/NoticeBoard'
import PrincipalMessage from '../components/PrincipalMessage'
import { FaBookReader, FaAward, FaUserGraduate, FaFlask } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      {/* 1. Hero Banner Component */}
      <HeroBanner />

      {/* 2. Notice Board & Principal Message Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <PrincipalMessage />
            </div>
            <div className="col-lg-5">
              <NoticeBoard />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facilities Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Why Choose Our School?</h2>
            <p className="text-muted">Providing world-class facilities and academic excellence.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <FaBookReader className="fs-1 text-primary mb-3 mx-auto" />
                <h5 className="fw-bold">Smart Classrooms</h5>
                <p className="text-muted small">Digital boards &amp; interactive learning for all standards.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <FaFlask className="fs-1 text-success mb-3 mx-auto" />
                <h5 className="fw-bold">Science Labs</h5>
                <p className="text-muted small">Fully equipped Physics, Chemistry, and Biology labs.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <FaUserGraduate className="fs-1 text-warning mb-3 mx-auto" />
                <h5 className="fw-bold">Expert Faculty</h5>
                <p className="text-muted small">Experienced teachers dedicated to student growth.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <FaAward className="fs-1 text-danger mb-3 mx-auto" />
                <h5 className="fw-bold">Sports &amp; Culture</h5>
                <p className="text-muted small">Big playgrounds, annual sports, and cultural events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home