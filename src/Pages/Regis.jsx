import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp';

function Register() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-100 px-4 md:px-0">
      <div className="md:w-1/3 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-8 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>

        {/* Form Register */}
        <div className="space-y-4">
          <input
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Confirm Password"
          />

          {/* Register Button */}
          <div className="text-center">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold">
              Register
            </button>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
