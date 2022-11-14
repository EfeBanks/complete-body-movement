import React from 'react';
import './Home.css';
// import img1 from '../../images/img-4new.jpg';
// import img2 from '../../images/img-7new.jpg';
// import img3 from '../../images/img-8new.jpg';
// import img4 from '../../images/img-9new.jpg';
// import img5 from '../../images/img-7new.jpg';
 import img1 from '../../images/cbmPix2.jpg';
 import img2 from '../../images/cbmPix1.jpg';
 import img3 from '../../images/advanceMat.jpg';
 import img4 from '../../images/injuryandspecial.jpg';
 import img5 from '../../images/cbmPix5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from '../../Components/sidebar/Sidebar';
import vid1 from '../../videos/v1.mp4';


export default function Home() {
  return (
    <div className='container-fluid '>
     <div className="row mt-3">
        <div className="col">
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 imgSlider position-relative"
          src={img1}
          alt="First slide"
          style={{height:'50%', width:'50%'}}
          
        />
        <Carousel.Caption>
          <h1 className='carouselTitle position-absolute  d-none d-md-block'> Welcome</h1>
          {/* <p className='h5 carouselText'>COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES in Ireland and have been running courses for 8 years. </p> */}
          <p className='h5 carouselText d-md-block d-none'>COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES, Total Barre®, ZEN•GA Matwork education and other courses in Ireland for 8 years. </p>
          {/* <p className='h5 carouselText'>COMPLETE BODY MOVEMENT is the Merrithew™ Licenced Training Centre of STOTT PILATES® on the island of Ireland, offering STOTT PILATES®, Total Barre®, CORE™ Athletic Conditioning & Performance Training, & ZEN•GA Matwork education.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 imgSlider"
          src={img2}
          alt="Second slide"
          style={{height:'50%'}}
        />
          <Carousel.Caption>
          <h1 className='carouselTitle position-absolute  d-none d-md-block'> Welcome</h1>
          <p className='h5 carouselText d-md-block d-none'>COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES, Total Barre®, ZEN•GA Matwork education and other courses in Ireland for 8 years. </p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlider"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='carouselTitle position-absolute  d-none d-md-block'> Welcome</h1>
          <p className='h5 carouselText d-md-block d-none'>COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES, Total Barre®, ZEN•GA Matwork education and other courses in Ireland for 8 years. </p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlider"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='carouselTitle position-absolute  d-none d-md-block'> Welcome</h1>
          <p className='h5 carouselText d-md-block d-none'>COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES, Total Barre®, ZEN•GA Matwork education and other courses in Ireland for 8 years. </p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlider"
          src={img5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='carouselTitle position-absolute  d-none d-md-block'> Welcome</h1>
          <p className='h5 carouselText d-md-block d-none'>COMPLETE BODY Movement is the sole licensed training centre for STOTT PILATES, Total Barre®, ZEN•GA Matwork education and other courses in Ireland for 8 years. </p>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </div>
    </div>

    <div className='row'>
      <div className="col-md-9 bodyContent">
            <h1 className="bodyHeading mt-5 mb-4">
              Welcome To COMPLETE BODY MOVEMENT
            </h1>
            
            <p className="bodyText mx-5 ">
            COMPLETE BODY MOVEMENT is the Merrithew™ Licenced Training Centre of STOTT PILATES® on the island of Ireland, offering STOTT PILATES®, Total Barre®, CORE™ Athletic Conditioning & Performance Training, & ZEN•GA Matwork education. The STOTT PILATES® Method has been offered in Ireland since 2004 and hundreds of instructors have passed through the courses coming from a variety of backgrounds such as physiotherapy, physical therapy, personal training, fitness instruction, massage therapy, sports science, dance, ballet, sport, nursing and other allied health professions. All these students set out with the goal of becoming a pilates instructor of the highest calibre while being able to offer their own unique style of teaching to the STOTT PILATES® Course content.
            </p>
            <p className="bodyText mx-5 ">
            COMPLETE BODY MOVEMENT is committed to offering our students the highest quality of Mind Body Training primarily in the STOTT PILATES® method, so that as Trained and/or Certified instructors they may be capable of positively affecting other peoples’ lives by the example that they show and the knowledge that they impart while teaching.
            </p>

            {/* video section */}
            <div className='mx-5 my-4'>
              <video src={vid1} controls="controls" autoPlay="true" loop="true" className='img-fluid'/>
            </div>

            <div>
              <h5 className='mx-5 openingHours'>OPENING HOURS</h5>
              <p className="hours mx-5">
              WE ARE CURRENTLY WORKING REMOTELY OUT OF THE OFFICE. FOR ALL QUERIES PLEASE EMAIL US ON dani@completebodymovement.ie OR SEND US A TEXT MESSAGE AT 087 9474784 WITH YOUR QUERY.<br/>WE LOOK FORWARD TO HEARING FROM YOU! 
              </p>
            </div>
            <div>
              <h5 className='mx-5 examDates'>EXAM DATES</h5>
              <ul className="hours mx-5">
                <li>SEPTEMBER 17TH - 2 places available</li>
                <li>SEPTEMBER 24TH - 1 place available</li>
                <li>OCTOBER 8TH - FULL</li>
                <li>OCTOBER 9TH - 1 place available</li>
                <li>NOVEMBER/DECEMBER to be confirmed</li>
                <li>JANUARY 14TH 2023 - 4 places</li>
              </ul>
            </div>
            <div>
            <h5 className='mx-5 examDates'>NOTICE</h5>
              <p className="hours mx-5">
                IN ORDER TO PROTECT OUR STUDENTS, AS WELL AS OUR TEACHERS, ALL STUDENTS MUST WEAR A FACE MASK AND GLOVES DURING THE EXAM WHEN ADVICED BY PUBLIC HEALTH ADVICE.
                FOR QUERIES ON EXAM EXTENSIONS AND OTHER QUERIES RELATED TO COVID-19 AND YOUR EDUCTATION PLEASE VISIT THIS DIRECT LINK: HTTP://WWW.MERRITHEW.COM/INSTRUCTOR-TRAINING/COVID-19-EDUCATION-FAQS.
              
              <p className="bodyTextSpecial p-3 mt-4">
                <hr/>
                ® Registered Trademark of Merrithew Corporation, used under license. 
                <br/>Photography © Merrithew Corporation, used with permission.
                </p>
              </p>
            </div>
            <div>
           
            </div>
        </div>
        <div className="col-md-3">
        <Sidebar />
        </div>
     </div>
    </div>
  );
}




