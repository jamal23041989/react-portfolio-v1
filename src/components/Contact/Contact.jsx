import { RiMailOpenLine, RiWhatsappLine, RiTelegramLine } from 'react-icons/ri'
import './Contact.css'

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailOpenLine className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jamalkurbanov23041989@gmail.com</h5>
            <a href="mailto:jamalkurbanov23041989@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>+79257317208</h5>
            <a href="">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+79257317208</h5>
            <a href="https://api.whatsapp.com/send?phone=79257317208">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}
