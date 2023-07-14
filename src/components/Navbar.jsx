import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='navbar'>
      <div class="flex justify-between items-center w-full">
        <div>
          <img src={Logo} alt="Logo image" class="w-[33.06px] h-[35px]" />
        </div>
        <div class={`space-x-6 ${showLinks ? 'block' : 'hidden'} phone:hidden desktop:block tablet:block`}>
          <a href="/Main" class="hover:text-lavender">Main</a>
          <a href="/About" class="hover:text-lavender">About</a>
          <a href="/Get in touch" class="hover:text-lavender">Get in touch</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} class="phone:block desktop:hidden tablet:hidden">
        <img src={Menu} alt="Menu icon" />
        </button>
      </div>
      <div class="flex absolute bottom-0 h-[1px] bg-grey-light w-full" ></div>
    </div>
  )
}

export default Navbar
