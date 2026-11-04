import React from 'react'
import { FaGraduationCap, FaBookReader, FaFlask, FaCalculator, FaLaptopCode, FaAward, FaCheckCircle } from 'react-icons/fa'

const Academics = () => {
  return (
    <div className="academics-page bg-light py-5">
      <div className="container">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">Excellence in Learning</span>
          <h2 className="fw-bold text-dark">Academic Programs &amp; Curriculum</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Divyanshu Shukla Higher Secondary School mein Primary se lekar Inter Science, Commerce aur Arts tak ki aadhunik aur gunvattapurn shiksha di jati hai.
          </p>
        </div>

        {/* Section 1: Sections Overview */}
        <div className="row g-4 mb-5">
          
          {/* Primary & Middle */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-primary text-white p-3 rounded-circle fs-4">
                  <FaBookReader />
                </div>
                <div>
                  <h4 className="fw-bold text-dark mb-0">Primary &amp; Middle Section</h4>
                  <small className="text-muted">Classes: Nursery to 8th Standard</small>
                </div>
              </div>
              <p className="text-secondary small mb-3">
                Foundation years me bachho ki basic reading, writing, mathematical skills aur moral values par vishesh dyan diya jata hai.
              </p>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Interactive Smart Classrooms</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Play-way method for kindergarten</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Spoken English &amp; Computer Basics</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Regular Activity &amp; Craft Classes</li>
              </ul>
            </div>
          </div>

          {/* High School */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-success text-white p-3 rounded-circle fs-4">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="fw-bold text-dark mb-0">High School Section</h4>
                  <small className="text-muted">Classes: 9th &amp; 10th Standard</small>
                </div>
              </div>
              <p className="text-secondary small mb-3">
                Board exams (UP Board / CBSE pattern) ki behtareen taiyari ke liye conceptual learning aur regular mock tests karaye jate hain.
              </p>
              <ul className="list-unstyled small text-muted mb-0">
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Comprehensive Science &amp; Maths coaching</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Weekly unit tests &amp; doubt sessions</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Practical lab training for Science</li>
                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Special guidance for board preparation</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section 2: Intermediate Streams (11th & 12th) */}
        <div className="card border-0 shadow-sm rounded-4 bg-white p-4 p-md-5 mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark">Intermediate Streams (Classes 11th &amp; 12th)</h3>
            <p className="text-muted small">Vidyarthiyo ke career goal ke anusar hum teen pramukh streams pradan karte hain:</p>
          </div>

          <div className="row g-4">
            
            {/* Science Stream */}
            <div className="col-md-4">
              <div className="bg-light p-4 rounded-4 h-100 border-top border-primary border-4">
                <FaFlask className="fs-2 text-primary mb-3" />
                <h5 className="fw-bold text-dark">Science Stream</h5>
                <p className="text-muted small mb-3"><strong>Subjects:</strong> Physics, Chemistry, Mathematics / Biology, English, Hindi / Computer.</p>
                <p className="text-secondary small mb-0">Engineering (JEE) aur Medical (NEET) ki buniyad mazboot karne ke liye ideal.</p>
              </div>
            </div>

            {/* Commerce Stream */}
            <div className="col-md-4">
              <div className="bg-light p-4 rounded-4 h-100 border-top border-success border-4">
                <FaCalculator className="fs-2 text-success mb-3" />
                <h5 className="fw-bold text-dark">Commerce Stream</h5>
                <p className="text-muted small mb-3"><strong>Subjects:</strong> Accountancy, Business Studies, Economics, Mathematics / Hindi, English.</p>
                <p className="text-secondary small mb-0">Banking, CA, CS, aur corporate sector me career banane ke liye.</p>
              </div>
            </div>

            {/* Arts Stream */}
            <div className="col-md-4">
              <div className="bg-light p-4 rounded-4 h-100 border-top border-warning border-4">
                <FaAward className="fs-2 text-warning mb-3" />
                <h5 className="fw-bold text-dark">Arts / Humanities</h5>
                <p className="text-muted small mb-3"><strong>Subjects:</strong> History, Geography, Political Science, Sociology, English, Hindi.</p>
                <p className="text-secondary small mb-0">Civil Services (IAS/PCS), law, teaching aur public administration ke liye.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Examination & Evaluation Policy */}
        <div className="row align-items-center g-4 bg-primary text-white p-4 p-md-5 rounded-4 shadow">
          <div className="col-lg-8">
            <h3 className="fw-bold mb-3">Examination &amp; Continuous Evaluation</h3>
            <p className="text-white-50 mb-0">
              Hum sirf saal ke ant me nahi, balki pure session ke dauran periodic tests, half-yearly exams aur pre-board examinations ke madhyam se bachho ki progress ko track karte hain, jisse students exam ke pressure se mukt hokar behtar pradarshan kar saken.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <span className="badge bg-warning text-dark px-4 py-3 fw-bold fs-6">Session 2026-27 Active</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Academics