import React, { Component } from 'react';
import cons from './img/cons.jpg'

export class Blog extends Component {
  render() {
    return (
      <div className="mt-5 m-3 jumbotron container">
        <h4 className='bg-light text-dark'>Check back later...</h4>
        <img src={cons} className="img-fluid" alt=""/>
      </div>
    )
  }
}

export default Blog
