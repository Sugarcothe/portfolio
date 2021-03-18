import React, { Component } from 'react';
import image1 from "./img/idoko.jpg";
import image2 from './img/mum.jpg'
import image3 from './img/semi.jpg'

export class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <h4>MY STORY</h4>
              <ul className="nav nav-pills nav-stacked">
                <li className="a">normall</li>
                <li className="a">normall</li>
              </ul>
          </div>
          <div className="div col-sm-9 text-justify">
            <hr/>

            <h4>MY TECH JOURNEY</h4>
            
            <p className=" fluid">I have always been a tech enthusiast even though during my boyhood days I never did sciences because my teachers taught I wasn’t intelligent enough to go into sciences. I knew I would later be in tech later on, because I love it and sci-fi movies interested me then. As luck would have it, at the later years of my life I was to meet tech in the two places that form my fascination for it till date, which are my friends and then my interest in logical positivism I studies in my philosophy days. </p>

            <p>Earlier than when I kicked of my interest into tech I have done a whole of things that I didn’t find contentment on. I was once into radio OAP during an internship, I was once a shoe maker and made wonderful shoes, I was also enroute being a catholic priest. At some time in my life I played saxophone in churches, I even started a history blog which still run today, I also at sometime sold some old fairly used cloths (okirika in Nigerian slangs). </p>
            <p>
            Although I still count all those years as gain, because instead of sitting down and thinking of what to do, I knew I wanted to go into tech but then had no means. So my gallivanting years was never waste. </p>
            <img className='img-responsive img-fluid' src={image1} alt=""/>
            <p><span className='text-info pt-2'><small>I and Maxmillian and TC, during a holiday at TC house in 2013 december</small></span></p> 

            <h4>MY MOTHERS DEATH</h4>
            
            <p p className="fluid">
            I have always lived my life until 23rd of June 2015 as to impress my mum. She has always wanted me to succeed in become a catholic priest. She never thought of other options for me. She was always fun of me and just like she loves other members of the family, she was so found of me. So his death actually had much impact on me, but then it took me to another angle and view of life. It was time to make a clean brake and then move towards tech proper; towards my dream aspirations.
            </p>
            <img className='img-responsive img-fluid' src={image2} alt=""/>
            <p><span className='text-info pt-2'><small>My late mum carrying me in her hands during the child baptism at Our Lady Of Lourdes Catholic Parish, Orile Lagos</small></span></p> 

            <h4>EXIT FROM SEMINARY</h4>
            
            <p p className="fluid">
            Few months after my mums death, the coast was clear to exit the seminary. Before then I started what I would call computer appreciation, I tried learning much of what I took for granted and thence when the time came for me to leave I took the opportunity. I left not on my on choice initially, it was a case  of injustice to me and a high level of discrination of my people in Awka. My good bishop wanted to salvage my situation, but obviously my mind was made up on leaving for God.
            </p>
            <img className='img-responsive img-fluid' src={image3} alt=""/>
            <p><span className='text-info pt-2'><small>As a seminarian during my mums funeral</small></span></p> 
          </div>
        </div>
      </div>
    )
  }
}

export default About
