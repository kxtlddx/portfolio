import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='navbar'>
          <img src={Logo} alt="Logo" class="w-[33.06px] h-[35px]" />
        <div class={`${showLinks ? 'block' : 'hidden'} phone:hidden desktop:block tablet:block`}>
          <a href="/Main" class="link">Main</a>
          <a href="/About" class="link">About</a>
          <a href="/Get in touch" class="link">Get in touch</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} class="phone:block desktop:hidden tablet:hidden">
        <img src={Menu} alt="menu icon" />
        </button>
        <div class="last-div"></div>
    </div>
  )
}

export default Navbar
