import React from 'react';
import AdvMat from '../../images/intensiveReformer.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Card, Form, Button} from 'react-bootstrap';

export default function IntensiveReformer() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={AdvMat} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='coursesHeading position-absolute  d-none d-md-block'> Intensive Reformer Course</h1>
            </div>

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                STOTT PILATES® Intensive Reformer Course
                </h1>
                <div className="bodyText mx-5 ">
                    
                    <p>This course teaches you how to design and instruct Level 1 (essential and intermediate) reformer workouts in personal or group training settings for a range of clients. While the Intensive Reformer Course can be taken prior to the Intensive Mat Course it is recommended that the Intensive Mat Course should be completed first in order to become familiar with the basic techniques and principles on the mat in advance of using the reformer. </p>

                    <h5> Course Content </h5>
                    <ul> 
                        <li>Effective use of the reformer to enhance torso stability and strength, peripheral extremity conditioning, joint stability, flexibility, balance and co-ordination</li>
                        <li>How to develop programs for personal and group classes</li>
                        <li>Essential, intermediate and power workouts</li>
                        <li>Effective communication and observation skills, verbal cueing and imagery for performance enhancement and client motivation</li>
                        <li>Modifications for specific body types, postural issues and conditions</li>
                        <li>Theory and practice of postural analysis</li>
                        <li>Exercise layering related to effective program design</li>
                        <li>122 exercises plus multiple modifications</li>
                    </ul>
                </div>
                
                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> Prerequisites </h5>
                    <ul>
                        <li>Working knowledge of functional anatomy</li>
                        <li>30 hours pilates classes</li>
                        <li>Experience of teaching movement or fitness</li>
                        
                    
                    </ul>
                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> Duration </h5>
                    <ul>
                        <li>50 hours instruction and supervised teaching (HELD OVER 3 WEEKENDS)</li>
                        <li>Minimum 10 hours observation of class teaching</li>
                        <li>Minimum 40 hours physical review or personal practice of exercises</li>
                        <li>Minimum 25 hours of practice teaching</li>
                        <li>Total 125 hours</li> 
                    
                    </ul>
                    <p>The total cost of the course is €1395.- which is paid by a deposit of a non refundable deposit of €700.-, and a final payment of €695.- , three weeks prior to the course starting. Please note : an additional exam fee of €300.- is to be paid at the time of booking of an exam date within 6 months of completion of the course.( A student will not be a Certifed Stott Pilates Reformer Instructor till succesfully completing the required exam). Payments made via PayPal will incur an additional €25.- transaction fee.</p>

                    <ul> <span style={{fontWeight:'bold'}}>This total fee covers:</span>
                        <li>Tuition: €1100</li>
                        <li>Course Materials: €295</li>
                        <li>( Additional: Exam Fee €300.- to be paid at time of booking an exam date within 6 months of completion of the course)</li>
                    </ul>
                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> UPCOMING DATES: </h5>
                    <ul>
                        <li>2022: SEPTEMBER 23/24/25 & OCTOBER 7/8/9 & 21/22/23</li>
                        <li>2023: MARCH/APRIL 2023. EXACT DATES TBA EARLY JANUARY</li>
                        
                    
                    </ul>
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
                        <td>2022:sept 23/24/25 & oct 7/8/9 & oct 21/22/23</td>
                        <td><Link to='/Venue' className="linkContact" >The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>725</td>
                        <td><a href=""  rel="noreferrer" className="linkContact">Book with Paypal</a></td>
                        </tr>

                    </tbody>
                    </Table>
                    </div>

                    <p>For more information on this course please contact us, at : info@completebodymovement.ie</p>
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                   *Students should be aware that the deposit is strictly non-refundable unless the course has been cancelled by Complete Body Movement. </span></p>

                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5>Enquire About This Course / Workshop </h5>
                           {/* form section */}
                <div className="col-md-6 mt-3 mx-3">
                    <Card className='shadow mb-5'>
                        <Card.Header className='p-3' style={{backgroundColor:'#c9aac1'}} >
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest:	 STOTT PILATES® Intensive Reformer Course </h5>
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
