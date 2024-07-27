import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = ({filterNews}) => {
  
  const [show, setShow] = useState(false);  
    
  return (
    <nav>
        <div className='logo'>
           <img src="/logo1.png" alt="logo" />
        </div>

        <ul className={show ? "show" : ""}>
            <li onClick={() => filterNews("everything")}>All News</li>
            <li onClick={() => filterNews("business")}>Business</li>
            <li onClick={() => filterNews("entertainment")}>Entertainment</li>
            <li onClick={() => filterNews("general")}>General</li>
            <li onClick={() => filterNews("health")}>Health</li>
            <li onClick={() => filterNews("science")}>Science</li>
            <li onClick={() => filterNews("sports")}>Sports</li>
            <li onClick={() => filterNews("technology")}>Technology</li>
        </ul>
        <GiHamburgerMenu onClick={() => setShow(!show)}/>
    </nav>
  )
}

export default Navbar