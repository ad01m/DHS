import React from 'react'
import {
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardCheck,
  FaBookOpen,
  FaUpload,
  FaCalendarAlt,
} from 'react-icons/fa'

const TeacherDashboard = () => {
  const teacherInfo = {
    name: 'Mr. Rajesh Shukla',
    subject: 'Senior Physics & Science HOD',
    employeeId: 'DS-TCH-204',
    classesAssigned: ['11th Science', '12th Science (PCM)'],
    totalStudents: 145,
  }

  const assignedClasses = [
    { className: 'Class 12th - Science', time: '09:00 AM - 10:00 AM', room: 'Lab 01', strength: 48 },
    { className: 'Class 11th - Physics', time: '10:30 AM - 11:30 AM', room: 'Room 204', strength: 52 },
    { className: 'Class 12th - Practical Lab', time: '01:00 PM - 03:00 PM', room: 'Physics Lab', strength: 45 },
  ]

  return (
    <div className="teacher-dashboard bg-light py-4 min-vh-100">
      <div className="container">
        
        {/* Welcome Banner */}
        <div className="card border-0 shadow-sm rounded-4 bg-success text-white p-4 mb-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-white text-success p-3 rounded-circle fs-3 d-inline-flex">
                <FaChalkboardTeacher />
              </div>
              <div>
                <h4 className="fw-bold mb-1">Welcome, {teacherInfo.name}!</h4>
                <p className="text-white-50 mb-0 small">
                  {teacherInfo.subject} | ID: {teacherInfo.employeeId}
                </p>
              </div>
            </div>
            <button className="btn btn-light text-success fw-bold btn-sm">
              <FaUpload className="me-1" /> Upload Assignment / Notes
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-3 fs-4">
                <FaUsers />
              </div>
              <div>
                <small className="text-muted fw-semibold">Total Students</small>
                <h4 className="fw-bold text-dark mb-0">{teacherInfo.totalStudents}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-warning text-white p-3 rounded-3 fs-4">
                <FaBookOpen />
              </div>
              <div>
                <small className="text-muted fw-semibold">Classes Assigned</small>
                <h4 className="fw-bold text-dark mb-0">3 Sections</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-info text-white p-3 rounded-3 fs-4">
                <FaClipboardCheck />
              </div>
              <div>
                <small className="text-muted fw-semibold">Attendance Status</small>
                <h4 className="fw-bold text-dark mb-0">Submitted</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Timetable / Classes Table */}
        <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
          <div className="card-header bg-white p-3 border-bottom d-flex align-items-center justify-content-between">
            <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
              <FaCalendarAlt className="text-success" /> Today&apos;s Class Schedule
            </h5>
            <span className="badge bg-success">Active Session</span>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Class &amp; Subject</th>
                    <th>Timing</th>
                    <th>Room / Lab</th>
                    <th className="text-center">Strength</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedClasses.map((item, index) => (
                    <tr key={index}>
                      <td className="fw-semibold text-dark">{item.className}</td>
                      <td className="text-muted">{item.time}</td>
                      <td>{item.room}</td>
                      <td className="text-center">{item.strength} Students</td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-outline-success">Mark Attendance</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TeacherDashboard