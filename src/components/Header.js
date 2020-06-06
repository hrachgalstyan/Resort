import React, { useState, useEffect } from 'react'
import logo from '../images/logo.svg';
import { Collapse, Navbar, NavbarToggler, Nav} from 'reactstrap';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => {
            setIsOpen(!isOpen);
        }
        const toggleNav = () => setIsOpen(false);

        useEffect(() => {
            AOS.init({})
        }, [])

        return (
            <div className="d-flex justify-content-center">
                <Navbar className="d-flex align-items-center navbar" expand="lg">
                    <Link to='/' className="ml-sm-5 ml-3 d-flex align-items-center" style={{textDecoration: "none"}} onClick={toggleNav}>
                        <img src={logo} alt="Beach resort" />
                    </Link>
                    <NavbarToggler onClick={toggle} className="mr-sm-5 mr-3 toggler">
                        <FaAlignRight className="nav-icon" />
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar className="text-center mr-lg-5">
                        <Nav className="ml-lg-auto ml-0" id="nav" navbar>
                            <Link to='/' data-aos="fade-left" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                                HOME
                            </Link>
                            <Link to='/rooms' data-aos="fade-left" data-aos-delay="100" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                                ROOMS
                            </Link>
                            <a href='/#services' data-aos="fade-left" data-aos-delay="200" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                                SERVICES
                            </a>
                            <Link to='/contact/#form' data-aos="fade-left" data-aos-delay="400" className="d-flex align-items-center px-3 py-3 py-lg-0 btn-primary mx-auto button mb-lg-0 mb-2" onClick={toggleNav} >
                                CONTACT
                            </Link>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
}
