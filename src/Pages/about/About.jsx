import React from 'react';
import './About.css';
import img5 from '../../images/cbmPix1.jpg';
import Sidebar from '../../Components/sidebar/Sidebar';

export default function About() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
           
                <img src={img5} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='headingtop position-absolute  d-none d-md-block'> Who We Are</h1>
            </div>
            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                    Who Are COMPLETE BODY MOVEMENT
                </h1>
                <p className="bodyText mx-5 ">
                COMPLETE BODY MOVEMENT is the Merrithew™ licensed training centre on the island of Ireland. offering STOTT PILATES®, Total Barre®, CORE™ Athletic Conditioning & Performance Training™, & Zen•GA Matwork education since 2004. Hundreds of instructors have passed through these training programs coming from a variety of backgrounds such as physiotherapy, physical therapy, personal training, fitness instruction, massage therapy, sports science, dance, ballet, sport, nursing and other allied health professions. All these students set out with the goal of becoming a pilates instructor of the highest calibre while being able to offer their own unique style of teaching to the STOTT PILATES® Course content
                </p>
                
                <p className="bodyText mx-5">
                <hr/>
                COMPLETE BODY MOVEMENT was created in order to provide students and instructors with a dedicated STOTT PILATES® training and support system and also to demonstrate that we are specialists in the area. The influences involved with the creation of this brand come from experiences in a wide variety of fitness training, rehabilitation and high performance sport during which the benefits of pilates became more and more obvious. As health and fitness professionals caring for our clients or patients we are always continuing to grow and develop and this often leads to adjusting your approach to your practice and philosophies. <br/><br/>In the case of COMPLETE BODY MOVEMENT, it is a brand which represents everything that is positive about health, fitness, movement and relaxation. When taught properly STOTT PILATES® exercises nourish the body from a physical perspective while the sessions are free of anything that might harm or injure the body. In todays fast moving world it has never been more important to take time to care for your body in order to allow it to function to its true potential as well as to avoid unnecessary illness and injury which might occur if this critical care is not given. STOTT PILATES® courses delivered by COMPLETE BODY MOVEMENT provide the knowledge and expertise to make this happen   
                </p>
                <p className="bodyText mx-5">
                <hr/>
                COMPLETE BODY MOVEMENT is committed to offering our students the highest quality of Mind Body Training primarily in the STOTT PILATES® method of exercise, and other Merrithew™ educational programs, so that instructors who train and qualify with us may be capable of positively effecting other peoples lives by the example that they show and the knowledge that they impart while teaching.
                </p>

                <p className="bodyTextSpecial mx-5 p-3">
                    <hr/>
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

