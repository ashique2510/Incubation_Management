import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./landingPage.css";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router";

function LandingPage() {
const navigate = useNavigate()

const storageExist = JSON.parse(localStorage.getItem("userInfo"));


function handleLogin(){
  navigate('/login')
}

function handleRegister(){
  navigate('/register')
}

if(!storageExist){
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro">
            <div>
              <h1 className="title">Start Your Business</h1>
              <p className="subtitle">Please Login to Continue.. </p>
            </div>
            <div className="buttonContainer">
                <Button onClick={()=>{handleLogin()}} size="lg" variant="light" className="landingbutton">
                  Login
                </Button>
            
                <Button onClick={()=>{handleRegister()}} size="lg" variant="light" className="landingbutton">
                  SignUp
                </Button>  
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );

}else{

  return (
    <div className="main">
       <Container>
        <Row>
          <div className="intro">
            <div>
              <h1 className="title">Submit Your Application </h1>
              <p className="subtitle">  Start your business ... </p>
            </div>
           
          </div>
        </Row>
      </Container>
    
    </div>
  );

}
  
}

export default LandingPage;
