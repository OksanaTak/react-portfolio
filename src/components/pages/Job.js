import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Job(props){
  
    return (
      <div  className='main'>
        <div>
       
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
          <p></p>
        </div>
        </div>
    );
}

export default Job;
