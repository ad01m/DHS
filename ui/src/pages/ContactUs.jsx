import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

const schema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: yup.string().email('Enter a valid email'),
  message: yup.string().required('Message cannot be empty'),
})

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitForm = async (data) => {
    try {
      await Swal.fire({
        title: 'Message Sent!',
        text: `Thank you ${data.name}, your enquiry has been received. Our team will contact you soon.`,
        icon: 'success',
        confirmButtonColor: '#0d6efd',
      })
      reset()
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
      })
    }
  }

  return (
    <div className="contact-page bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">Get In Touch</span>
          <h2 className="fw-bold text-dark">Contact School Administration</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Have questions about admissions, fees, or school timings? Feel free to reach out to us.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {/* Contact Details Cards */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <h5 className="fw-bold text-primary mb-4">Contact Information</h5>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-primary text-white p-3 rounded-circle fs-5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">School Campus</h6>
                  <p className="text-muted small mb-0">
                    Divyanshu Shukla Higher Secondary School, Tarabganj Road, Gonda, UP
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-success text-white p-3 rounded-circle fs-5">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone Numbers</h6>
                  <p className="text-muted small mb-0">+91-XXXXXXXXXX (Office)</p>
                  <p className="text-muted small mb-0">+91-XXXXXXXXXX (Admissions)</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-warning text-white p-3 rounded-circle fs-5">
                  <FaEnvelope />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email Address</h6>
                  <p className="text-muted small mb-0">info@divyanshushuklaschool.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-danger text-white p-3 rounded-circle fs-5">
                  <FaClock />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Office Hours</h6>
                  <p className="text-muted small mb-0">Monday - Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-muted small mb-0">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <h5 className="fw-bold text-dark mb-4">Send Us a Direct Message</h5>

              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Your Name *</label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Enter full name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Mobile Number *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="10 digit phone number"
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Email Address (Optional)</label>
                    <input
                      type="email"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Your Enquiry / Message *</label>
                    <textarea
                      rows="4"
                      {...register('message')}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Write your query here..."
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2 fw-bold d-inline-flex align-items-center gap-2"
                      disabled={isSubmitting}
                    >
                      <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="ratio ratio-21x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113936.72147361735!2d81.9!3d27.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA2JzAwLjAiTiA4McKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              title="School Google Map Location"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs