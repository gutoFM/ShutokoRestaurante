import {} from 'react'
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/Ai';
import './Footer.css'


function Footer (){
  return(
    <>
      <div className='footBody'>
        <section >
        <div className="footLinks">
          <a href="https://www.instagram.com/"><AiOutlineInstagram/> Instagram</a>
          <a href="https://www.facebook.com/?locale=pt_BR"><AiFillFacebook/> Facebook</a>
          <a href="https://www.linkedin.com/"><AiFillLinkedin/> Linkedin</a>
          <a href="https://www.google.com/intl/pt-BR/gmail/about/"><AiOutlineMail/>Email</a>
        </div>
        
        <h3>@2023- Direitos reservados a Shutoko</h3>
      
        </section>
      </div>
    </>
  )
}
export default Footer