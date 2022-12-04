import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

import './HeaderSocials.css'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <BsDribbble />
      </a>
    </div>
  )
}
