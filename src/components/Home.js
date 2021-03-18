import React, { Component } from 'react';
import Project from './projects/project';
import portImage from './img/avi.jpg';
import Stacks from './stacks'



export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 m-2">
          {/* Display */}
          <div className="row">

            <div className='display col-lg-8 text-justify'>
              <h1 className=' '>Valentine Eze</h1>
              <p className=" ">Full-stack Web Developer</p>
              <p className="">I am a self-taught fullstck web-developer. I thread on javascript and i base on MERN fullstack. I am learning more to finetune and polish my web development skillset. Also a design enthusiast.</p>
              
              <p  className="justify-content">Graduated from Nnamdi Azikiwe University Awka, were i studied philosophy, and Latin classic(LATINA LINGUA) at Pope JohnPaul II seminary, Awka</p>

              <div className="row pb-5">
                <button className="btn bg-dark m-2"><i className="fab fa-github"></i></button>
                <button className="btn bg-dark m-2"><i className="fab fa-twitter"></i></button>
                <button className="btn bg-dark m-2"><i className="fab fa-linkedin-in "></i></button>
                <button className="btn bg-dark m-2"><i className="fas fa-file "></i> Resume</button>
              </div> 
            </div>  
            
            <div className="col">
              
              <img className="img-responsive img-fluid"  src={portImage} style={{width:400}} alt=""/>
            </div>
     
          </div>
        </div>

         {/* Projects */}
        <div className="mt-5 justify-content-center text-center">
          <Project/>
        </div>
        <div>
          <Stacks className='mt-5'/>
        </div>
      </div>
      
      
      
    )
  }
}

export default Home
