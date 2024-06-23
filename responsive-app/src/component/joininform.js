import React from 'react';
import Form from 'react-bootstrap/Form';
import FacebookImg from '../assets/facebook-img.PNG';
import GoogleImg from '../assets/google-img.PNG';
function JoinIn(){
    return (
        <>
            <button className="hero-btn"><img style={{height: "10%", width:"10%", marginRight:"20%"}} src={GoogleImg}/>Continue with Google</button>
            <button className="hero-btn"><img style={{height: "10%", width:"10%", marginRight:"18%"}} src={FacebookImg}/>Continue with Facebook</button>
            <div className="or-connect-container">
                <hr />
                <span style={{fontWeight:"700"}}>Or connect with</span>
                <hr />
            </div>
            
            <Form.Control style={{fontSize: "16px", paddingLeft: "5%", borderColor: "#EBEDF0", marginBottom: "0px", height: "50px"}} type="text" placeholder="Email" />
            <br />
            
            <Form.Control style={{fontSize: "16px", paddingLeft: "5%", borderColor: "#EBEDF0", marginBottom: "0px", height: "50px"}} type="password" placeholder="Set Password" />
            <br />
            <p style={{marginTop: "-15px", marginLeft: "70%", fontSize: "12px"}}>Password Strength</p>
            <p style={{fontSize: "12px",fontWeight: "400"}}>By Continuing, you agree to our <i style={{fontWeight: "500"}}>Terms of Service</i> and <i style={{fontWeight: "500"}}>Privacy Policy</i></p>
            <button style={{backgroundColor: "#8064A2", color: "white"}} className="continueBtn">Agree and Continue</button>
        </>
    )
}
export default JoinIn;