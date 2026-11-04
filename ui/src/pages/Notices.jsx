import React, { useState, useEffect } from 'react'
import axiosClient from '../api/axiosClient' // <-- Backend API client connection
import { FaBell, FaCalendarAlt, FaDownload, FaFilter, FaSearch, FaSpinner } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Notices = () => {
  const [allNotices, setAllNotices] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterCategory, setFilterCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch notices from backend API when component mounts
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosClient.get('/notices')
        setAllNotices(response.data)
      } catch (error) {
        console.error('Failed to fetch notices:', error)
        Swal.fire({
          title: 'Error',
          text: 'Backend se notices load karne me samasya aayi. Kripya server check karein.',
          icon: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchNotices()
  }, [])

  // Filter notices based on category & search term
  const filteredNotices = allNotices.filter((notice) => {
    const matchesCategory = filterCategory === 'All' || notice.category === filterCategory
    const matchesSearch = 
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      notice.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleDownloadNotice = (title) => {
    Swal.fire({
      title: 'Downloading PDF...',
      text: `Circular: "${title}" download ho raha hai.`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    })
  }

  return (
    <div className="notices-page bg-light py-5 min-vh-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">Official Announcements</span>
          <h2 className="fw-bold text-dark">School Notice Board &amp; Circulars</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            School ki sabhi latest news, exam datesheets, holiday lists aur circulars yahan dekhen.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="card border-0 shadow-sm rounded-4 p-3 bg-white mb-4">
          <div className="row g-3 align-items-center justify-content-between">
            
            {/* Category Filter Buttons */}
            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="text-muted small fw-bold me-2">
                  <FaFilter className="me-1" /> Filter:
                </span>
                {['All', 'Admission', 'Exam', 'Meeting', 'Event', 'Sports'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`btn btn-sm fw-semibold rounded-pill px-3 ${
                      filterCategory === cat ? 'btn-primary' : 'btn-outline-secondary'
                    }`}
                    onClick={() => setFilterCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Box */}
            <div className="col-lg-4">
              <div className="input-group input-group-sm">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 bg-light"
                  placeholder="Search notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Notice List / Loading State */}
        {loading ? (
          <div className="text-center py-5">
            <FaSpinner className="fa-spin fs-1 text-primary mb-3" />
            <p className="text-muted fw-semibold">Loading notices from database...</p>
          </div>
        ) : (
          <div className="row g-3">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <div className="col-12" key={notice._id || notice.id}>
                  <div className="card border-0 shadow-sm rounded-4 p-4 bg-white transition-hover">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <span className="badge bg-primary px-2 py-1">{notice.category}</span>
                          <small className="text-muted d-flex align-items-center gap-1">
                            <FaCalendarAlt /> {notice.date}
                          </small>
                          {notice.isNewNotice && (
                            <span className="badge bg-danger text-uppercase" style={{ fontSize: '10px' }}>
                              NEW
                            </span>
                          )}
                        </div>
                        <h4 className="fw-bold text-dark mb-2">{notice.title}</h4>
                        <p className="text-secondary small mb-0">{notice.description}</p>
                      </div>

                      <div className="col-lg-3 text-lg-end mt-3 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm fw-bold d-inline-flex align-items-center gap-2"
                          onClick={() => handleDownloadNotice(notice.title)}
                        >
                          <FaDownload /> Download Circular
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="bg-white p-5 rounded-4 shadow-sm">
                  <FaBell className="fs-1 text-muted mb-3" />
                  <h5 className="fw-bold text-dark">No Notices Found</h5>
                  <p className="text-muted small mb-0">Aapke search term ya category se match karta koi notice uplabdh nahi hai.</p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}

export default Notices