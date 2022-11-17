import {Nav} from 'react-bootstrap';
import './Sidebar.css';
import SocialMedia from '../socialMedia/SocialMedia';
import Pp from '../../images/paypal.png';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <div className='sidebar p-4'>
          <div className='sidebarHeader'><h2>PILATES </h2><span>COURSES AVAILABLE</span></div>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/IntensiveMatPlus" className='sidebarLink'>Intensive Mat Plus</Nav.Link>
            <Nav.Link href="/AdvanceMat" className='sidebarLink'>Advance Mat Course</Nav.Link>
            <Nav.Link href="/InjuryAndSpecial" className='sidebarLink'>Injury and Special Population Course</Nav.Link>
            <Nav.Link href="/IntensiveReformer" className='sidebarLink'>Intensive Reformer Course</Nav.Link>
            <Nav.Link href="/Workshops" className='sidebarLink'>Workshops</Nav.Link>
            <Nav.Link href="/Zenga" className='sidebarLink'>Zen.Ga</Nav.Link>
            <Nav.Link href="/TotalBarre" className='sidebarLink'>Total Barre</Nav.Link>
            <Nav.Link href="/AdvancedReformer" className='sidebarLink'>Advance Reformer</Nav.Link>
            <Nav.Link href="/ICCB" className='sidebarLink'>ICCB</Nav.Link>
          </Nav>
      </div>
      <div className='sidebarButtons mt-4 d-flex justify-content-center'>
            <button className='sidebarBtn-1 me-3 btn btn-sm'>
              <Link to='/' className="linkBtn" >Become an INSTRUCTOR</Link>
              </button>
            <button className='sidebarBtn-2  btn btn-sm'>
              <Link to='/Workshops' className="linkBtn" >Join our WORKSHOPS</Link>
              </button>
      </div>
      <div className='m-4'>
        <h5>PAYMENTS BY</h5>
       
          <img src= {Pp} alt="paypal"  style={{width:'50%'}} className='img-fluid'/>
          
            
      </div>
      <div className='m-4'>
          <SocialMedia/>
          
      </div>
    
    </div>
  ); 
}

export default Sidebar;