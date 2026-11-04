import React from 'react'
import { FaBell, FaCalendarAlt, FaChevronRight } from 'react-icons/fa'

const sampleNotices = [
  {
    id: 1,
    title: 'Admissions Open for Session 2026-27',
    date: '10 Feb 2026',
    category: 'Admission',
    isNew: true,
  },
  {
    id: 2,
    title: 'Annual Examination Schedule Announced for Class 9th & 11th',
    date: '05 Feb 2026',
    category: 'Exam',
    isNew: true,
  },
  {
    id: 3,
    title: 'Parents-Teacher Meeting (PTM) Scheduled for Classes 1 to 8',
    date: '28 Jan 2026',
    category: 'Meeting',
    isNew: false,
  },
  {
    id: 4,
    title: 'Science & Art Exhibition 2026 - Registration Details',
    date: '15 Jan 2026',
    category: 'Event',
    isNew: false,
  },
]

const NoticeBoard = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
      <div className="card-header bg-primary text-white p-3 d-flex align-items-center justify-content-between">
        <h5 className="mb-0 fw-bold d-flex align-items-center gap-2">
          <FaBell className="text-warning" /> School Notice Board
        </h5>
        <span className="badge bg-light text-primary fw-semibold">Live Updates</span>
      </div>

      <div className="card-body p-0">
        <div className="list-group list-group-flush">
          {sampleNotices.map((notice) => (
            <div key={notice.id} className="list-group-item p-3 list-group-item-action border-bottom">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <small className="text-muted d-flex align-items-center gap-1">
                  <FaCalendarAlt className="text-secondary" /> {notice.date}
                </small>
                {notice.isNew && (
                  <span className="badge bg-danger text-uppercase" style={{ fontSize: '10px' }}>
                    NEW
                  </span>
                )}
              </div>
              <h6 className="fw-semibold text-dark mb-1 d-flex align-items-center justify-content-between">
                <span>{notice.title}</span>
                <FaChevronRight className="text-muted small ms-2" />
              </h6>
              <span className="badge bg-light text-secondary border small fw-normal">
                {notice.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-footer bg-light text-center py-2 border-0">
        <small className="text-primary fw-semibold cursor-pointer">
          View All Official Circulars &rarr;
        </small>
      </div>
    </div>
  )
}

export default NoticeBoard