import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='navbar'>
          <img src={Logo} alt="Logo" className="Logo" />
        <div class={`${showLinks ? 'block' : 'hidden'} phone:hidden desktop:block tablet:block`}>
          <a href="/Main" className="link">Main</a>
          <a href="/About" className="link">About</a>
          <a href="/Get in touch" className="link">Get in touch</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} class="phone:block desktop:hidden tablet:hidden">
        <img src={Menu} alt="menu icon" />
        </button>
        <div className="last-div"></div>
    </div>
  )
}

export default Navbar
