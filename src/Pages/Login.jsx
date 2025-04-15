import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {setToken} from '../AuthState/Auth';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.webp";  
import GoogleLogo from "../assets/Pic 4.png"; 
function App() {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, seteError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:8080/api/auth/login',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify({Email,Password}),
      });
      if(!response.ok){
        const erroData = await response.json();
        throw new Error(erroData.message || 'Login Failed, Please try again');
      }
      const data = await response.json();
      setToken(data.token);
      navigate('/');
    }catch(err){
      seteError(err.message || 'Terjadi Kesalahan');
    }
  }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-100 px-4 md:px-0">
      <div className="md:w-1/3 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-8 space-y-6">
        {/* Gambar modern */}
        <div className="flex justify-center">
          <img
            src={Logo}  
            alt="Login illustration"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        {error && <p className='text-red-500 text-center relative z-10 font-semibold  '>{error} </p>}
        {/* Form Login */}
        <div className="space-y-4">
          <input
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email Address"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
           
          />
          <input
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            id="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
           
          />
          
          {/* Remember me and forgot password */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold">
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

         {/* Google Login Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white hover:bg-sky-400 text-black text-sm font-semibold shadow-2xl"
          >
            {/* Ganti dengan gambar logo Google */}
            <img
            src={GoogleLogo} 
            alt="Google Logo"
            className="h-5 w-5"
          />

            Sign in with Google
          </button>
      </div>

        </div>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </div>
      </div>
    </section>
  );
}

export default App;
