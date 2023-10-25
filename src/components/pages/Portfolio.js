import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
let Project1_img = '/assets/images/Job.BI.png'
let Project2_img ='/assets/images/payitforward.png'
let Project3_img = '/assets/images/travelgeek.png'
let Project4_img = '/assets/images/weatherdashboard.png'
let Project5_img = '/assets/images/dayscheduler.png' 
let Project6_img ='/assets/images/jsquiz.png'

export default function Portfolio () {
  return (
    <div>
      <h1 className='text-center'>Portfolio Page</h1>

      <div className='row'>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Jobi.BI App </h2>
          <p>
          A professional growth platform powered by Business Intelligence to set you on a career journey you have always dreamed of!
          </p>
          <a target='_blank' href='https://markthos.github.io/Job.BI/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Pay It Forward App</h2>
          <p>
          {' '} 
          Pay it Forward is a Social Network Platform that connects volunteers with service projects, cultivates acts of kindness, and builds caring communities. 
          {' '}
          </p>
          <a target='_blank' href='https://payitforward-app-46493cd9589e.herokuapp.com/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project2_img}></img>{' '}
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Travel Geek App </h2>
          <p>
            {' '}
         Travel Geek App makes planning itinerary, scheduling activities, tracking expanses and budgeting travels effortless and stress-free. {' '}
          </p>
          <a target='_blank' href='https://travelgeekalicia-bd545f74fdfc.herokuapp.com/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project3_img}></img>{' '}
          </a>
        </div>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Weather Dashboard App </h2>
          <p>
            {' '}
            Weather Dashboard App that tracks weather updates in real time.
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='https://oksanatak.github.io/weather-dashboard/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project4_img}></img>{' '}
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Work Day Scheduler App </h2>
          <p>
            {' '}
            Work Day Scheduler App helps to efficiently schedule and manage daily appointments and activities at work. {' '}
          </p>
          <a target='_blank' href='https://oksanatak.github.io/Work-Day-Scheduler/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project5_img}></img>{' '}
          </a>
        </div>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Java Script Quiz App </h2>
          <p>
            {' '}
            Java Script Quiz App is a fun educational tool to lear about Java Script. {' '}
          </p>
          <a target='_blank' href='https://oksanatak.github.io/JSquiz/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project6_img}></img>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}
