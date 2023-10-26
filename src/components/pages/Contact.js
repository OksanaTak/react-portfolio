import React, { useState } from 'react';

import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
let linkedin = '/assets/images/linkedin.jpeg';
let github = '/assets/images/github.png';
let email = '/assets/images/email.png';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return !emailRegex.test(email);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);

  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Check if the field is required and not empty
    if (value.trim() === '' && name !== 'message') {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (name === 'email' && validateEmail(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      // Clear the error if the input is valid
      setErrors({ ...errors, [name]: '' });
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="messageForm">
      <h2>Contact Us</h2>
      <p>
  Please, stay in touch!
</p>
      <form className="messageForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            value={formData.name}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <p></p>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            onChange={handleInputChange}
            value={formData.message}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div className='footer'> 
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/oksana-tatsyak-048b0727a/'>
        <img className='icons' src={process.env.PUBLIC_URL + linkedin} alt="linkedin" />
        </a>
    
    
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/OksanaTak'>
        <img className='icons' src={process.env.PUBLIC_URL + github} alt="github" />        </a>
     
        <a target='_blank' rel="noopener noreferrer" href='mailto:oksana.tatsyak@gmail.com'>
        <img className='icons' src={process.env.PUBLIC_URL + email} alt="email" />        </a>
        </div> 
        </div>

    
        
  );
}

export default ContactForm;




       
