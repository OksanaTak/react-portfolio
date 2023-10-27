import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Job from "./Job"

let Project1_img = '/assets/images/Job.BI.png'
let Project2_img = '/assets/images/payitforward.png'
let Project3_img = '/assets/images/travelgeek.png'
let Project4_img = '/assets/images/weatherdashboard.png'
let Project5_img = '/assets/images/dayscheduler.png'
let Project6_img = '/assets/images/jsquiz.png'
let linkedin = '/assets/images/linkedin.jpeg'
let github = '/assets/images/github.png'
let email = '/assets/images/email.png'

const jobs = [
        {"title": "Jobi.BI App",
         "liveLink": "https://markthos.github.io/Job.BI/",
        "description": "A professional growth platform powered by Business Intelligence to set you on a career journey you have always dreamed of!",
        "github": "https://github.com/markthos/Job.BI",
        "img": "/assets/images/Job.BI.png"}
]

export default function Portfolio () {
  return (
    <div>
      <h1 className='text-center'>Portfolio Page</h1>

      {jobs.map((job, index) => (
        <Job
          key={index}
          title={job.title}
          liveLink={job.liveLink}
          img={job.img}
          description={job.description}
          github={job.github}
        />
      ))}
      <div>
        <p></p>
      </div>

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
