import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa'
import axiosClient from '../api/axiosClient' // <-- Import centralized axios client

// Form Validation Schema
const schema = yup.object().shape({
  userId: yup.string().required('User ID / Registration No / Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
})

const Login = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState('student') // 'student', 'teacher', 'admin'
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole)
    reset()
  }

  const onLoginSubmit = async (data) => {
    try {
      // Backend API call for real authentication
      const response = await axiosClient.post('/auth/login', {
        userId: data.userId,
        password: data.password,
        role: role // 'student', 'teacher', or 'admin'
      })

      // Store JWT token and user info securely in localStorage
      localStorage.setItem('school_token', response.data.token)
      localStorage.setItem('school_user', JSON.stringify(response.data.user))

      await Swal.fire({
        title: 'Login Successful!',
        text: `Welcome back, ${response.data.user.name || role.toUpperCase()}!`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      })

      // Redirect to respective dashboard after login
      if (role === 'admin') navigate('/admin-dashboard')
      else if (role === 'teacher') navigate('/teacher-dashboard')
      else navigate('/student-dashboard')

    } catch (error) {
      console.error(error)
      Swal.fire({
        title: 'Login Failed',
        text: error.response?.data?.message || 'Invalid User ID or Password. Please try again.',
        icon: 'error',
      })
    }
  }

  return (
    <div className="login-page bg-light py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            
            {/* Card Wrapper */}
            <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
              
              {/* Header */}
              <div className="bg-primary text-white text-center p-4">
                <h4 className="fw-bold mb-1">Divyanshu Shukla H.S. School</h4>
                <p className="text-white-50 small mb-0">Official School ERP &amp; Learning Portal</p>
              </div>

              <div className="card-body p-4 p-md-5">
                
                {/* Role Switcher Tabs */}
                <div className="d-flex bg-light p-1 rounded-3 mb-4">
                  <button
                    type="button"
                    className={`btn flex-fill btn-sm fw-bold d-flex align-items-center justify-content-center gap-1 py-2 ${
                      role === 'student' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                    }`}
                    onClick={() => handleRoleChange('student')}
                  >
                    <FaUserGraduate /> Student
                  </button>

                  <button
                    type="button"
                    className={`btn flex-fill btn-sm fw-bold d-flex align-items-center justify-content-center gap-1 py-2 ${
                      role === 'teacher' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                    }`}
                    onClick={() => handleRoleChange('teacher')}
                  >
                    <FaChalkboardTeacher /> Teacher
                  </button>

                  <button
                    type="button"
                    className={`btn flex-fill btn-sm fw-bold d-flex align-items-center justify-content-center gap-1 py-2 ${
                      role === 'admin' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                    }`}
                    onClick={() => handleRoleChange('admin')}
                  >
                    <FaUserShield /> Admin
                  </button>
                </div>

                {/* Form Heading */}
                <h5 className="fw-bold text-dark text-center mb-4 text-capitalize">
                  {role} Portal Login
                </h5>

                <form onSubmit={handleSubmit(onLoginSubmit)}>
                  {/* User ID Field */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      {role === 'student' ? 'Registration / Roll No' : role === 'teacher' ? 'Teacher ID / Email' : 'Admin ID'} *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        {...register('userId')}
                        className={`form-control border-start-0 ${errors.userId ? 'is-invalid' : ''}`}
                        placeholder={role === 'student' ? 'Enter Roll / Reg No' : 'Enter User ID'}
                      />
                    </div>
                    {errors.userId && <div className="text-danger small mt-1">{errors.userId.message}</div>}
                  </div>

                  {/* Password Field */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Password *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <FaLock />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password')}
                        className={`form-control border-start-0 border-end-0 ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-start-0 bg-light"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && <div className="text-danger small mt-1">{errors.password.message}</div>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fw-bold text-uppercase"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Verifying...' : `Sign In as ${role}`}
                  </button>
                </form>
              </div>

              {/* Footer Note */}
              <div className="card-footer bg-light text-center py-3 border-0">
                <small className="text-muted">
                  Forgot Password? Please contact School Computer Lab / Admin Office.
                </small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login