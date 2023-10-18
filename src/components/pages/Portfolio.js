import React from 'react'
import './portfolio.css'
let Project1_img = '/assets/images/Job.BI.png'

export default function Portfolio () {
  return (
    <div>
      <h1 className='text-center'>Portfolio Page</h1>

      <div className='row'>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Project 1 </h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='#'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Project 2 </h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='#'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Project 3 </h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='#'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Project 4 </h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='https://markthos.github.io/Job.BI/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Project 5 </h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='#'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
        <div className='text-center col-md-5'>
          <h2 className='text-center'> Project 6 </h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui{' '}
          </p>
          <a target='_blank' href='https://markthos.github.io/Job.BI/'>
            {' '}
            <img src={process.env.PUBLIC_URL + Project1_img}></img>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}
