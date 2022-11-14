import React from 'react';
//import AdvMat from '../../images/advanceMat.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Card, Form, Button} from 'react-bootstrap';

export default function AdvancedReformer() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            {/* <div className="col-12 position-relative">
                <img src={AdvMat} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='coursesHeading position-absolute  d-none d-md-block'> Advanced Mat Plus</h1>
            </div> */}

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                Advanced Reformer
                </h1>
                <div className="bodyText mx-5 ">
                    
                    <p>Learn to use the various Reformer components and accessories to intensify reformer repertoire and provide a stimulating workout for athletes, dancers, and highly conditioned clients. Held over 3 days this 18 hour Advanced course teaches exercises in the repertoire that require greater strength, stability and flexibility.</p>

                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                <h5> Course Content</h5>
                    
                    <ul>
                        <li>Muscular initiation and sequencing of Advanced-level exercises
                        </li>
                        <li>Multiple variations for variety and intensity</li>
                        <li>70 exercises</li>
                    </ul>

                </div>
                
                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> Prerequisites </h5>
                    <p>This course is intended for those who have completed the <b>Intensive Reformer Course</b> with Complete Body Movement or another Stott LTC only. </p>

                    <p>The total cost of the course is <b>€695.</b>- which is paid in total to reserve place and covers tuition, and course materials. Exam fee is not included. Early bird fee if booked and paid before December 31st.2021 is <b>€670.</b>- (payments by PayPal incur and additional €25.- transaction fee to the fee mentioned)</p>
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    *Please note: The exam fee for this course is seperate if you have already sat the Level 1 Ess anf Int Reformer exam. Please see Merrithew Exam FAQ for more details or contact the office at info@completebodymovement.ie </span></p>

                    <p><span style={{fontWeight:'bold', backgroundColor:'#c9aac1', color:'#573661'}} >2022: FEBRUARY 11/12/13  FRIDAY : 12-6.45PM SAT/SUN 10AM-4.45PM </span></p>

                    <p>For more information on this course please <Link to='/Contact'>contact us</Link>.</p>

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
                        <td>2022: February 11/12/13th</td>
                        <td><Link to='/Venue' className="linkContact">The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>695</td>
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
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: 	Advanced Reformer </h5>
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
                    Content © Merrithew Corporation, used with permission. <br/>
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
