import React, {useState}from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import './fg.css'
import {Form,Stack,Row,Container,Card,Spinner,Button} from 'react-bootstrap'
import axios from 'axios';




const schema = yup.object().shape({
  fullName: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("Your Full Name is a required field"),
  phoneNumber: yup.number().min(10, 'must be at least 10 numbers').required("Your Phone number is a required field"),
  email: yup.string().required("Your Email is a required field"),
  jobTitle: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("Your Job Title is a required field"),
  city: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("Your City is a required field"),

});

function FormPage (){
  const [loading, setLoading] = useState(false);


  return (

    <Formik
      validationSchema={schema}
      initialValues={{
        fullName: '',
        phoneNumber: '',
        email: '',
        jobTitle: '',
        city: '',
        
       
      }} 
      onSubmit={(values, actions) => {
        axios.post("https://sheet.best/api/sheets/3293ba91-a061-4398-8a74-30812cc0ae15",values)
        .then(response => {
            setLoading(true);
            actions.resetForm()
            setLoading(false);
            
          }).catch(error => {
            console.log("Error: ", error)
          })
      
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        
      }) => (
          <Stack>
        <br/>
        <br/>
       
        <Card  style={{  backgroundColor:" #ffffff10",
            backdropFilter: "blur(12px)",
            webkitBackDropFilter: "blur(12px)",
            width:"50%" , height:"auto", padding:"30px 30px", marginLeft:'25%'}}>
                 <br/>
        
        
               
            <Form noValidate onSubmit={handleSubmit} >
            <Row className="mb-3">
                <Form.Group  md="4" controlId="validationFormik01">
                <Form.Label className="Label">Name</Form.Label>
               
                <Form.Control
                    type="text"
                    placeholder="Your Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                   
                />
                <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                
                </Form.Group>
                </Row>
                
                <Row className="mb-3">
                <Form.Group  md="4" controlId="validationFormik02">
                <Form.Label className="Label" id="Label">Phone Number</Form.Label>
                
                <Form.Control
                    type="tel"
                    placeholder="051234567"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                  
                />

                <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group md="4" controlId="validationFormikUsername">
                <Form.Label className="Label">Email</Form.Label>
              
                   
                    <Form.Control
                    type="email"
                    placeholder="example@email.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.email}
                    </Form.Control.Feedback>
                
                </Form.Group>
            </Row>
           
            <Row className="mb-3">
                <Form.Group  md="6" controlId="validationFormik03">
                <Form.Label className="Label">Job Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your Job Title"
                    name="jobTitle"
                    value={values.jobTitle}
                    onChange={handleChange}
                    isInvalid={!!errors.jobTitle}
                />

                <Form.Control.Feedback type="invalid">
                    {errors.jobTitle}
                </Form.Control.Feedback>
                </Form.Group>
                </Row>
                
                <Row className="mb-3">
                <Form.Group  md="3" controlId="validationFormik04">
                <Form.Label className="Label">City</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.city}
                </Form.Control.Feedback>
                </Form.Group>
               
                </Row>
                <br/>
                
                <Container>
                <div style={{paddingLeft:"43%"}}>
                    
              
             
                <Button type="submit" className="Button"> Submit</Button>
                {loading &&<Spinner animation="border" role="status"/>}

                </div>
                </Container>
            </Form>
        </Card>  
        <Container className="Footer">
          <Row>
             <h3 style={{fontSize:"20px"}}>Developed By Alaa Alhazmi</h3> 
          </Row>
        </Container>
       
        </Stack> 
      )}
    </Formik>
  );
}
export default FormPage;
