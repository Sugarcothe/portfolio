import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">SugarCodes</div>
          <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/Blog">Blog</Link>
            </li>

            <li>
              <Link to="Contact">Contact</Link>
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
