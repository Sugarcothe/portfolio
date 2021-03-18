import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">SugarCodes</div>
          <ul className="nav-links a link-unstyled" style={{transform: open ? "translateX(0px)" : "translatex(-300px)"}}>
            <li>
              <Link className="text-reset" to="/">Home</Link>
            </li>

            <li>
              <Link className="text-reset" to="/About">Tech-Journey</Link>
            </li>
            
          </ul>
          <i onClick={()=> {
            setOpen(!open)
          }} class="burger fas fa-hamburger"></i>
      </nav>
    </div>
  )
}

export default Navbar
