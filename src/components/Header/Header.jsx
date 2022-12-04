import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Link to="/">Home</Link>
        <ul className="header__links">
          <li>
            <Link to="/portfolio">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
