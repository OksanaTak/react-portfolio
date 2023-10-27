import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css'
let Project1_img = '/assets/images/Job.BI.png'
let Project2_img = '/assets/images/payitforward.png'
let Project3_img = '/assets/images/travelgeek.png'
let Project4_img = '/assets/images/weatherdashboard.png'
let Project5_img = '/assets/images/dayscheduler.png'
let Project6_img = '/assets/images/jsquiz.png'

function Job(props){
  console.log(props)
    return (
        <div className='text-center col-md-5'>
          <h2 className='text-center'>{props.title}</h2>
          <a target='_blank' href={props.github} rel="noreferrer">
            <h3>Github link</h3>
          </a>
          <p>
            {props.description}
          </p>
          <a target='_blank' href={props.liveLink} rel="noreferrer">
            {' '}
            <img src={process.env.PUBLIC_URL + props.img} alt="project_img"></img>{' '}
          </a>
        </div>
    );
}

export default Job;
