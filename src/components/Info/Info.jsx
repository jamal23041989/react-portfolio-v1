import { InfoCta, InfoHeaderSocials } from '../index'
import './Info.css'

export const Info = () => {
  return (
    <section>
      <div className="container info__container">
        <h5>Hello I'm</h5>
        <h1>Jamal Kurbanov</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <InfoCta />
        <InfoHeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </section>
  )
}
