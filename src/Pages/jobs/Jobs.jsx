import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Jobs.css';


export default function Jobs() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-md-9">
            <h1 className="bodyHeading mt-5 mb-4">
                    Job Opportunities and Annoucements
            </h1>
            <div>
              <h5 className='mx-5 openingHours'>PLEASE NOTE:</h5>
              <p className="announce mx-5">
              From October 1st 2017 we will no longer place job advertisements on this page. Instead we will announce jobs on our Facebook page : Complete Body Movement . 
              </p>

              <p className='bodyText mx-5'>Should you wish to avail of the option to advertise your job vacancy on our Facebook page, please email us  at info@completebodymovement.ie, and provide us with a clear description of the job that is available, name of studio & contact person, and contact phone number.
              <br/><br/>Unfortunately we can only advertise jobs that include all of these details.
              <hr/>
              </p>

            </div>
            </div>
            <div className="col-md-3">
                <Sidebar/>
            </div>
        </div>
    </div>
  );
}
