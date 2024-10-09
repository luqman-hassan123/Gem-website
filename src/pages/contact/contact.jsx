import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore nostrum repellendus nam praesentium necessitatibus,
        quaerat ullam. Consequuntur est, quod susc
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:luqman1isb@gmail.com" target ="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="https://m.me/ernest_achiever" target ="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+92" target ="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>

          </div>

        </div>
      </section>
      
    </>
  )
}

export default contact
