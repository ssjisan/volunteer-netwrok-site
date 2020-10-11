import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Logo from '../../logos/logo.png'
import {Link} from 'react-router-dom'
import '../Header/Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Link to="/"><Navbar.Brand><img src={Logo} alt="logo" width="270" height="80" /> </Navbar.Brand></Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/donation">Donation</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link to="/register">  <Button variant="primary" style={{marginRight:15}}>Register</Button> </Link>
                        <Link to="/admin">  <Button variant="dark">Admin</Button>  </Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Header;