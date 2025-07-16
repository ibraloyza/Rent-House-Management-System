import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      return setError('Passwords do not match.')
    }

    // Save user in localStorage
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
    }

    localStorage.setItem('user', JSON.stringify(userData))
    navigate('/home') // redirect to login page
  }

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <img src="./images/logo.png" alt="RentUP Logo" className="w-80 h-100" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create your account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg transition duration-300"
          >
            Create account
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signup
