import React, { Component } from 'react';
import image from './img/these.jpg';


export class Contact extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <div className="card mb-3">
          <div className="row no-gutters text-dark">
            <div className="col-md-4">
              <img src={image} style={{width:350, height:'auto'}} className="card-img img-fluid img-responsive" alt=""/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text pt-3">PHONE : (+234) 07067869822, (+234) 08086679222</p>
                <p className="card-text pt-3">ADDRESS : NO 91 ODUNSI STREET BARIGA, LAGOS</p>
                <p className="card-text pt-3">DISPOSITION : REMOTE/FULLTIME/FREELANCE (<span className="text-info"><small>Works according to the TandC of employer</small></span>)</p>

                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button className="btn text-white border-light"><a className="text-white " href='https://ifeanyivalentine82@gmail.com'>SEND MAIL</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
