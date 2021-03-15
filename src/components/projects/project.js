import React, { Component } from 'react';
import loanc from '../img/loancalc.jpg';
import gbagun from '../img/gbagun.jpg';
import vibers from '../img/vibers.jpg'


export class project extends Component {
  render() {
    return (
      <div className="container justify-content-center">
        <h1 className="pb-5">PROJECTS</h1>
        <div className="Project row">
        <div className="col-lg-4">
         
         <img src={loanc} style={{width:300 }}alt=""/>
          <h4>LOAN CALCULATOR</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magnam hic tempora fugit accusamus, unde, sit ipsa, quisquam beatae quis enim doloribus assumenda natus et omnis. Doloribus asperiores quaerat omnis!</p>
        </div>
        <div className="col-lg-4">

        <img src={gbagun} style={{width:300 }}alt=""/>
          <h4>FOOD E-COMMERCE</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magnam hic tempora fugit accusamus, unde, sit ipsa, quisquam beatae quis enim doloribus assumenda natus et omnis. Doloribus asperiores quaerat omnis!</p>
        </div>

        <div className="col-lg-4">
         <img src={vibers} style={{width:300 }}alt=""/>
          <h4>SOCIAL NETWORK</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magnam hic tempora fugit accusamus, unde, sit ipsa, quisquam beatae quis enim doloribus assumenda natus et omnis. Doloribus asperiores quaerat omnis!</p>
        </div>
      </div>
      </div>
      
    )
  }
}

export default project
