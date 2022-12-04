import { useState } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineContacts } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'

import './Nav.css'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === '#exper' ? 'active' : ''} onClick={() => setActiveNav('#exper')}>
        <AiOutlineBook />
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}>
        <RiServiceLine />
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}>
        <AiOutlineContacts />
      </a>
    </nav>
  )
}
