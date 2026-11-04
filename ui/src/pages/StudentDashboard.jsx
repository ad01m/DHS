import React from 'react'
import {
  FaUserGraduate,
  FaBook,
  FaClipboardList,
  FaCalendarCheck,
  FaDownload,
  FaAward,
  FaBell,
} from 'react-icons/fa'

const StudentDashboard = () => {
  const studentInfo = {
    name: 'Adarsh Mishra',
    rollNo: '2026-DS-102',
    class: '12th - Science (PCM)',
    dob: '15 Aug 2008',
    fatherName: 'S. N. Mishra',
    attendance: '92%',
    rank: '2nd in Class',
  }

  const examMarks = [
    { subject: 'Physics', theory: 65, practical: 28, total: 93, grade: 'A1' },
    { subject: 'Chemistry', theory: 62, practical: 29, total: 91, grade: 'A1' },
    { subject: 'Mathematics', theory: 95, practical: 0, total: 95, grade: 'A1' },
    { subject: 'English Core', theory: 88, practical: 0, total: 88, grade: 'A2' },
    { subject: 'Computer Science', theory: 68, practical: 30, total: 98, grade: 'A1' },
  ]

  return (
    <div className="student-dashboard bg-light py-4 min-vh-100">
      <div className="container">
        
        {/* Welcome Banner */}
        <div className="card border-0 shadow-sm rounded-4 bg-primary text-white p-4 mb-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-white text-primary p-3 rounded-circle fs-3 d-inline-flex">
                <FaUserGraduate />
              </div>
              <div>
                <h4 className="fw-bold mb-1">Welcome back, {studentInfo.name}!</h4>
                <p className="text-white-50 mb-0 small">
                  Class: {studentInfo.class} | Roll No: {studentInfo.rollNo}
                </p>
              </div>
            </div>
            <button className="btn btn-warning fw-bold btn-sm d-flex align-items-center gap-2">
              <FaDownload /> Download Report Card
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-success text-white p-3 rounded-3 fs-4">
                <FaCalendarCheck />
              </div>
              <div>
                <small className="text-muted fw-semibold">Overall Attendance</small>
                <h4 className="fw-bold text-dark mb-0">{studentInfo.attendance}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-warning text-white p-3 rounded-3 fs-4">
                <FaAward />
              </div>
              <div>
                <small className="text-muted fw-semibold">Academic Rank</small>
                <h4 className="fw-bold text-dark mb-0">{studentInfo.rank}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
              <div className="bg-info text-white p-3 rounded-3 fs-4">
                <FaBook />
              </div>
              <div>
                <small className="text-muted fw-semibold">Active Subjects</small>
                <h4 className="fw-bold text-dark mb-0">5 Subjects</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Marksheet Table */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
              <div className="card-header bg-white p-3 border-bottom d-flex align-items-center justify-content-between">
                <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <FaClipboardList className="text-primary" /> Half-Yearly Marksheet (2026-27)
                </h5>
                <span className="badge bg-success">Status: Passed</span>
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Subject</th>
                        <th className="text-center">Theory</th>
                        <th className="text-center">Practical</th>
                        <th className="text-center">Total Marks</th>
                        <th className="text-center">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examMarks.map((row, index) => (
                        <tr key={index}>
                          <td className="fw-semibold text-dark">{row.subject}</td>
                          <td className="text-center text-muted">{row.theory}</td>
                          <td className="text-center text-muted">{row.practical}</td>
                          <td className="text-center fw-bold text-primary">{row.total} / 100</td>
                          <td className="text-center">
                            <span className="badge bg-primary px-2 py-1">{row.grade}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Announcements */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 bg-white p-4 mb-4">
              <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <FaBell className="text-warning" /> Class Notices
              </h5>
              <ul className="list-unstyled small mb-0">
                <li className="mb-3 border-bottom pb-2">
                  <strong className="d-block text-dark">Physics Lab Manual Submission</strong>
                  <span className="text-muted">Deadline: 15 Nov 2026</span>
                </li>
                <li className="mb-3 border-bottom pb-2">
                  <strong className="d-block text-dark">Pre-Board Exam Datesheet Released</strong>
                  <span className="text-muted">Exams starting from 01 Dec 2026</span>
                </li>
                <li>
                  <strong className="d-block text-dark">Sports Day Practice Notice</strong>
                  <span className="text-muted">Daily from 02:00 PM in playground</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentDashboard