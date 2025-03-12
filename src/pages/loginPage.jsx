import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="mr-2" aria-label="Remember me" />
                            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                        </div>
                        <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button with Framer Motion */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                    >
                        Login
                    </motion.button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center mt-4">
                    Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-800">Sign up</Link>
                </p>
            </motion.div>
        </div>
    );
}
