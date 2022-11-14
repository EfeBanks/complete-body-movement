import React from 'react';
import './Injury.css';
import Injury from '../../images/injuryandspecial.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import {Card, Form, Button} from 'react-bootstrap';

export default function InjuryAndSpecial() {
  return (
    <div className='container-fluid'>
    <div className="row mt-3">
        <div className="col-12 position-relative">
            <img src={Injury} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
            <h1 className='coursesHeadingInjury position-absolute  d-none d-md-block'> Injury and Special Population Course</h1>
        </div>

        <div className="row">
            <div className="col-md-9">
            <h1 className="bodyHeading mt-5 mb-4">
            STOTT PILATES® Injury and Special Population Course
            </h1>
            <div className="bodyText mx-5 ">
                
                <p>The STOTT PILATES® Injuries & Special Populations course equips the Pilates instructor with the skills required to address a broad range of physical challenges among your clients. Learn to customize workouts to address weaknesses, health conditions, postural problems or injuries (but not to diagnose specific injuries). </p>
            </div>
            
            <div className="bodyText mx-5 my-4 ">
        
                <h5>Specific Course Content </h5>
                <p>Topics covered on this lecture/demonstration course include:</p>
                <ul>
                    <li>Approaches to musculoskeletal rehabilitation PM </li>
                    <li>Anatomy and biomechanics, dysfunctions and pathologies, and exercise modifications in the: lumbo-pelvic, cervical, upper quadrant, shoulder, elbow, wrist, hip, knee, ankle and foot regions </li>
                    <li>Pregnancy, fibromyalgia, osteoporosis, scoliosis, hip/knee replacements, older adults and other special conditions plus workout design </li>
                    <li>Appropriate modification of Matwork, Reformer, Cadillac, Stability Chair™ and Barrel exercises, and brain storming sessions for programming. </li>
    
                
                </ul>
            </div>
            <div className="bodyText mx-5 my-4 ">
            <hr/>
                <h5 className='my-4'>Other Information</h5>
                <ul>
                    <li><span style={{color:'#573661', fontWeight:'bold'}}>ISP Course Prerequisites: </span> Completion of either the Stott Pilates Intensive Mat or Stott Pilates Intensive Reformer course.</li>
                    <li><span style={{color:'#573661', fontWeight:'bold'}}>Course Duration: </span> 24 hours instruction over 4 days</li>
                    <li><span style={{color:'#573661', fontWeight:'bold'}}>ICECs Awarded for Course: </span> 2.4 STOTT PILATES®</li>
                    <li><span style={{color:'#573661', fontWeight:'bold'}}>Exams: </span> Credits are earned by attendance only. No exam applies to this course.</li>
                    <li><span style={{color:'#573661', fontWeight:'bold'}}>Course Fee:  </span> €1095.- (€595.- deposit)* .Course fee includes all course materials!  Please note that payments via Paypal incur an additional €50.- transaction fee.</li>
                    <li><span style={{color:'#573661', fontWeight:'bold'}}>Course Venue: </span> The Pavilion, Merrion Village , Merrion Road Dublin 4</li>
                    <p className='my-4'>This course is suitable for all STOTT PILATES® instructors irrespective of whether they have come from a fitness or therapy background, or have completed their exam, and will greatly benefit pilates instructors who are actively teaching groups and/or individual clients.</p>
    
                
                </ul>
                
            </div>

            <div className="bodyText mx-5 my-4 ">
            <hr/>
        
              <h5>Course Materials </h5>
      
              <ul>
                  <li>Injuries & Special Populations Resource Guide</li>
                  <li>AInjuries & Special Population Support manual</li>
                  <li>Back Care Repertoire DVD </li>
                  <li>Spinal, Pelvic & Scapular Stabilization with Reformer & Vertical Frame DVD </li>

              </ul>

              <p className='my-4'>For more information on this course please e-mail  -   dani@completebodymovement.ie</p>
              <p style={{color:'#573661', fontWeight:'bold'}}>*Students should be aware that the deposit is non-refundable unless the course has been cancelled by Complete Body Movement.</p>
            </div>

            <div className="bodyText mx-5 my-4 ">
            <hr/>
        
              <h5>Next Course: </h5>
              <p>2023: MAY 13/14 & 27/28 (registration will open january 2023. <br/>To register interest in joining, please email us at dani@completebodymovement.ie) </p>
            </div>

            <div className="bodyText mx-5 my-4 ">
            <hr/>
                <h5>Enquire About This Course / Workshop </h5>
                       {/* form section */}
            <div className="col-md-6 mt-3 mx-3">
                <Card className='shadow mb-5'>
                    <Card.Header className='p-3' style={{backgroundColor:'#c9aac1'}} >
                        <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: STOTT PILATES® Injury and Special Population Course </h5>
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
                <br/>Content © Merrithew Corporation, used with permission. 
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
