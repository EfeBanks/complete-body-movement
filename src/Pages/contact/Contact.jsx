import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import venueImg from '../../images/mat1.jpg';
import './Contact.css';
import {ImLocation2} from 'react-icons/im';
import {GrMail} from 'react-icons/gr';
import {BsFillTelephoneFill} from 'react-icons/bs';
import SocialMedia from '../../Components/socialMedia/SocialMedia';
import {Card, Form, Button} from 'react-bootstrap';


export default function Contact() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={venueImg} alt='venueImage' className='aboutImage img-fluid' style={{height: '40vw', width:'100%'}}/>
                <h1 className='headingtop position-absolute  d-none d-md-block'> Contact Us</h1>
            </div>
        </div>
    <div className="row">
        <div className="col-md-9">
        <h1 className="bodyHeading mt-5 mb-4">
        Get in Touch 
        </h1>
        <div>
            <div className="row mt-3">

                {/* form section */}
                <div className="col-md mt-3 mx-3">
                    <Card className='shadow'>
                        <Card.Header className='p-3' style={{backgroundColor:'#c9aac1'}} >
                            <h4 className='openingHours' style={{color:'#57366'}}>Send us a Message </h4>
                        </Card.Header>
            
                        <Card.Body>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="text" placeholder='Enter your Name' required />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="email" placeholder='Enter your Email' required />
                                    {/* <Form.Text className="text-muted">
                                         We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>
                                
                                <Form.Group className='mb-3'>
                                    <Form.Control type="text" placeholder='Enter your Phone Number' required />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Button type='submit' className='submitBtn' style={{backgroundColor:'#c9aac1', color: '#573661'}}> Send message </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
          
                </div>

                {/* contact details section */}
                <div className="col-md">
                    <div className='p-3 mt-3 mb-2 ms-3' >
                        <h4 className='openingHours' style={{color:'#57366'}}>Contact Info </h4>
                    </div>
                    <div className="row">
                        <div className="col-md contactList">
                            <ul><h5 className='openingHours'><ImLocation2/> Address</h5>
                                <li>The Pavilion, Merrion Road,</li>
                                <li>Ballsbridge, Dublin 4.</li>
                            </ul>
                        </div>

                        <div className="col-md contactList">
                            <ul><h5 className='openingHours'><GrMail/> Email</h5>
                                <li>dani@completebodymovement.ie</li>
                                <li>info@completebodymovement.ie</li> 
                            </ul> 
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md contactList">
                            <ul><h5 className='openingHours'><BsFillTelephoneFill/> Call Us</h5>
                                <li>01 5156210 </li>
                                <li>087 9474784</li>
                            </ul>
                        </div>
                        <div className="col-md contactList">
                            <h5 className='openingHours'>
                                <SocialMedia/>
                            </h5>
                        </div>
                    </div>
                </div>
  
            </div>

        </div>
        </div>
        <div className="col-md-3">
            <Sidebar/>
        </div>
    </div>
</div>
  );
}
