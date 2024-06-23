import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './addYour.css';

function AddYourWork(){
    return(
        <>
            <Container fluid className="md add-container" >
                <Row>
                    <Col className="column"> 
                        <Card className="cont-card">
                            <Card.Body className="cont-cardBody">
                                <Card.Title style={{fontWeight: 700}}>
                                <button style={{borderRadius: "50%", backgroundColor: "#0096C8", border: "none", padding: "0px", height: "40px", width:"5%", marginRight: "3%"}} className="iconBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{height: "100%", width: "100%"}}>
                                        <path style={{color: "white"}} d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                </button>
                                    Add your own</Card.Title>
                                <Card.Text style={{fontWeight: 400}}>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</Card.Text>
                                <button className="cont-cardbtn">Add New</button>
                            </Card.Body>
                        </Card>
                    </Col>                
                </Row>
            </Container>
        </>
    )
}
export default AddYourWork;