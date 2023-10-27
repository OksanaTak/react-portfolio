import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
let linkedin = '/assets/images/linkedin.jpeg'
let github = '/assets/images/github.png'
let email = '/assets/images/email.png'


export default function Resume () {
  return (
    <div  backgound-color='violet'>
      <h1 className='text-center'> Resume Page </h1>
      <h2> Experience: </h2>
      
      <p>
        <strong> Please, find my Resume
        <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/images/Oksana_Resume.pdf"}>  Here</a></strong>
      </p>
      <h2 className='skillsList fw-bold'> Skills </h2>
      <ul>
        <li>  HTML</li>
        <li>  CSS</li>
        <li>  Java Script</li>
        <li>  Web APIs</li>
        <li>  Object-Oriented Programming</li>
        <li>  Express.js</li>
        <li>  SQL, MySQL</li>
        <li>  Object-Relational Mapping</li>
        <li>  NoSQL</li>
        <li>  MongoDB</li>
        <li>  MERN</li>
        <li>  React</li>
      </ul>

      <div className='footer'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/oksana-tatsyak-048b0727a/'
        >
          <img
            className='icons'
            src={process.env.PUBLIC_URL + linkedin}
            alt='linkedin'
          />
        </a>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/OksanaTak'
        >
          <img
            className='icons'
            src={process.env.PUBLIC_URL + github}
            alt='github'
          />{' '}
        </a>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:oksana.tatsyak@gmail.com'
        >
          <img
            className='icons'
            src={process.env.PUBLIC_URL + email}
            alt='email'
          />{' '}
        </a>
      </div>
    </div>
  )
}
