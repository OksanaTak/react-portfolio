import React from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Resume () {
  return (
    <div  backgound-color='violet'>
      <h1 className='text-center'> Resume Page </h1>
      <h2 className='skillsList fw-bold'> Skills </h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>Web APIs</li>
        <li>Server Side IPAs</li>
        <li>Object-Oriented Programming</li>
        <li>Express.js</li>
        <li>SQL, MySQL</li>
        <li>Object-Relational Mapping</li>
        <li>Model-View-Controller (MVC)</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>MERN</li>
        <li>React</li>
      </ul>
      <h2> Experience </h2>
      
      <p>
        <strong> Please, find my Resume
        <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/images/Oksana_Resume.pdf"}>  Here</a></strong>
      </p>
    </div>
  )
}
