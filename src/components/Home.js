import React, { Component } from 'react';
import Project from './projects/project';
import portImage from './img/avi.jpg';
import Stacks from './stacks'


export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 bg-dark">
          {/* Display */}
          <div className="row">

            <div className="col">
              <img className="img-responsive img-fluid"  src={portImage} style={{width:350}} alt=""/>
            </div>

            <div className='display text-white m-2 col-lg-8 text-justify'>
              <h1 className=' '>Valentine Eze</h1>
              <p className=" ">Full-stack Web Developer</p>
              <p className="">I am a self-taught fullstck web-developer. I thread on javascript and i base on MERN fullstack. I am learning more to finetune and polish my web development skillset. Also a design enthusiast, and importantly i love a simple but creative UI/UX dsigns. I at the beginner level on Figma and as well as doing some little designs in photoshop.</p>
              
              <p  className="justify-content">Graduated from Nnamdi Azikiwe University Awka, were i studied philosophy. and also studied Latin classic(LATINA LINGUA)</p>

              <div className="row pb-5">
                <button className="btn m-2"><i className="fab fa-github"></i></button>
                <button className="btn m-2"><i className="fab fa-twitter"></i></button>
                <button className="btn m-2"><i className="fab fa-linkedin-in "></i></button>
                <button className="btn m-2"><i className="fas fa-file "></i> Resume</button>
              </div> 
            </div>       
          </div>
        </div>

         {/* Projects */}
        <div className="project justify-content-center text-center">
          <Project/>
        </div>
        <div>
          <Stacks/>
        </div>
      </div>
      
      
      
    )
  }
}

export default Home
