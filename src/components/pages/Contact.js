import React from 'react'
let linkedin = '/assets/images/linkedin.jpeg';
let github = '/assets/images/linkedin.jpeg';
let email = '/assets/images/linkedin.jpeg';

export default function Contact () {
  return (
    <div>
      <h1>Contact Page</h1>

    
        <a target='_blank' href='https://www.linkedin.com/in/oksana-tatsyak-048b0727a/'>
        <img height="10px" width= "10px" src={process.env.PUBLIC_URL + linkedin} alt="linkedin" />
        </a>
    
    
        <a target='_blank' href='https://github.com/OksanaTak'>
        <img height="10px" width= "10px" src={process.env.PUBLIC_URL + github} alt="github" />        </a>
     
        <a target='_blank' href='mailto:oksana.tatsyak@gmail.com'>
        <img height="10px" width= "10px" src={process.env.PUBLIC_URL + email} alt="email" />        </a>
  
    </div>
  )
}
