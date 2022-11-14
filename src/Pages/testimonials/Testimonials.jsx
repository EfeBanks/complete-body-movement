import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import IntMat from '../../images/injuryandspecial.jpg';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <div className='container-fluid'>
        <div className="row mt-3">
            <div className="col-12 position-relative">
                <img src={IntMat} alt='aboutImage' className='aboutImage img-fluid ' style={{height: '40vw', width:'100%'}}/>
                <h1 className='headingtop position-absolute  d-none d-md-block'> Testimonials</h1>
            </div>
            <div className="row">
                <div className="col-md-9">
                <h1 className="bodyHeading mt-5 mb-4">
                What Our Students Have To Say
                </h1>
                <div className="row bodyText mx-4 mt-5">
                    
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Premium Training </h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"As a Specialised Fitness Instructor I was looking for a pilates course that was "best in class", which STOTT PILATES® provided.  Although the training was challenging it gave me a highly credible qualification, recognized worldwide.  The after course support provided by STOTT PILATES helps keep me to keep up to date with news and views as well as providing motivation as an instructor.  Regular workshops allow me to maintain my certification at the same time as learning new techniques, providing information on pilates for special population clients as well as networking with my pilates instructor colleagues." </p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Maria Ham, Specialised Fitness Instructor/STOTT PILATES® Instructor, Cork</p>
                    </div>
                </div>
                
                <div className="row bodyText mx-4 mt-5">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Premium Training </h5>
                    </div>
                    <div className='col-md-9'>
                        <p>I have been teaching STOTT PILATES® to clients and using it as a therapeutic tool in treatment of patients since 2005 when I completed my certification with Litton Lane Training. STOTT PILATES has proved to be an essential tool in overall treatment and management of patients and through STOTT PILATES I am teaching patients the skill to rehabilitate through a program of scientifically- based exercises. Litton Lane Training not only provides Instructor courses but also continuing education workshops in a variety of areas such as pre and post natal, scoliosis, osteoporosis, to the highest standard. Litton Lane Training are both efficient and professional  in their provision of training and support to trainee and trained instructors. In a nutshell STOTT PILATES courses delivered by Complete Body Movement is training for professionals, by professionals. </p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Dara Dunne, Chartered Physiotherapist</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Sporting Condition </h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"After getting an injury in Brazilian Jiu-Jitsu, I started taking Pilates classes at my local gym as a way to maintain my fitness level during my recovery. It quickly became an integral part of my training, both as a way to prevent injuries and improve my game. I feel that I have a stronger, more solid core than many of my competitors thanks to Pilates and its emphasis on the deeper abdominal muscles. STOTT PILATES, in particular, is an ideal form of cross-training for martial arts and other high impact sports because so much work is done in a neutral position, which is the most absorbing position for the spine." </p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Sarah, Toronto ON</p>
                    </div>
                </div>
                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Pre- and Post-Natal Fitness </h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"Thank you for making such a good product! I am just getting back into shape after having a baby and decided that I also really needed to work on my posture, which was poor before the pregnancy, and had gotten worse. I have only been using your DVDs a few weeks but can already see improvement." </p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Stephanie, Huntsville, AB</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Physical Rehabilitation</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"One of my clients is a two-time survivor of cancer who recently finished her last round of chemotherapy. She initiated her recovery by doing Pilates. Her improvement was evident within months when she was able to finish each class with energy and vigor. She recently expressed to me with tears that she feels stronger physically and most importantly mentally. Her outlook on life is viewed through optimistic eyes that blind the obstacles before her. And all of this, she says, is because she attends Pilates three times a week. Success is not only revealed on the outer-structure of the body, but in the inner-being of the soul." </p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Heather, Pilates Instructor, Scottsdale AZ</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Physical Rehabilitation</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"About ten years ago, I began to experience lower back pain which I attributed to standing on the job all day. Today I have no lower back pain whatsoever, and I am positive it was Pilates that helped me. I have a strong core and my balance has improved. Doing Pilates has helped make me more aware of my body and how it works. Thank you STOTT PILATES!"</p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Janice, Thorold ON</p>
                    </div>
                </div>
                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Physical Rehabilitation</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"Taking my body for granted changed last year when I was diagnosed with multiple sclerosis. It was with this diagnosis that I started to exercise for “me”, for the first time in my life. I wanted to “use it for fear of losing it” more than I already had. Since starting the STOTT PILATES routines, I have felt more energized, confident, and physically gained strength and additional flexibility."</p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Missy, Pottstown, PA</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Weight Management</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"I started doing Pilates at home after my dog died. Until then, I ran. When he died, I found I could not bring myself to run without him. So then I was faced with what to do to keep in shape. I had some Pilates videos, so I went to buy a mat. It came with a STOTT PILATES® DVD. Since then I have collected about 20 STOTT PILATES DVDs, which I rotate through. The instruction makes me feel like I have a personal trainer in my basement. My upper body strength has increased, I feel and look more toned, and I actually feel taller."</p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Judy, Fort St. John, BC</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Weight Management</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"About 20 years ago I lost more than half of my body weight. But as with most weight loss experiences, the results were short-lived. After some of my pounds started to return I took a different approach. Diet with body sculpting made sense and so I started doing Pilates. It was working and I was extremely enthused! Then I began teaching Pilates at my community. I’m grateful that the STOTT PILATES® method has helped me and that I have been able to help others achieve their goals and improve their quality of life."</p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Joanna Cox, Owner, ABC Pilates, Naples FLBC</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Weight Management</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"I realized that if I didn't get my weight in control, I was going to have a lot of issues. My first and most important step was making an appointment to see a dietician. I started walking 10,000 steps a day; I biked; I swam occasionally; but most importantly I did Pilates. Over seven months, I lost 45 pounds. I had always feared that with that amount of weight loss my skin would sag, but Pilates kept me toned. I could feel my abs strengthen. I could feel my obliques becoming defined. My arms were strong. Pilates continues to play a huge role in my life — keeping me toned, healthy, active, and energized."</p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Debbie, Toronto ON</p>
                    </div>
                </div>

                <div className="row bodyText mx-4">
                    <hr/>
                    <div className="col-md-3">
                        <h5 className='testimonialHeading'>Dance</h5>
                    </div>
                    <div className='col-md-9'>
                        <p>"As an avid competitor in ballroom dance, I have struggled with my inward toe point all my life. After just a few months of training with STOTT PILATES, I find I am able to achieve a greatly improved outward toe point. Plus, I have never looked better – and my posture has improved as well, allowing me to appear larger on the dance floor."</p>
                        <p style={{color:'#573661', fontWeight:'bold'}}> - Scotti, Fairfax, VA</p>
                    </div>
                </div>

                

                <p className="bodyTextSpecial mx-4 p-3">
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
