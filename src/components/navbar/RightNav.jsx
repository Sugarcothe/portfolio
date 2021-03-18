import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Ul = styled.ul `
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
    }

    @media (max-width: 760px) {
      display: none;
      flex-flow: column nowrap;
      background-color: #434242;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 2rem;

      li {
        color: white;
      }
    }
`


const RightNav = () => {
  
  return (
    <nav>
      <Ul>
            <li>
              <Link className="text-reset" to="/">Home</Link>
            </li>

            <li>
              <Link className="text-reset" to="/About">About</Link>
            </li>

            <li>
              <Link className="text-reset" to="/Blog">Blog</Link>
            </li>

            <li>
              <Link className="text-reset" to="Contact">Contact</Link>
            </li>
            
          </Ul>

    </nav>
    
    
  )
}

export default RightNav
