import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import profileTest from '../assets/profile-test.png';
import testImg from '../assets/test-img.PNG'
import './testimonials.css';

function Testimonials(){
    return(
        <>
            <Container fluid className="md test-container" >
                <Row>
                    <Col className="test-column"> 
                        <Card className="test-card" style={{background: "#F7F5F9"}}>
                            <Card.Body className="test-cardBody">
                            {/* Title */}
                            <Card.Title><img className='test-img' src={testImg} width='5%' height='50px' style={{marginRight: "10px"}}/>Testimonials</Card.Title>
                            {/* Content */}
                            <Card.Text className="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</Card.Text>
                            
                            {/* audio player */}
                            <div className="bottom-content">
                                <div className="custom-audio-player">
                                    <button className="play-pause-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                    </button>
                                    <div className="progress-bar">
                                        <div className="progress">
                                        <div className="progress-fill"></div>
                                        </div>
                                    </div>
                                    <div className="progress-time" id="progress-time">0:00</div>
                                    <div className="cover-image">
                                        <img src={profileTest} alt="Cover"/>
                                    </div>
                                    <audio id="audio" src="#"></audio>
                                </div>

                                {/* image and name of testimonial */}
                                <div className="profile-card">
                                    <img src={profileTest} alt="Profile Image"/>
                                    <div className="profile-info">
                                        <h2>Shubha Nagarajan</h2>
                                        <p>Classical Dancer</p>
                                    </div>
                                </div>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>                
                </Row>
            </Container>
        </>
    )
}
export default Testimonials;