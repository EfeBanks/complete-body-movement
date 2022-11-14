import React from 'react';
import './TotalBarre.css';
import TotalB from '../../images/cbmPix2.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Card, Form, Button} from 'react-bootstrap';

export default function TotalBarre() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={TotalB} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='totalHeading position-absolute  d-none d-md-block'> Total Barre™ </h1>

            </div>

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                Total Barre™ Delivered by Complete Body Movement
                </h1>
                <div className="bodyText mx-5 my-5">
                <h5>About Total Barre® </h5>
                    
                    <p>After rigorous and in-depth development, Merrithew™ are excited to offer you their Total Barre program! High-energy and dynamic, Total Barre integrates elements of Pilates, dance, cardio and strength training, and is fully expandable to any clients base. The possibilities are endless! </p>

                    <p>From their 25 years of developing safe and responsible exercise, they designed Total Barre® to emphasise the correct bio-mechanics of movement combined with the power of music to increase strength, flexibility, stamina and dynamic stability. It is a program geared for everyone - no dance experience or tutus are required! Your clients will be getting not only the safest and most impactual barre program available - they will have fun doing it!</p>

                </div>
                
                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> Why Train in Total Barre®? </h5>
                    <ul>
                        <li>Template-based segments allow you to modify and choreograph future workouts to any music or theme you design.</li>
                        <li>Online learning tools provided</li>
                        <li>Enhance revenue flow at your facility</li>
                        <li>Earn STOTT PILATES® accredited CECs</li>
                        <li>Come out of training confident and able to begin teaching classes right away with all the tools you need.</li>
                        <li>Incorporating the Total Barre® Foundational Principles, this program teaches choreography, exercise essence and correct biomechanics of movement, as well as how to effectively utilize music to create safe and fun classes. Following a progressive template, suggested beats per minute are provided and close attention is paid to the importance of selecting and modifying exercises for specific clientele.</li>
                        <li>Like all Merrithew™ brands, when developing Total Barre their emphasis was on creating the safest, most responsible barre program in the industry. The result of this work is that your client will get better results and fewer injures.</li>
                        
                    </ul>

                    {/* <p>For more information on this course please contact us, at : info@completebodymovement.ie</p>
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    In order to start the Advanced, Level 2 courses students must have completed the Essential and Intermediate repertoire taught in the Level 1 courses.</span></p> */}

                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> Total Barre® Foundation Course, L1</h5>

                    <ul className='my-4'><span style={{color:'#573661', fontWeight:'bold'}}>Objectives:</span>

                        <li>Learn creative choreography of a well-balanced Barre workout</li>
                        <li>Learn to modify and choreograph future workouts with the Course Template</li>
                        <li>Understand how to break down various movements and explore the stabilization and mobilization required to achieve them.</li>
                        <li>Learn how to cue, correct and modify effectively for all populations.</li>
                        <li>Apply the six Total Barre® Foundational Principles</li>
                        <li>Utilise the suggested beats per minute for each segment of the workout with optional music playlist</li>
                        
                    </ul>

                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Methodology  </ul>
                    <li style={{listStyle:'none'}}>The Total Barre® Foundation Course provides the groundwork for instructors, enabling them to produce safe, effective and varied programs that address the needs and goals of every client. Drawing from the diverse backgrounds of their instructor-base, the Merrithew™ team have created this program which will equip instructors with the knowledge and confidence to design and teach highly evolved standing fitness classes in any setting.</li>
                   
                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Format - 11 Segments  </ul>
                    <li style={{listStyle:'none'}}>The Level 1 Foundation Course presents 11 specially arranged and selected segments to serve as the template for each session or class. Each Total Barre® class follows this template; however, the specific programming and exercises are determined by the instructor to address class requirements and objectives. Segments are accompanied by timed selections of music, each at a designated pace. The 11 segments focus on individual areas of the body or movement types and when combined, produce a balanced and complete workout.</li>

                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Online Resource  </ul>
                    <li style={{listStyle:'none'}}>Each of the segments from the Foundation Course have been filmed and are posted online in a secure area of Merrithew.com. All course participants will be given access to these great visual resources as Moira Merrithew walks you through the choreography with and without music.</li>

                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Template Benefits  </ul>
                    <li style={{listStyle:'none'}}>This simple template is instrumental in assisting instructors to teach well structured, systematised Barre classes. Once the basic format is presented, instructors are taught strategies allowing them to progress clients by modifying the primary exercises, creating new variations of those exercises or altering the pace through the accompanying music. Instructors develop awareness to closely monitor the performance of their clients through the understanding of how to modify or vary the exercises when necessary by adding props to the movements or altering the rhythm, of the music used.</li>

                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Six Principles  </ul>
                    <li style={{listStyle:'none'}}>Participants are also introduced to the Total Barre Principles - six movement awareness fundamentals that provide the structure and bio-mechanical basis for each exercise. During the course, participants have the opportunity to experience the movements before examining the application of the principles and learn the essence of each exercise along with the theories of dynamic stability, optimal mobility and movement efficiency.</li>
                    
                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Additional Concepts  </ul>
                    <li style={{listStyle:'none'}}>Programming and exercise choice for each Total Barre class focuses on exercise progressions, movement form and efficiency, and the importance of cueing with music for movement quality. Additional concepts are explored - including the value of cardio-based intervals within a program, suggestions on themes of workouts or programs geared toward specific fitness goals - to add variety and meet the needs of a wide range of clientele. Expertly crafted Total Barre will leave clients feeling energised, invigorated and delighted, improving fitness and quality of life, while helping them avoid injury.</li>

                    <ul className='my-2' style={{color:'#573661', fontWeight:'bold'}}> Prerequisites  </ul>
                    <li style={{listStyle:'none'}}>This course is intended for those already working in the fields of fitness or movement who hold a related certification and/or degree. Individuals who do not possess this background may still participate in the course and will be issued a letter of completion, but will not be granted an instructor qualification. A history of participants in fitness or movement is highly recommended for anyone wishing to take this course.</li>
                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> CECS: 0.7 STOTT PILATES CECs <br/>

                    COURSE DATE : </h5>
                    <p>2022: SUMMER 2022 DATES TBA</p>
                    
                    <span style={{fontWeight:'bold', backgroundColor:'#c9aac1', color:'#573661'}} >FULL COURSE FEE €395,-  (€420.- IF PAID USING PAYPAL).</span> <br/> <br/>
                        
                    
                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    *Students should be aware that the payment is non-refundable unless the course has been cancelled by Complete Body Movement.  </span></p>
   
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
                        <td>2021: SUNDAY NOVEMBER 21 10.30AM-6.15PM	</td>
                        <td><Link to='/Venue' className="linkContact">The Pavilion Pilates Studio, Dublin 4</Link></td>
                        <td>425</td>
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
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: Total Barre™ Delivered by Complete Body Movement </h5>
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
