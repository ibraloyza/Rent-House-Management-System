import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (!storedUser) {
      return setError('No user found. Please sign up first.')
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      return setError('Invalid email or password.')
    }

    localStorage.setItem('isLoggedIn', true)
    navigate('/') // ✅ redirect after login
  }

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src="./images/logo.png" alt="RentUP Logo" className="w-80 h-100" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign in to your account
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none bg-gray-50"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none bg-gray-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg transition duration-300"
          >
            Sign in
          </button>

          <p className="text-sm text-center text-gray-600">
            Don’t have an account yet?{' '}
            <Link to="/signup" className="text-green-500 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login
