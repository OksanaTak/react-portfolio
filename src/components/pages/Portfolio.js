import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Job from "./Job"


let linkedin = '/assets/images/linkedin.jpeg'
let github = '/assets/images/github.png'
let email = '/assets/images/email.png'

const jobs = [
        {"title": "Jobi.BI App",
         "liveLink": "https://markthos.github.io/Job.BI/",
        "description": "A professional growth platform powered by Business Intelligence to set you on a career journey you have always dreamed of!",
        "github": "https://github.com/markthos/Job.BI",
        "img": "/assets/images/Job.BI.png"},

        {"title": "Pay It Forward App",
         "liveLink": "https://payitforward-app-46493cd9589e.herokuapp.com/",
        "description": "Pay it Forward is a Social Network Platform that connects volunteers with service projects, cultivates acts of kindness, and builds caring communities.",
        "github": "https://github.com/chandraucb/payitforward",
        "img": "/assets/images/payitforward.png"},

        {"title": "Travel Geek App",
        "liveLink": "https://travelgeekalicia-bd545f74fdfc.herokuapp.com/",
       "description": "Travel Geek App makes planning itinerary, scheduling activities, tracking expanses and budgeting travels effortless and stress-free.",
       "github": "https://github.com/SquirrelsAtARave/Travel-Geek",
       "img": "/assets/images/travelgeek.png"},

       {"title": "Weather Dashboard App",
        "liveLink": "https://oksanatak.github.io/weather-dashboard/",
       "description": "Weather Dashboard App that tracks weather updates in real time. nisi ac dui",
       "github": "https://github.com/OksanaTak/weather-dashboard/",
       "img": "/assets/images/weatherdashboard.png"},

       {"title": "Work Day Scheduler App",
        "liveLink": "https://oksanatak.github.io/Work-Day-Scheduler/",
       "description": "Work Day Scheduler App helps to efficiently schedule and manage daily appointments and activities at work.",
       "github": "https://github.com/OksanaTak/Work-Day-Scheduler",
       "img": "/assets/images/dayscheduler.png"},

       {"title": "Java Script Quiz App",
        "liveLink": "https://oksanatak.github.io/JSquiz/",
       "description": "Java Script Quiz App is a fun educational tool to lear about JavaScript.",
       "github": "https://github.com/OksanaTak/JSquiz",
       "img": "/assets/images/jsquiz.png"}
]

export default function Portfolio () {
  return (
    <div className='flex-container'>
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
