import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Login.css';
import {Card, Form, Button} from 'react-bootstrap';

export default function Login() {
  return (
    <div className='container-fluid'>
       <div className="row mt-3">
        <div className="col-md-9">
          <h1 className="bodyHeading mt-5 mb-4">
                Students Area
          </h1>

          <div className='loginText'>
          <p className='text-align-center'>Please login below to access our students dedicated area.
            If you do not have a password please &nbsp;
          <Link to='/Contact' className='linkContact'>contact us</Link></p>
          </div>

          <div className="loginForm mx-5 my-4 " style={{textAlign: 'center'}}>
                           {/* form section */}
                <div className="col-md-6 mt-3 mx-3">
                    <Card className='shadow mb-5'>
                        <Card.Header className='p-3' style={{backgroundColor:'#c9aac1'}} >
                            <h5 className='openingHours' style={{color:'#57366', fontWeight: 500}}>
                                Login Form 
                            </h5>
                        </Card.Header>
            
                        <Card.Body>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="text" placeholder='Enter your Username' required />
                                </Form.Group>
                                <Form.Group className='mb-5'>
                                    <Form.Control type="password" placeholder='Enter your Password' required />
                                </Form.Group>
                               
                                <Form.Group className='mb-5'>
                                    <Button type='submit' className='submitBtn btn-lg' style={{backgroundColor:'#c9aac1', color: '#573661'}}> Login </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
          
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
