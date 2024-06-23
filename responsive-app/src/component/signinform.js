import React from 'react';
import Form from 'react-bootstrap/Form';
import FacebookImg from '../assets/facebook-img.PNG';
import GoogleImg from '../assets/google-img.PNG';
import './signin.css'; // Import the CSS file specific to SignIn component

function SignIn() {
    return (
        <>
            <button className="hero-btn"><img style={{height: "10%", width:"10%", marginRight:"20%"}} src={GoogleImg}/>Continue with Google</button>
            <button className="hero-btn"><img style={{height: "10%", width:"10%", marginRight:"18%"}} src={FacebookImg}/>Continue with Facebook</button>
            <div className="or-connect-container">
                <hr />
                <span style={{fontWeight:"700"}}>Or connect with</span>
                <hr />
            </div>
            
            <Form.Control style={{fontSize: "16px", paddingLeft: "5%", borderColor: "#EBEDF0", marginBottom: "0px", height: "50px"}}  type="text" placeholder="Email" />
            <br />
            
            <Form.Control style={{fontSize: "16px", paddingLeft: "5%", borderColor: "#EBEDF0", marginBottom: "0px", height: "50px"}}  type="password" placeholder="Password" />
            <br />
            <div>
                <input type="checkbox" className="rememberCkb" />Remember me
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill lock-icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5" />
                </svg>
                forgot Password?
            </div>
            <button style={{backgroundColor: "#8064A2", color: "white"}} className="continueBtn">Continue</button>
        </>
    );
}

export default SignIn;
