import React, { Component } from 'react';
import image1 from "./img/idoko.jpg";
import image2 from './img/mum.jpg'
import image3 from './img/semi.jpg'
import image4 from './img/grad.jpg'
import image5 from './img/ikot.jpg'
import image6 from './img/enugu.JPG'

export class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <h4>TIMELINE</h4>
              <ul className="nav nav-pills nav-stacked">
                <li className="a">My Tech Journey</li>
                <li className="a">My Mothers Death</li>
                <li className="a">Exit From The Seminary</li>
                <li className="a">NYSC: My full Launch Into Tech</li>
                <li className="a">My First Laptop</li>
                <li className="a">Homeless And Move To Lagos</li>
              </ul>
          </div>
          <div className="div col-sm-9 text-justify">
            <hr/>

            <h4>MY TECH JOURNEY</h4>
            
            <p className="fluid">I have always been a tech enthusiast even though during my boyhood days I never did sciences, I wasn’t great at class work. I knew I would later be in tech later on, because I love it and sci-fi movies interest me. As luck would have it, at the later years of my life I was to meet tech in the two places that form my fascination for it till date, which are my friends, especially <a href="https://twitter.com/TochuksCode" class="">Theodore</a>, and then my interest in logical positivism and logic I studies in my philosophy days.</p>

            <p>Earlier than when I ventured into tech, I have done a whole of things that I didn’t find contentment on. I was once into radio OAP, I was once a shoe maker and made wonderful shoes, I was also en-route being a catholic priest. At some time in my life I played saxophone in churches, I even started a history blog which still run till date; I also at some time sold some old fairly used cloths (okirika in Nigerian slangs).</p>

            <p>I still count all those years as gain, because instead of sitting down and thinking of what to do, I knew I wanted to go into tech but then had no means. So my gallivanting years was never waste, I still use those knowledge till date</p>
            <img className='img-responsive img-fluid' src={image1} alt=""/>
            <p><span className='text-muted pt-2'><small>I and Maxmillian and <a href="https://twitter.com/TochuksCode" class="">Theodore</a>, during a holiday at <a href="https://twitter.com/TochuksCode" class="">Theodore</a> house, during 2013 december holiday</small></span></p> 

            <h4>MY MOTHERS DEATH</h4>
            
            <p className="fluid">
           I have always lived my life until 23rd of July 2014, as to impress my mum. She has always wanted me to succeed in becoming a catholic priest. She meant well according to her worldview and understanding, she never thought of other options for me. She was always found of me. So her death actually had much impact on me psychologically because of the special love we shared, but then her death took me to another approach and view of life. It was time to make a clean brake and then move towards tech proper; towards my life aspirations.
            </p>
            <img className='img-responsive img-fluid' src={image2} alt=""/>
            <p><span className='text-muted pt-2'><small>As a baby with my mum bearing me in her hands, during my baptism at Our Lady Of Lourdes Parish, Orile-Iganmu, Lagos.</small></span></p> 

            <h4>EXIT FROM THE SEMINARY</h4>
            
            <p p className="fluid">
            Few months after my mum died, the coast was clear to exit the seminary, there wasn’t a reason staying anymore, but then the courage was not there. Before then I started what I would call computer appreciation, I tried learning much of what I took for granted and thence when the opportunity came for me to leave I took it. I left not on my own choice or the way I would want to; it was a case of injustice to me and a high level of discrimination on me. My good bishop wanted to salvage my situation, but obviously my mind was made up on leaving for good (tech). I was to continue my barchelor of art at Nnamdi Azikiwe University Awka in Anambra state, and graduated in 2017.
            </p>
            <img className='img-responsive img-fluid' src={image3} alt=""/>
            <p><span className='text-muted pt-2'><small>As a seminarian during my mums funeral</small></span></p> 

            <img className='img-responsive img-fluid' src={image4} alt=""/>
            <p><span className='text-muted pt-2'><small>With my roommate and friend Ekene, after our final paper at Unizik</small></span></p> 

            
            <h4>(NYSC): MY FULL LAUNCH INTO TECH </h4>
            
            <p className="fluid">
            After university, I was not opportuned to go for NYSC service; I waited for a year and some months before I had the opportunity to serve. It was the most trying time of my life. I was broke and depressed as days would roll to weeks, and months and I was totally broke. I did a lot of jobs that only paid penny. It broke my heart I couldn’t venture into tech as I had no means. <a href="https://twitter.com/TochuksCode" class="">Theodore</a>, was already into it. At some point that year, I worked for free just to get myself busy and not sink into depression. I wrote poems to ease of the pain, I wrote the highest number of short poem that year, and each one of them were depressing. As luck would have it, on August 2019, I enrolled among those to serve in the NYSC successfully, I knew thereon, that this would be my final chance into tech and I grabbed it head on. I pushed myself to Yobe state against my parents wish. Yobe is perceived as a terror zone, and thus not many admired the place, but one fact about it was that things were cheap. Since I wanted to save for a laptop, I would risk it.
            </p>
            <img className='img-responsive img-fluid' src={image5} alt=""/>
            <p><span className='text-muted pt-2'><small>With Mrs Ikot and Nuhu during my national service CDS</small></span></p> 


            <h4>MY FIRST LAPTOP</h4>
            
            <p className="fluid">
            Firstly, I was able to buy the laptop from the money I saved from the NYSC, and also special mention to <a href="https://twitter.com/TochuksCode" class="">Theodore</a> who helped me complete the money for it. Secondly, Yobe state became the friendliest place I have ever been outside my state. I met amazing people who helped me kick-start my tech journey.
            </p>

            <h4>HOMELESS AND MOVE TO LAGOS</h4>
            
            <p className="fluid">
            After service on returning to my state, a lot of things had changed, those things I wouldn’t want to mention, but I couldn’t find a place I could code from. I wanted to travel back to the northeast, but <a href="https://twitter.com/TochuksCode" class="">Theodore</a> made some provisions for accommodation. He allowed me stay in their home and code from, while he was in far-away Germany. The family took me in and would treat me like a son. It was there that the idea of moving to Lagos actually came on and then <a href="https://twitter.com/TochuksCode" class="">Theodore</a> still made it possible.
            </p>
            <img className='img-responsive img-fluid' src={image6} alt=""/>
            <p><span className='text-muted pt-2'><small>After a session with Enugu Tech community (THIRD FROM LEFT)</small></span></p> 
          </div>
        </div>
      </div>
    )
  }
}

export default About
