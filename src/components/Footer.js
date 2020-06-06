import React from 'react'
import { Nav } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Nav className="d-flex justify-content-center flex-column footer mt-md-0 p-4 w-100">
            <div className="d-flex justify-content-center flex-wrap w-75 mx-auto">
                <Link to='/' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    HOME
                </Link>
                <Link to='/rooms' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    ROOMS
                </Link>
                <Link to='/#services' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    SERVICES
                </Link>
                <Link to='/contact' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    CONTACT
                </Link>
            </div>
            <div className="social-links d-flex justify-content-center mx-auto w-75 my-md-5 my-3">
                <a href="#" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-instagram" style={{fontSize: '28px'}}></i>
                </a>
                <a href="#" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-facebook" style={{fontSize: '28px'}}></i>
                </a>
                <a href="#" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-linkedin" style={{fontSize: '28px'}}></i>
                </a>
                <a href="#" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-envelope" style={{fontSize: '28px'}}></i>
                </a>
            </div>
        </Nav>
    )
}