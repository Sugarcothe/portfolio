import React, { Component } from 'react';
import pidginbox from '../img/pidgin.jpg';
import gbagun from '../img/gbagun.jpg';
import vibers from '../img/vibers.jpg'


export class project extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="">PROJECTS</h2>
        <div className="Project row text-justify text-center">
        <div className="col-lg-4">
         
         <img src={pidginbox}className="mt-3 img-responsive"  style={{width:300 }}alt="my project"/>

          
          <h5 className="mt-2">CHAT APPLICATION</h5>
          <p>The chat application was built in the react library. It has form validation, as to make sure that irregularites of form submit does not occur. It was built with current ES6 syntax and deployed on heroku app.</p>
          <button className="btn bg-dark mr-2"><a className='text-white' href="https://github.com/Sugarcothe/PidginTalk" target="_blank"><i className="fab fa-github"></i></a></button>
          <button className="btn bg-dark mr-2"><a className='text-white' href="http://pidginbox.herokuapp.com/" target="_blank"><i className="fas fa-link"></i></a></button>  
        </div>
        
        <div className="col-lg-4">

        <img src={gbagun} className="mt-3 img-responsive"  style={{width:300 }}alt=""/>
          <h5 className="mt-2">E-COMMERCE</h5>
          <p>This is a food e-commerce project i built using MERN Stack React Node MongoDB powered E-Commerce App, with PayPal and Credit Card Payment along with Admin Dashboard. Built the API backend and then fetched all data and integrated it in the frontend. </p>
          <button className="btn bg-dark mr-2"><a className='text-white' href="https://github.com/Sugarcothe/ecommerce-file" target="_blank"><i className="fab fa-github"></i></a></button>
          <button className="btn bg-dark mr-2"><a className='text-white' href="" target="_blank"><i className="fas fa-link"></i></a></button>
        </div>

        <div className="col-lg-4">
         <img src={vibers} className="mt-3 img-responsive" style={{width:300 }}alt=""/>
          <h5 className="mt-2">SOCIAL NETWORK</h5>
          <p>This social network was built through the MERN fullstack and has integration of the backend with the frontend. This was built in using the current javascript syntax. I implememted  CRUD.</p>
          <button className="btn bg-dark mr-2"><a className='text-white' href="https://github.com/Sugarcothe/Sorosoke-frontend" target="_blank"><i className="fab fa-github"></i></a></button>
          <button className="btn bg-dark mr-2"><a className='text-white' href="http://pidginbox.herokuapp.com/" target="_blank"><i className="fas fa-link"></i></a></button>
        </div>
      </div>
      </div>
      
    )
  }
}

export default project
