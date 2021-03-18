import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <h3 className="text-center">Contact</h3>
        <div className="card mb-3">
          <div className="row no-gutters text-dark">        
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
    )
  }
}

export default Contact
