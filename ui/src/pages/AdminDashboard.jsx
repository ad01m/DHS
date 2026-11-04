import React from 'react'
import {
  FaUserShield,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRupeeSign,
  FaBullhorn,
  FaCog,
  FaFileAlt,
} from 'react-icons/fa'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard bg-light py-4 min-vh-100">
      <div className="container">
        
        {/* Welcome Banner */}
        <div className="card border-0 shadow-sm rounded-4 bg-dark text-white p-4 mb-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-circle fs-3 d-inline-flex">
                <FaUserShield />
              </div>
              <div>
                <h4 className="fw-bold mb-1">Admin Control Center</h4>
                <p className="text-white-50 mb-0 small">
                  Divyanshu Shukla Higher Secondary School Management System
                </p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary btn-sm fw-bold">Post Notice</button>
              <button className="btn btn-outline-light btn-sm fw-bold">School Settings</button>
            </div>
          </div>
        </div>

        {/* Admin Stats Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-3 fs-4">
                <FaUserGraduate />
              </div>
              <div>
                <small className="text-muted fw-semibold">Total Students</small>
                <h4 className="fw-bold text-dark mb-0">1,250+</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-success text-white p-3 rounded-3 fs-4">
                <FaChalkboardTeacher />
              </div>
              <div>
                <small className="text-muted fw-semibold">Total Teachers</small>
                <h4 className="fw-bold text-dark mb-0">65+</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-warning text-white p-3 rounded-3 fs-4">
                <FaFileAlt />
              </div>
              <div>
                <small className="text-muted fw-semibold">Admission Forms</small>
                <h4 className="fw-bold text-dark mb-0">48 Pending</h4>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-danger text-white p-3 rounded-3 fs-4">
                <FaRupeeSign />
              </div>
              <div>
                <small className="text-muted fw-semibold">Fee Collection</small>
                <h4 className="fw-bold text-dark mb-0">₹8.4 Lakh</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Management Cards */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 bg-white p-4 h-100">
              <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <FaBullhorn className="text-primary" /> Recent System Activities
              </h5>
              <ul className="list-unstyled small mb-0">
                <li className="mb-3 border-bottom pb-2">
                  <strong className="d-block text-dark">New Admission Application Received</strong>
                  <span className="text-muted">Student: Rahul Kumar (Class 11th Science) — 10 mins ago</span>
                </li>
                <li className="mb-3 border-bottom pb-2">
                  <strong className="d-block text-dark">Fee Receipt Generated</strong>
                  <span className="text-muted">Roll No: 2026-DS-102 (₹12,500) — 1 hour ago</span>
                </li>
                <li>
                  <strong className="d-block text-dark">Notice Board Updated</strong>
                  <span className="text-muted">By Admin Office — Yesterday</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 bg-white p-4 h-100">
              <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <FaCog className="text-success" /> Quick Admin Actions
              </h5>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary text-start fw-semibold py-2">
                  + Register New Student / Assign Roll Number
                </button>
                <button className="btn btn-outline-success text-start fw-semibold py-2">
                  + Add New Teacher Account &amp; Credentials
                </button>
                <button className="btn btn-outline-warning text-start fw-semibold py-2">
                  📢 Broadcast Urgent SMS / Circular to All Parents
                </button>
                <button className="btn btn-outline-danger text-start fw-semibold py-2">
                  📊 Generate Monthly Fee &amp; Attendance Report
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard