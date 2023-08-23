import React from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import SIgn_img from "./SIgn_img";


const Home = () => {
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="Date" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" className="col-lg-6">
        Submit
      </Button>
            </Form>
            <p className="p-3">Already Have an Account Sign In</p>
          </div>
           
          <SIgn_img/>
         
        </section>
       
      </div>
    </>
  );
};

export default Home;
