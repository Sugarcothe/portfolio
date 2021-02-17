import React, { Component } from 'react';
import Image1 from './img/these.jpg';
import Image2 from './img/idoko.jpg'

export class About extends Component {
  render() {
    return (
    
        <div className = "clearfix p-5">
        <img src={Image1} class="col-md-6 float-md-end mb-3 ms-md-3 " alt=""/>
        <h1>ABOUT</h1>
        <p className="display-1"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, consectetur repudiandae aut quo maxime, quaerat ad est reprehenderit qui expedita atque asperiores eaque
        </p> 
        <p className="display-1">soluta saepe maiores autem ducimus blanditiis cupiditate Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolore temporibus sint, aperiam hic expedita modi reiciendis </p> 
        <p className="display-1">quod fugiat ex laudantium, iusto blanditiis veritatis id optio quisquam a accusamus vitae perferendis! Non, consequatur rem? Pariatur non eveniet voluptatem porro minima?</p>
    
        <p className="display-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, consectetur repudiandae aut quo maxime, quaerat ad est reprehenderit qui expedita atque asperiores eaque soluta saepe maiores </p> 

        <p className="display-1">autem ducimus blanditiis cupiditate Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolore temporibus sint, aperiam hic expedita modi reiciendis quod fugiat ex laudantium,</p> 

        <p className="display-1"> iusto blanditiis veritatis id optio quisquam a accusamus vitae perferendis! Non, consequatur rem? Pariatur non eveniet voluptatem porro minima?</p>
        
        </div>
      
    )
  }
}

export default About
