import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, email, password });

    // Redirect to home page
    navigate('/home');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://public-files.gumroad.com/mg9w28eqy8qlg3pwefm0lbrbmvkn')",
          backgroundSize: "100%", // Resize image to 80% of container
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  
      }}
    >
       
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Form container with higher z-index */}
      <div className="relative max-w-md w-full space-y-8 bg-white bg-opacity-90 p-10 rounded-xl shadow-lg z-10">
        <div>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to Bookstore
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-3 py-2 border rounded-t-md"
                placeholder="Username"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 border"
                placeholder="Email address"
              />
            </div>

            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 border rounded-b-md"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>

          {/* Create Account Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
