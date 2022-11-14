import React from 'react';
import './Workshops.css';
import Wkshop from '../../images/workshops.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Card, Form, Button} from 'react-bootstrap';

export default function Workshops() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={Wkshop} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='wkshopHeading position-absolute  d-none d-md-block'> STOTT PILATES® Workshops</h1>
            </div>

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                STOTT PILATES® Workshops
                </h1>
                <div className="bodyText mx-5 ">
                    
                    <p>All Pilates and Fitness Instructors can learn and benefit from Merrithew™programs with no prerquisites required.
                    With over 150 workshops to choose from our introductory and continuing education workshops supplement your current training, and are not limitied to Merrithew Certified Instructors.</p>

                    <p>Workshops are continually updated with the latest information to meet the changing needs of our instructors. They cover everything from the Fundamentals,Sport and Athletic Conditioning To Rehabilitation and Special Populations.</p>

                    <p>No other Fitness educator offers the amount , selection and quality of professional development as Merrithew™.<br/>
                    For full information and application form for all Workshops please email dani@completebodymovement.ie </p>

                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    Please note that attendance to workshops and courses can only be granted once we have received a completed application form and payment a minimum of three days prior to the workshop/course day.
                    <br/>
                    Places limited on all </span></p>

                </div>
                
                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> UPCOMING DATES: </h5>
                    
                    <ul> <span style={{fontWeight:'bold', backgroundColor:'#c9aac1', color:'#573661'}} >SATURDAY 12th NOVEMBER ONLINE:</span>
                        <li>10 AM-12 noon : STOTT PILATES - MATWORK STRENGTH & MOBILITY (2 HR WORKSHOPS - €70.-)*
                        </li>
                        <li>1.15PM -3.15PM: STOTT PILATES- PILATES MATWORK FOR MEN  (2HR WORKSHOP- €70.-)*</li>
                        
                    </ul>

                    <ul> <span style={{fontWeight:'bold', backgroundColor:'#c9aac1', color:'#573661'}} >SUNDAY 13TH NOVEMBER ONLINE:</span>
                        <li>10AM-12 noon: STOTT PILATES- INTERMEDIATE MATWORK: FUNCTIONAL ANATOMY, CUEING & CORRECTING (2HR WORKSHOP-€70.-)*
                        </li>
                        <li>1.15PM-3.15PM: STOTT PILATES- ULTIMATE BODY SCULPTING- FLEX-BAND LEVEL 3 (2HR WORKSHOP €70.-)* </li>
 
                    </ul>

                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    *Single workshops are €70 each, (when paid via bank transfer).Payments via PapPal incur a €7.- additional transaction fee.

                    Places are strictly on a first come, first served basis, once payment and application form has been received. </span></p>
   
                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5 className='my-4'>LOCATION</h5>
                    <p>The Pavillion Pilates Studio, Merrion Road, Dublin 4. (Across Merrion Road from St Vincent's Hospital )</p>
                    <p>FOR DESCRIPTIONS ON THE CONTENTS OF THE WORKSHOPS, PLEASE VISIT :<br/>
                    <a href='https://www.merrithew.com/instructor-training/cont-ed/stott-pilates' target='_blank' noreferral> https://www.merrithew.com/instructor-training/cont-ed/stott-pilates</a> </p>
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>Please Note:</span> CECs can also be gained through any Merrithew™ courses and/or workshops, such as ZEN•GA™, Total Barre™,CORE™Athletic Conditioning and Performance Training™, STOTTPILATES™ Advanced Mat and STOTT PILATES™ Injusries and Special Populations Course. </p>
                
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
                        <td>SATURDAY 12th November 1 workshop €77  	</td>
                        <td><Link to='/Venue' className="linkContact"> The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>77</td>
                        <td><a href="" className="linkContact">Book with Paypal</a></td>
                        </tr>

                        <tr>
                        <td>SUNDAY 13th NOVEMBER 1 workshop €77.			</td>
                        <td><Link to='/Venue' className="linkContact">The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>97</td>
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
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: STOTT PILATES® Workshops </h5>
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
