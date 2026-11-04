import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const PrincipalMessage = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
      <div className="row g-4 align-items-center">
        <div className="col-md-4 text-center">
          <div className="position-relative d-inline-block">
            <img
              src="/images/principal.jpg"
              alt="Principal"
              className="rounded-circle border border-3 border-primary shadow-sm img-fluid"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              onError={(e) => {
                // Fallback icon photo agar local image absent ho
                e.target.src = 'https://via.placeholder.com/150?text=Principal'
              }}
            />
            <span className="position-absolute bottom-0 end-0 bg-primary text-white p-2 rounded-circle shadow-sm">
              <FaQuoteLeft className="small" />
            </span>
          </div>
          <h5 className="fw-bold mt-3 mb-0 text-dark">Avanish Shukla</h5>
          <small className="text-muted fw-semibold">Principal &amp; Founder</small>
        </div>

        <div className="col-md-8">
          <h4 className="fw-bold text-primary mb-3">Message From Principal Desk</h4>
          <p className="text-secondary fst-italic mb-3">
            &quot;Education is not merely the learning of facts, but the training of the mind to think. At Divyanshu Shukla Higher Secondary School, our mission is to nurture holistic individuals with strong moral principles and modern academic excellence.&quot;
          </p>
          <p className="text-muted small mb-0">
            We provide a disciplined yet supportive environment where students are encouraged to explore their maximum potential in academics, sports, and creative arts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrincipalMessage