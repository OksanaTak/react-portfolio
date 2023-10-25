import React from 'react'
import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css';
let myPic = '/assets/images/Oksana-Portrait.jpeg'
export default function About () {
  return (
   
    <div className='div-wrapper'> 
      <h1 className='text-center'> Oksana Tatsyak</h1>
    <div className='div-wrapper'>
      <div className='image'> 
      <img
        className='float-left'
        src={process.env.PUBLIC_URL + myPic}
        alt='myPicture'/> 
      </div>
      <p className='float-left'>
        An educator by vocation and training, I have a vast teaching experience
        that includes teaching college and highschool students in the United
        States, Canada, and my native Ukraine.
      </p>
      <p className='float-left'>
        While working as a Special Education teacher with the California School
        District, I had the opportunity to teach students with wide range of
        needs and abilities. This experience inspired me to develop Software
        programs that help these differently-abled students learn, develop
        critical life skills and succeed.
      </p>
      <p className='float-left'>
        The idea of helping Special Needs students has brought me to the Full
        Stack Web Development BootCamp offered via Berkley Extension School. The
        Bootcamp equipped me with the necessary skills in front and backend web
        development to build learning and communication apps for my students to
        use and enhance the quality of their life.
      </p>
    </div>
    </div>
  )
}
