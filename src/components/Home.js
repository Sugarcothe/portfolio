import React, { Component } from 'react';
import Project from './projects/project';
import portImage from './img/avi.jpg';
import Stacks from './stacks'
import pdf from './img/cv1.pdf'
import Contact from './Contact'



export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* Display */}
          <hr/>
          <div className="row">

              <div className="col">
              
              <img className="img-responsive img-fluid"  src={portImage} style={{width:400}} alt=""/>
            </div>

            <div className='display col-lg-8 text-justify'>
              <h1 className=' '>Valentine Eze</h1>
              <p className=" ">Full-stack Web Developer</p>
              <p className="">I am a self-taught fullstck web-developer. I thread on javascript and i base on MERN fullstack. I am learning more to finetune and polish my web development skillset. I am also a design enthusiast.</p>
              
              <p  className="justify-content">Graduated from Nnamdi Azikiwe University Awka, were i studied philosophy, and Latin classic(LATINA LINGUA) at Pope JohnPaul II seminary, Awka</p>

              <div className="row pb-5">
                <button className="btn bg-dark m-2"><a className='text-white' href="https://github.com/Sugarcothe" target="_blanc"><i className="fab fa-github" target="_blanc"></i></a></button>

                <button className="btn bg-dark m-2"> <a className='text-white' href="https://twitter.com/sweetestshuga" target="_blanc"><i className="fab fa-twitter" ></i></a></button>

                <button className="btn bg-dark m-2"> <a className='text-white' href="https://www.linkedin.com/in/eze-valentine-751a40b2/"><i class="fab fa-linkedin-in"></i></a></button>

                <button className="btn bg-dark m-2"> <a href={pdf} target="_blank"></a>CV</button>
              </div> 
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
        <div>
          <Contact />
        </div>
        <footer class="mt-auto text-center">
          <p>Portfolio By <a href="https://twitter.com/sweetestshuga" class="">sweetestshuga</a> 2021</p>
        </footer>
      </div>
      
      
      
    )
  }
}

export default Home
