import React from 'react';
import stacks from "./img/stackks.jpg"

const Stacks = () => {
  return (
    <div className= "contaniner">

        <div className="mt-5 text-center p-3">
          <h4 className=''>MY STACKS</h4>
          <img src={stacks} className="img-responsive img-fluid " style={{width: 500}} alt="stacks"/>
        </div>

    </div>
  )
}

export default Stacks