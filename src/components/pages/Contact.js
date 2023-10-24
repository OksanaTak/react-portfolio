import React from 'react'
import './contact.css'

let linkedin = '/assets/images/linkedin.jpeg';
let github = '/assets/images/github.png';
let email = '/assets/images/email.png';

export default function Contact () {
  return (
    <div className='text-center'>
      <h1>Contact Page</h1>
<p>
  Please, stay in touch! Contact me!
</p>
    
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/oksana-tatsyak-048b0727a/'>
        <img className='icons' src={process.env.PUBLIC_URL + linkedin} alt="linkedin" />
        </a>
    
    
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/OksanaTak'>
        <img className='icons' src={process.env.PUBLIC_URL + github} alt="github" />        </a>
     
        <a target='_blank' rel="noopener noreferrer" href='mailto:oksana.tatsyak@gmail.com'>
        <img className='icons' src={process.env.PUBLIC_URL + email} alt="email" />        </a>
  
    </div>
  )
}
