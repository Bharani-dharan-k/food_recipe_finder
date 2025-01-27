import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav className="navbar">
    <h2 className="title">Recipe Finder</h2>
    <div className="navLinks">
        <Link to="/login" className="link">Login</Link>
    <Link to="/signup" className="link">Signup</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar