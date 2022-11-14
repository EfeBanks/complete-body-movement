import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Sidebar from '../../Components/sidebar/Sidebar'
export default function FAQ() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-5">
                    Frequently Asked Questions
                </h1>
                <Accordion defaultActiveKey={['0']} alwaysOpen flush className='mx-5' >
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header> Who are STOTT PILATES®?</Accordion.Header>
                        <Accordion.Body>
                        STOTT PILATES are a Canadian pilates instructor training organisation who have been running programs for over 20 years and now are present on every continent of the world and over 100 countries
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Who are COMPLETE BODY Movement?</Accordion.Header>
                        <Accordion.Body>
                        COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES in Ireland and have been running courses for 8 years. Since then over hundreds of  pilates instructors have attended the courses and workshops and have successfully reached the high standard demanded by the certification
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" >
                        <Accordion.Header> How do I keep my certification valid?</Accordion.Header>
                        <Accordion.Body>
                        Attendance at six hours of continuing education workshops is require to maintain certification and this begins the calendar year after passing the examination. COMPLETE BODY Movement offer a variety of workshops to allow instructors to fulfil this requirement
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" >
                        <Accordion.Header> What is different about STOTT PILATES compared to other pilates instructor training organisations?</Accordion.Header>
                        <Accordion.Body>
                        STOTT PILATES offer the full list of pilates training courses including Mat, Reformer, Cadillac Chair and Barrel and Injury and Special Populations Courses. This means that you can complete any training which you require as the years pass. STOTT PILATES is a worldwide organisation with its headquarters in Toronto where a dedicated team of pilates professionals are continuously tweaking and updating the training courses thus ensuring that all training courses are up to date, relevant and exciting. To become an Instructor Trainer on any STOTT PILATES Course the full list of courses must be completed followed by a specific Instructor Training Course. To become an Instructor Trainer demands years of dedication and hard work as well as the interpersonal skills required to effectively teach students on courses. 
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" >
                        <Accordion.Header> Why Should I choose STOTT PILATES?</Accordion.Header>
                        <Accordion.Body>
                        If you are planning to become a professional pilates instructor then being part of the STOTT PILATES worldwide Instructor network will demonstrate the level of your knowledge and experience meaning that you will be a highly respected pilates professional.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" >
                        <Accordion.Header> Do you need to be a health or fitness professional to become a STOTT PILATES Instructor?</Accordion.Header>
                        <Accordion.Body>
                        No. There are programs available for students with previous qualifications or without any qualification. The Extended program includes extra hours for anatomy training which allows students without prior training to get up to the standard required in this area.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" >
                        <Accordion.Header> Can I get insurance if I am STOTT PILATES qualified?</Accordion.Header>
                        <Accordion.Body>
                        Yes. You will find it easy to buy insurance if you are STOTT PILATES qualified as it is seen by many as the gold standard in pilates instructor training
                        </Accordion.Body>
                    </Accordion.Item>  
                </Accordion>
                <p className="bodyTextSpecial mx-5 mt-4 p-3">
                    <hr/>
                    ®/™Trademark or Registered Trademark of Merrithew Corporation, used under license. 
                    <br/>Photography © Merrithew Corporation, used with permission.
                </p>


            </div>

            <div className="col-md-3 mt-3">
                <Sidebar />
            </div>
        </div>
      
    </div>
  );
}


