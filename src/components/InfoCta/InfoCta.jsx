import CV from '../../assets/cv.pdf'

import './InfoCta.css'

export const InfoCta = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  )
}
