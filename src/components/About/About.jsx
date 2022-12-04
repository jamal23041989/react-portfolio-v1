import './About.css'
import ME from '../../assets/me.gif'
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa'

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worlwide</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, exercitationem optio iure eligendi odit enim
            itaque neque suscipit dignissimos facere non blanditiis, aspernatur quis nisi veritatis nesciunt ullam animi et?
          </p>
        </div>
      </div>
    </section>
  )
}
