import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utilities/AuthContext';

export default function Navbar() {
    const { token, logout } = useAuth()
    const handleSubmit = e => {
        e.preventDefault()
        logout()
        console.log('successful logout')
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light pt-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="/SAPLING.png" width="160" className="ms-5" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className=" nav navbar-nav ms-auto navbar-right">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/register">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li> */}
                        </ul>
                    </div>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        {!token && <button className="btn btn-outline-success" type="submit"><Link style={{color: 'grey', textDecoration: 'none'}} to="/register">Register</Link></button>}
                        {!token && <button className="btn btn-outline-success" type="submit"><Link style={{color: 'grey', textDecoration: 'none'}} to="/login">Login</Link></button>}
                        {token && <Link className="nav-link" style={{color: 'grey'}} to="/community">Community</Link>}
                        {token && <Link className="nav-link" style={{color: 'grey'}} to="/dashboard">DashBoard</Link>}
                        {token && <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}><Link style={{color: 'grey', textDecoration: 'none'}} to="/">Logout</Link></button>}
                 
                    </form>
                </div>
            </nav>
        </div>
    )
}

