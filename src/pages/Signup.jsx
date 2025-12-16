import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [place, setPlace] = useState('');
    const [age, setAge] = useState('');
    const [education, setEducation] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Save user info in localStorage
        const user = { username, place, age, education, contact, email, password };
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect to login page
        navigate('/login', { replace: true });
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 relative"
            style={{
                backgroundImage:
                    "url('https://thumbs.dreamstime.com/b/books-flying-magical-library-409161274.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative max-w-md w-full bg-white bg-opacity-90 p-8 rounded-xl shadow-lg z-10">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleSignup} className="space-y-5">
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        required
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Place"
                    />
                    <input
                        type="number"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Age"
                    />
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Email address"
                    />
                    <input
                        type="text"
                        required
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Education"
                    />
                    <input
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Contact"
                    />
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Password"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
