import React from 'react';
import './Zenga.css';
import Zeng from '../../images/zenga.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';
import {Card, Form, Button} from 'react-bootstrap';

export default function Zenga() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={Zeng} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='zengaHeading position-absolute  d-none d-md-block'> ZEN•GA®</h1>
            </div>

            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-5 my-5">
                ZEN•GA Delivered by Complete Body Movement
                </h1>

                <div className="bodyText mx-5 ">
                <h5 className='my-4 mt-4'>About ZEN•GA®</h5>
                    
                    <p>The Advanced (Level 2) program begins with a review of relevant Essential and Intermediate exercises, then students learn to apply STOTT PILATES biomechanical principles to exercises that require a higher degree of strength, balance and coordination. These courses can be taken immediately after the corresponding Level 1 course or as a series of courses.ZEN•GA is a synergistic blend of mind-body modalities, supported by exercise science and the newest findings in fascial fitness. ZEN represents the search for inner discovery, while YOGA symbolises a pathway to reach it. Together they form ZEN•GA, which is based on Four Mindful Movement Principles: breath, support, yield and flow. When applied together, these principles bring awareness of how the body and mind move in tandem. ZEN•GA focuses on core stability, stamina and resilience while attaining a state of presence. The increase in demand on the neuromuscular system affords the benefits of improved strength, enhanced elasticity and creates a more youthful, resilient and fluid body. Using props and equipment,we stimulate the fascial system and build endurance, strength, mobility and stability while cultivating a greater sense of physical awareness. Upon completion of the Instructor Foundation Course, Mat,participants will be able to teach the ZEN•GA method of exercise. Only upon of their certificate will they be able to identify themselves as a ZEN•GA Qualified Instructor. </p>

                    <h5 className='my-4 mt-4'>ZEN•GA® Courses</h5>

                    <p>ZEN•GA is a teaching modality that consciously connects the body and the mind through innovative programming. This evolved methodology is a syntheses of movement applications that have been used for many years, along with information that is only recently being brought to the forefront. Throughout the work, the power lies not only in the movement itself, but rather on a purposeful intention while we move. Through intention and imagery, ZEN•GA will unleash the body from tension and bring more clarity to the mind. We use various props to support the body and to create a focal point to direct our breath allowing for more fluidity and ease in the physical body.</p>
                    </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5> Foundation Course Objectives </h5>
                    <p>Upon completion of the ZEN•GA Instructor Foundation course, you will receive a Certificate of Completion designating you as a ZEN•GA Instructor. You will have learned everything you need to:</p>
                    <ul>
                        <li>Explain the origins of ZEN•GA and be able to define what it is.</li>
                        <li>Summarise the ZEN•GA principles - Breath, Support, Yield, Flow - and explain how they are incorporated in movement.</li>
                        <li>Teach a ZEN•GA Foundation class to any level participant.</li>
                        <li>Effectively teach ZEN•GA programming to a client at any level</li>
                        <li>Explore foundational movement patterns and the fascial system through movement.</li>
                        <li>Experience programming ideas that bring the principles to application</li>
                        
                    </ul>

                </div>

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5>ZEN•GA® Instructor Foundation Course, Mat - Level 1 </h5>
                    <p>The ZEN•GA Mat Course will help us explore the foundational principles that make up the method and apply them to movement programs designed to help reach the desired goals. This is a seven-hour in-class training (plus one-hour break); and some yoga or other mind-body training is highly recommended.<br/>
                    <span style={{color:'#573661', fontWeight:'bold'}}>CECs:</span> 0.7 STOTT PILATES and other organisations
                    </p>

                    <p><span style={{color:'#573661', fontWeight:'bold'}}>
                    *Students should be aware that the payment is non-refundable unless the course has been cancelled by Complete Body Movement.</span></p>
                
                </div>
                

                <div className="bodyText mx-5 my-4 ">
                <hr/>
                    <h5>Enquire About This Course / Workshop </h5>
                           {/* form section */}
                <div className="col-md-6 mt-3 mx-3">
                    <Card className='shadow mb-5'>
                        <Card.Header className='p-3' style={{backgroundColor:'#c9aac1'}} >
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>Course of Interest: ZEN•GA Delivered by Complete Body Movement </h5>
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
