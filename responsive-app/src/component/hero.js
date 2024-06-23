import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImg from "../assets/heroImg.png";
import SignIn from "./signinform";
import JoinIn from "./joininform";
import './hero.css';

function HeroSection() {
    const [activeComponent, setActiveComponent] = useState("SignIn");

    const renderComponent = () => {
        switch (activeComponent) {
            case "SignIn":
                return <SignIn />;
            case "JoinIn":
                return <JoinIn />;
            default:
                return <SignIn />;
        }
    };

    return (
        <>
            <Container fluid className="main-container">
                <Row className="row-div">
                    <Col className="col-div-1">
                        {/* left part */}
                        <h1><i>Explore your <span style={{ color: "#0096C8" }}>hobby</span> or <span style={{ color: "#8064A2" }}>passion</span></i> </h1>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>
                        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
                        <img src={heroImg} alt="Hero" />
                    </Col>
                    <Col className="col-div-2">
                        {/* right part */}
                        <a className={`link ${activeComponent === "SignIn" ? "active" : ""}`} href="#" onClick={() => setActiveComponent("SignIn")}>Sign In</a>
                        <a className={`link ${activeComponent === "JoinIn" ? "active" : ""}`} href="#" onClick={() => setActiveComponent("JoinIn")}>Join In</a>
                        <hr />
                        {renderComponent()}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HeroSection;
