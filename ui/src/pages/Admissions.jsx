import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { FaGraduationCap, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import axiosClient from '../api/axiosClient' // <-- Imported centralized Axios client

// Form Validation Schema
const schema = yup.object().shape({
  studentName: yup.string().required('Student name is required').min(3, 'Name must be at least 3 characters'),
  fatherName: yup.string().required("Father's / Guardian name is required"),
  motherName: yup.string().required("Mother's name is required"),
  dob: yup.string().required('Date of birth is required'),
  gender: yup.string().required('Please select gender'),
  targetClass: yup.string().required('Please select class for admission'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian phone number'),
  email: yup.string().email('Enter a valid email address'),
  address: yup.string().required('Full address is required'),
})

const Admissions = () => {
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
      // Sending data to backend API via Axios client
      const response = await axiosClient.post('/admissions', data)

      await Swal.fire({
        title: 'Application Submitted!',
        html: `Thank you <b>${data.studentName}</b>.<br/>Your admission form for <b>Class ${data.targetClass}</b> has been saved successfully. Application ID: <b>${response.data._id || 'Saved'}</b>`,
        icon: 'success',
        confirmButtonColor: '#0d6efd',
      })

      reset()
    } catch (error) {
      console.error(error)
      Swal.fire({
        title: 'Submission Failed!',
        text: error.response?.data?.message || 'Something went wrong on the server. Please try again.',
        icon: 'error',
      })
    }
  }

  return (
    <div className="admissions-page bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">Session 2026 - 2027</span>
          <h2 className="fw-bold text-dark">Online Admission Registration</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Divyanshu Shukla Higher Secondary School mein admission ke liye neeche diya gaya form bharein.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                
                {/* 1. Student Details */}
                <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2 border-bottom pb-2">
                  <FaUser /> Student Information
                </h5>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Student Full Name *</label>
                    <input
                      type="text"
                      {...register('studentName')}
                      className={`form-control ${errors.studentName ? 'is-invalid' : ''}`}
                      placeholder="Enter student's name"
                    />
                    {errors.studentName && <div className="invalid-feedback">{errors.studentName.message}</div>}
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Date of Birth *</label>
                    <input
                      type="date"
                      {...register('dob')}
                      className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                    />
                    {errors.dob && <div className="invalid-feedback">{errors.dob.message}</div>}
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Gender *</label>
                    <select
                      {...register('gender')}
                      className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Seeking Admission in Class *</label>
                    <select
                      {...register('targetClass')}
                      className={`form-select ${errors.targetClass ? 'is-invalid' : ''}`}
                    >
                      <option value="">Select Class</option>
                      <option value="Nursery / KG">Nursery / LKG / UKG</option>
                      <option value="1st - 5th">Class 1st to 5th (Primary)</option>
                      <option value="6th - 8th">Class 6th to 8th (Middle)</option>
                      <option value="9th - 10th">Class 9th &amp; 10th (High School)</option>
                      <option value="11th - Science">Class 11th Science</option>
                      <option value="11th - Commerce">Class 11th Commerce</option>
                      <option value="11th - Arts">Class 11th Arts</option>
                      <option value="12th - Science">Class 12th Science</option>
                      <option value="12th - Commerce">Class 12th Commerce</option>
                      <option value="12th - Arts">Class 12th Arts</option>
                    </select>
                    {errors.targetClass && <div className="invalid-feedback">{errors.targetClass.message}</div>}
                  </div>
                </div>

                {/* 2. Parents Details */}
                <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2 border-bottom pb-2">
                  <FaGraduationCap /> Parents / Guardian Details
                </h5>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Father / Guardian Name *</label>
                    <input
                      type="text"
                      {...register('fatherName')}
                      className={`form-control ${errors.fatherName ? 'is-invalid' : ''}`}
                      placeholder="Father's full name"
                    />
                    {errors.fatherName && <div className="invalid-feedback">{errors.fatherName.message}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Mother Name *</label>
                    <input
                      type="text"
                      {...register('motherName')}
                      className={`form-control ${errors.motherName ? 'is-invalid' : ''}`}
                      placeholder="Mother's full name"
                    />
                    {errors.motherName && <div className="invalid-feedback">{errors.motherName.message}</div>}
                  </div>
                </div>

                {/* 3. Contact & Address */}
                <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2 border-bottom pb-2">
                  <FaPhoneAlt /> Contact &amp; Address Details
                </h5>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Mobile Number *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="10 digit mobile number"
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address (Optional)</label>
                    <input
                      type="email"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="example@gmail.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Full Residential Address *</label>
                    <textarea
                      rows="3"
                      {...register('address')}
                      className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                      placeholder="Village/Mohalla, Post, District, State, Pincode"
                    ></textarea>
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Form...' : 'Submit Admission Form'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admissions