import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // To display error messages
  const navigate = useNavigate(); // useNavigate for redirection

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      console.log('Login successful:', response.data);

      // Store the token or user details if needed
      // localStorage.setItem('token', response.data.token); // Uncomment if using JWT

      // Redirect to the RecipeFinder component after successful login
      navigate('/recipefinder');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data.message : error.message);
      setError(error.response ? error.response.data.message : 'An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login;
