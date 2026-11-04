import React from 'react'
import { FaHistory, FaEye, FaBullseye, FaAward, FaCheckCircle, FaUserTie } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div className="about-page bg-light py-5">
      <div className="container">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">Our Legacy</span>
          <h2 className="fw-bold text-dark">About Divyanshu Shukla Higher Secondary School</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Nurturing intellect, building character, and empowering the future leaders of society with quality education since foundation.
          </p>
        </div>

        {/* Section 1: History & Introduction */}
        <div className="row align-items-center g-5 mb-5 bg-white p-4 p-md-5 rounded-4 shadow-sm">
          <div className="col-lg-6">
            <span className="text-primary fw-bold text-uppercase small">Established With Purpose</span>
            <h3 className="fw-bold text-dark mb-3">A Tradition of Academic Excellence in Gonda</h3>
            <p className="text-secondary leading-relaxed">
              Divyanshu Shukla Higher Secondary School ki sthapna is uddeshya ke sath ki gayi thi ki gramin aur shohri kshetro ke bachho ko 
              aadhunik (modern) shiksha ke sath-sath uchch sanskar aur naitik mulya (moral values) pradan kiye ja saken.
            </p>
            <p className="text-muted small mb-4">
              Humara campus n sirf padhai, balki sports, science laboratories, smart classrooms aur extracurricular activities me bhi 
              vidyarthiyo ke sarvangin vikas (holistic development) par vishesh dhyan deta hai.
            </p>
            
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span className="fw-semibold small">Experienced Faculty</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span className="fw-semibold small">Advanced Science Labs</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span className="fw-semibold small">Smart Digital Classes</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span className="fw-semibold small">Safe Campus &amp; Transport</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="position-relative">
              <div className="bg-primary rounded-4 p-2 shadow">
                <div className="bg-dark rounded-3 text-white p-5 text-center" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <FaHistory className="fs-1 text-warning mb-3" />
                  <h4 className="fw-bold">Building Futures Since Years</h4>
                  <p className="text-white-50 small mb-0">Commitment to discipline, knowledge, and success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-start border-primary border-5">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-primary text-white p-3 rounded-circle fs-4">
                  <FaBullseye />
                </div>
                <h4 className="fw-bold text-dark mb-0">Our Mission</h4>
              </div>
              <p className="text-muted mb-0">
                Pratyek vidyarthi ko ek aisa anukul vatavaran dena jahan vah apni aantarik kshamata (potential) ko pehchan sake, 
                gyan arjit kar sake aur samaj ke prati apni jimmedariyon ko samajhte hue ek behtareen nagrik ban sake.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-start border-warning border-5">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-warning text-dark p-3 rounded-circle fs-4">
                  <FaEye />
                </div>
                <h4 className="fw-bold text-dark mb-0">Our Vision</h4>
              </div>
              <p className="text-muted mb-0">
                Kshetra ka sabse agraganya (leading) educational institution banana, jahan high-tech learning methods aur traditional 
                values ka anokha sangam ho, jisse har bachha desh aur duniya me school ka naam roshan kar sake.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Management / Leadership Desk */}
        <div className="card border-0 shadow-sm rounded-4 bg-white p-4 p-md-5 text-center">
          <div className="mx-auto" style={{ maxWidth: '700px' }}>
            <div className="bg-primary text-white p-3 rounded-circle fs-3 d-inline-flex mb-3">
              <FaUserTie />
            </div>
            <h3 className="fw-bold text-dark mb-3">Leadership &amp; Management</h3>
            <p className="text-secondary mb-4">
              &quot;Humaara uddeshya sirf kitabi gyan dena nahi, balki bachho me aatmavishwas, naitikta aur leadership qualities 
              develop karna hai. Humari dedicated teachers team har student par vyaktigat dyan deti hai.&quot;
            </p>
            <h5 className="fw-bold text-primary mb-1">Divyanshu Shukla</h5>
            <small className="text-muted fw-semibold">Founder &amp; Principal</small>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs