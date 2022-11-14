import React from 'react';
import AdvMat from '../../images/advanceMat.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Card, Form, Button} from 'react-bootstrap';

export default function advanceMat() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={AdvMat} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='coursesHeading position-absolute  d-none d-md-block'> Advanced Mat Plus</h1>
            </div>

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                Advanced Mat Course
                </h1>
                <div className="bodyText mx-5 ">
                    
                    <p>The Advanced (Level 2) program begins with a review of relevant Essential and Intermediate exercises, then students learn to apply STOTT PILATES biomechanical principles to exercises that require a higher degree of strength, balance and coordination. These courses can be taken immediately after the corresponding Level 1 course or as a series of courses. </p>

                    <p>This 6 hour course held over one-day, progresses to Matwork to more advanced material, providing further options and challenges on the mat for highly conditioned clients. Exercises require a high degree of strength, balance and coordination.</p>
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    In order to start the Advanced, Level 2 courses students must have completed the Essential and Intermediate repertoire taught in the Level 1 courses.</span></p>

                    <ul> <span style={{fontWeight:'bold'}} >What you will learn:</span>
                        <li>Muscular initiation and sequencing of Advanced-level exercises</li>
                        <li>Multiple variations for variety and intensity</li>
                        <li>13 exercises</li>
                    </ul>
                </div>
                
                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> UPCOMING DATES: </h5>
                    <ul>
                        <li>2022: FRIDAY 4th of FEBRUARY 1.15PM- 7.45PM</li>
                        <li>COST: €225.- early bird before 31st. December 2021 (€245.- IF USING PAYPAL)</li>
                        
                    </ul>

                    <p>For more information on this course please contact us, at : info@completebodymovement.ie</p>
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    In order to start the Advanced, Level 2 courses students must have completed the Essential and Intermediate repertoire taught in the Level 1 courses.</span></p>

                </div>
                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5 className='my-4'>Book This Course Online</h5>
                    <div>
                    <Table striped bordered hover responsive >
                    <thead>
                        <tr>
                       
                        <th>Course Date</th>
                        <th>Location</th>
                        <th>Deposit</th>
                        <th>Book now</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td>2021: MAY 28th 9.30am-3.30pm</td>
                        <td><Link to='/Venue' className="linkContact" >The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>240</td>
                        <td><a href="" className="linkContact">Book with Paypal</a></td>
                        </tr>

                        <tr>
                        <td>2022: FEBRUARY 4TH 1.15-7.45PM</td>
                        <td><Link to='/Venue' className="linkContact">The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>245</td>
                        <td><a href="" className="linkContact">Book with Paypal</a></td>
                        </tr>

                    </tbody>
                    </Table>
                    </div>
                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5>Enquire About This Course / Workshop </h5>
                           {/* form section */}
                <div className="col-md-6 mt-3 mx-3">
                    <Card className='shadow mb-5'>
                        <Card.Header className='p-3' style={{backgroundColor:'#c9aac1'}} >
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: Advanced Mat Course </h5>
                        </Card.Header>
            
                        <Card.Body>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="text" placeholder='Enter your Name*' required />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="email" placeholder='Enter your Email*' required />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="text" placeholder='Enter your Phone Number*' required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Button type='submit' className='submitBtn' style={{backgroundColor:'#c9aac1', color: '#573661'}}> Send Request </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
          
                </div>
                </div>
                

                <p className="bodyTextSpecial mx-5 p-3">
                    <hr/>
                    ®/™Trademark or Registered Trademark of Merrithew Corporation, used under license. 
                    <br/>Photography © Merrithew Corporation, used with permission.
                </p>

                </div>
                <div className="col-md-3">
                    <Sidebar/>
                </div>

            </div>
        </div>
      
    </div>
  );
}
