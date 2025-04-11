import React from 'react';

function App() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16 mx-5 my-2 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
        />
      </div>
      <div className="md:w-1/3 max-w-sm text-center md:text-left">
        <h2 className="text-xl font-semibold mb-6 text-slate-700">Login with Google</h2>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-700 border border-gray-300 rounded py-2 px-4 hover:bg-gray-100 shadow"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google icon"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </section>
  );
}

export default App;
