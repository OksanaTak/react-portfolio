import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Resume () {
  return (
    <div  backgound-color='violet'>
      <h1 className='text-center'>Resume Page</h1>
      <h2> Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
      </ul>
      <h2> Experience </h2>
      
      <p>
        <strong> Please, find my Resume
        <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/images/Oksana_Resume.pdf"}>  Here</a></strong>
      </p>
    </div>
  )
}