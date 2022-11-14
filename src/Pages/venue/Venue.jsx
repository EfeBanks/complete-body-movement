import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import venueImg from '../../images/img-4.jpeg';
import './Venue.css';



export default function Venue() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={venueImg} alt='venueImage' className='aboutImage img-fluid' style={{height: '40vw', width:'100%'}}/>
                <h1 className='headingtop position-absolute  d-none d-md-block'> Venue</h1>
            </div>
        </div>
    <div className="row">
        <div className="col-md-9">
        <h1 className="bodyHeading mt-5 mb-4">
        Courses and Workshops Venues
        </h1>
        <div>
            <div className="row mt-3">
                <div className="col-md venueList">
                    <ul><h5 className='openingHours'>Belfast</h5>
                        <li>Queens University</li>
                    </ul>
                </div>
                <div className="col-md venueList">
                    <ul><h5 className='openingHours'>Cork</h5>
                        <li>Carrigaline Court Hotel</li>
                        <li>Elite Pilates</li>
                        <li>Leisureworld</li>
                    </ul>
                    
                </div>
                <div className="col-md venueList">
                    <ul><h5 className='openingHours'>Dublin</h5>
                        <li>Westpark Fitness</li>
                        <li>The Pavilion</li>
                        <li>Trinity College</li>
                        <li>Dublin City University</li>
                    </ul>
                    
                </div>
                <div className="col-md venueList">
                    <ul><h5 className='openingHours'>Galway</h5>
                        <li>Salthill Hotel</li>
                        <li>Carlton Hotel</li>
                    </ul>
                </div>
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



