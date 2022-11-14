import React from 'react';
import './Footer.css';
import logo from "../../images/cbm-transparentLogo.png";
import SocialMedia from '../socialMedia/SocialMedia';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {ImLocation2} from 'react-icons/im';
import {Button} from 'react-bootstrap';
//import {BsArrowUpSquare} from 'react-icons/bs';
import {Link} from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer'>
        <div className='container-fluid p-5'>
            <div className="row">
                <div className="col-md-3 mt-1">
                    <img src={logo} alt="logo" className='img-fluid' />
                    <p className='footerText'>COMPLETE BODY MOVEMENT is the Merrithew™ Licenced Training Centre of STOTT PILATES® on the island of Ireland, offering STOTT PILATES®, Total Barre®, CORE™ Athletic Conditioning & Performance Training, & ZEN•GA Matwork education. The STOTT PILATES® Method has been offered in <a href='/' className="text-light">continue reading...</a></p>
                </div>
                <div className="col-md-3 mt-4 pilateCourses ">
                    <h5>PILATE COURSES AVAILABLE</h5>
                    <ul>
                        <li>Intensive Mat Plus</li>
                        <li>Advance Mat Course</li>
                        <li>Injury and Special Population Course</li>
                        <li>Intensive Reformer Course</li>
                        <li>Workshops</li>
                        <li>Zen.Ga</li>
                        <li>Total Barre</li>
                        <li>Advance Reformer</li>
                        <li>ICCB</li>
                    </ul>

                </div>
                <div className="col-md-3 mt-4 px-3 contactusFooter">
                    <SocialMedia/>
                    <div>
                        <h5 className='mt-5 mb-3'>CONTACT US</h5>
                        <div><GrMail className='h5'/> <span>dani@completebodymovement.ie</span></div>
                        <div><BsFillTelephoneFill className='h5'/> <span>01 5156210 / 087 9474784</span></div>
                        <div><ImLocation2 className='h5 me-1'/><span>The Pavilion, Merrion Road, Ballsbridge, Dublin 4.</span></div>
                        
                    </div>

                </div>
                <div className="col-md-3 mt-4">
                    <h5 className='mb-2'>JOIN US </h5>
                    <Link to='/Login'><Button variant="light"> Student Login </Button></Link>
          
                </div>
                {/* <div className="position-relative">
                    <h1 className='position-absolute bottom-0 end-0'>
                        <a href='/' className="text-light">
                        <BsArrowUpSquare/>
                        </a>
                    </h1>
                </div> */}
                
            </div>
        
        </div>
      
    </div>
  );
}
