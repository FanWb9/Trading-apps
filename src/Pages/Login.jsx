import React from 'react';

function App() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>

      <div className="md:w-1/3 max-w-sm flex flex-col justify-between h-full">
        <div>
          {/* Form login */}
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider w-full"
              type="submit"
            >
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.6 20.5H42V20H24v8h11.3C33.8 33.7 29.3 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 4.5 29.5 2 24 2 12.3 2 3 11.3 3 23s9.3 21 21 21c11 0 20.3-9 20.3-21 0-1.1-.1-2.1-.3-3.5z"
                />
                <path
                  fill="#e53935"
                  d="M6.3 14.7l6.6 4.8C14.3 16 18.8 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 4.5 29.5 2 24 2 16.3 2 9.5 6.4 6.3 14.7z"
                />
                <path
                  fill="#4caf50"
                  d="M24 44c5.2 0 10-2 13.5-5.2l-6.3-5.3C29.3 35.7 26.8 37 24 37c-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.3 44 24 44z"
                />
                <path
                  fill="#1565c0"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.4-4.1 6.1-7.8 7.2l6.3 5.3C37.1 37.9 42 31.7 42 24c0-1.1-.1-2.1-.4-3.5z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Register Link */}
        <div className="mt-3 font-semibold text-sm text-slate-500 text-center">
          Don't have an account?{' '}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
