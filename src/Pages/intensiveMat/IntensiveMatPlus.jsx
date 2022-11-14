import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import IntMat from '../../images/mat1.jpg';
import './IntensiveMat.css';
//import vid1 from '../../videos/v1.mp4';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Card, Form, Button} from 'react-bootstrap';



export default function IntensiveMatPlus() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={IntMat} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='coursesHeading position-absolute  d-none d-md-block'> Intensive Mat Plus</h1>
            </div>
            {/* <div className="col-12 position-relative">
                <video src={vid1} controls="controls" autoPlay="true" loop="true"/>
                
            </div> */}

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                STOTT PILATES® Intensive Mat Plus
                </h1>
                <div className="bodyText mx-5 ">
                    <h5>Summary of Course Content </h5>
                    <p>The STOTT PILATES® Intensive Mat-Plus™ (IMP) provides you with the solid foundation and skills you need to develop effective and motivating group and individual training programs. This course teaches you to design and teach the Level 1 (essential and intermediate) Matwork repertoire, integrating small equipment to add variety and meet the specific needs of your clients. </p>
                    <ul>
                        <li>How to apply STOTT PILATES® biomechanical principles of core stability, breathing and alignment to all exercises.</li>
                        <li>A complete breakdown of each exercise.</li>
                        <li>Exercise goals, muscular initiation and movement sequencing.</li>
                        <li>Modifications to increase or decrease exercise intensity.</li>
                        <li>Modifications for specific body types and postural issues. </li>
                        <li>How to recognise optimal and less than optimal movement patterns</li>
                        <li>A variety of programming options to keep clients motivated.</li>
                        <li>Effective communication, verbal cues and imagery for performance enhancement and client motivation.</li>
                        <li>Workout composition for personal and group training.</li>
                        <li>Flex-band®, Fitness Circle® and Arc Barrel™ workouts</li>
                        <li>63 exercises plus multiple modifications</li>
                    </ul>
                </div>
                
                <div className="bodyText mx-5 ">
                <hr/>
                    <h5>Allocation of Hours </h5>
                    <ul>
                        <li>40 hours instruction and supervised teaching (supervised course hours)</li>
                        <li>10 hours observation of other instructors (observations outside class time)</li>
                        <li>30 hours physical review (performing the exercises outside class time)</li>
                        <li>15 hours practice teaching (outside class time)</li>
                        <li>Total – 95 hours </li>
                    
                    </ul>
                </div>
                <div className="bodyText mx-5 ">
                <hr/>
                    <h5>Examinations </h5>
                    <p>Multiple choice written exam <br/>
                        Practical assessment consisting of teaching a full workout for approximately 60 minutes to one individual
                        80% to obtain a pass grade in both written and practical exam.
                        <br/><br/>
                        <span style={{color:'#573661', fontWeight:'bold'}} >
                        For up to date information please read the exam FAQ : https://merrithew.com/instructor-training/exams-faq.</span></p>
                    
                </div>

                <div className="bodyText mx-5 ">
                <hr/>
                    <h5>Admission Requirements </h5>
                    <ul>
                        <li>Working knowledge of functional anatomy , and prior participation in an anatomy course that covers in detail the human musculoskeletal system, and includes muscle attachments, actions and basic biomechanics. Acceptable courses include the STOTT PILATES® Functional Anatomy course or a university or college level anatomy or physiology course.(minimum 20-25 hours of in-class instruction). Online courses may be accepted provided that they amount to a minimum 20-25 hours of learning and include homework assignments, tests and/or a final examination.</li>
                        <li>Minimum 30 hours participation in Pilates classes/workouts. (working out to the Essential STOTT PILATES Matwork DVD can contribute to some of these hours)</li>
                        <li><b>Recommended:</b> Three years teaching movement or fitness ,or more. Applicants with a strong history of Pilates participation and/or experience instructing students/clients in another filed may also be considered. <a href="https://merrithew.com/stott-pilates/instructor-training/courses/internsive-program" target="_blank" rel="noreferrer"> https://merrithew.com/stott-pilates/instructor-training/courses/internsive-program </a> </li>
                    </ul>
                    <p>NB - Students must attend all of the course tuition time. If a student due to unforeseen circumstances is forced to miss course tuition time then approximately half of the missed tuition time must be made up with the Instructor Trainer outside normal course hours. This extra tuition will be at the expense of the student involved. Under no circumstances is it possible to transfer a booked place from one course to a subsequent course.</p>

                    <p>Students are expected to complete six hours of continuing education when qualified and these workshops are provided in a variety of aspects such as pre and post natal, back care and small equipment specialisation etc.</p>

                    <p>The total cost of the course is €1200,- ( an additional exam fee of €300,- to be paid at a later stage when booking the exam date) If you wish to book a place on this course, please complete the application form and return with a deposit of €600.-*(payments made via PayPal require a €650.- deposit). </p>

                    <p>Application forms can be requested by e-mailing info@completebodymovement.ie</p>

                    <ul><span style={{fontWeight:'bold'}}>The fee covers the following:</span>
                    <li>Tuition: € 975.-.</li>
                    <li>Course materials: €225.-</li>
                    <li>Exam fee : €300.- , to be paid at time of booking of the examdate, within 6 months of completing the course </li>
                    <br/>
                    <span style={{fontWeight:'bold'}}>*Students should be aware that the deposit is strictly non-refundable unless the course has been cancelled by Complete Body Movement. </span>
                    </ul>
                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> UPCOMING DATES: </h5>
                    <ul>
                        <li> 2022: SEPTEMBER 14/15-21/22-28/29 & OCTOBER 5/6 - <span style={{color:'red'}}>FULL !!</span> </li>
                        <li> 2023: JANUARY 13/14/15- 21/22 & FEBRUARY 10/11/12</li>
                        <li>2023: MAY- DATES TBA EARLY 2023</li>
                        <br/>
                          
                    </ul>
                    <span>PLEASE EMAIL US AT FOR INFORMATION ON OUR COURSES AT :info@completebodymovement.ie)</span>

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
                        <td>2023: JAN 13/14/15-21/22 & FEB 10/11/12	</td>
                        <td><Link to='/Venue' className="linkContact">The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>650</td>
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
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: 	STOTT PILATES® Intensive Mat Plus </h5>
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
