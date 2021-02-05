import React, { Component } from 'react';
import Project from './projects/project';


export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {/* Display */}
          <div className='display container text-center'>
            <h1 className='Jumbotron displayh'>Valentine Eze</h1>
            <p className="displayp text-center">Full-stack Web Developer</p>
          </div>

          <div className="row pb-5 justify-content-center">
            <button className="btn m-2"><i class="fab fa-github"></i></button>
            <button className="btn m-2"><i class="fab fa-twitter"></i></button>
            <button className="btn m-2"><i class="fab fa-linkedin-in"></i></button>
            <button className="btn m-2"><i class="fas fa-file"></i> Resume</button>
          </div> 
        </div>

         {/* Projects */}
       <div className="project justify-content-center text-center p-2">
          <Project/>
        </div>
      </div>
      
      
      
    )
  }
}

export default Home
