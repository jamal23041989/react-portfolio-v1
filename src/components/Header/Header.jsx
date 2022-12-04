import { Cta, HeaderSocials } from '../index'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jamal Kurbanov</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <Cta />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}
