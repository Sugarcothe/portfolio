import React from 'react';
import stacks from "./img/stackks.jpg"

const Stacks = () => {
  return (
    <div className= "contaniner">

        <div className="mt-5 text-center">
          <h2 className='text-white'>MY STACKS</h2>
          <img src={stacks} className="img-responsive img-fluid p-3" style={{width: 500}} alt="stacks"/>
        </div>

    </div>
  )
}

export default Stacks