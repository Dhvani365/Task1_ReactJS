import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import Image from 'react-bootstrap/Image';
import searchIcon from '../assets/search-icon.png';
import "@fontsource/poppins";
import './navbar.css'

function NavBar(){
    return(
        <>
        <Navbar expand="lg" className="navbar">
            <Container fluid>

                {/* Logo */}
                <Navbar.Brand href="#">
                    <Image className="logo" src={logo} rounded />
                </Navbar.Brand>

                {/* Search Bar */}
                <Form className="d-flex searchbar">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="search-textbox"
                    />
                    <Button className="search-button" style={{backgroundColor: "#8064A2", width: "20%"}}><img className="search-btn-img" src={searchIcon} height="80%" width="80%"/></Button>
                </Form>

                {/* making responsive */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* dropdowns */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-compass-fill" viewBox="0 0 16 16"
                            style={{width: "22px", height: "22px", marginTop: "22px", marginLeft: "50px", color: "#8064A2"}}
                        >
                            <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
                        </svg>
                        <NavDropdown title="Explore" id="navbarScrollingDropdown" className="exploreDD">
                            <NavDropdown.Item href="#" style={{color: "#6D747A", fontSize: "14px"}}>People - Community</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" style={{color: "#6D747A", fontSize: "14px"}}>Places - Venue</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" style={{color: "#6D747A", fontSize: "14px"}}>Progress - Events</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" style={{color: "#6D747A", fontSize: "14px"}}>Products - Store</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" style={{color: "#6D747A", fontFamily: "Poppins", fontSize: "16px", fontWeight: "1000", lineHeight: "18px", letterSpacing: "0.005em", textAlign: "left"}}>Blogs</NavDropdown.Item>
                        </NavDropdown>
                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-nut-fill" viewBox="0 0 16 16"
                            style={{width: "22px", height: "22px", marginTop: "22px", marginLeft: "20px", color: "#8064A2"}}
                        >
                            <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196"/>
                        </svg>
                        <NavDropdown title="Hobbies" id="navbarScrollingDropdown" className="hobbiesDD">
                            <NavDropdown.Item href="#">Dancing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Programming</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Singing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Travelling</NavDropdown.Item>
                        </NavDropdown>

                        {/* icons */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16"
                            style={{width: "20px", height: "20px", marginTop: "24px", marginLeft: "20px", color: "#8064A2"}}
                        >
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16"
                            style={{width: "20px", height: "20px", marginTop: "24px", marginLeft: "20px", color: "#8064A2"}}
                        >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16"
                            style={{width: "20px", height: "20px", marginTop: "24px", marginLeft: "20px", color: "#8064A2"}}
                        >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>

                        {/* Sign in Button */}
                        <button className="signinbtn">Sign In</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar;