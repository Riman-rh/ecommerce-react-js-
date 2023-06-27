import React from 'react'
import'./Contact.css'
const Contact = () => {
  return (
    <div className='contact_wrapper'>
        <div className='contact'>
            <form className='contact_form'>
                <h3>Contact Us</h3>
                <div className='contact_input'>
                   <input type='text' placeholder='Your full name'/> 
                </div>
                <div className='contact_input'>
                    <input type='email' placeholder='Your email'/>
                </div>
                <div className='contact_input'>
                    <textarea placeholder='Your message'/>
                </div>
                
                <button className='contact_btn' type='submit'>Send Message</button>
            </form>
            <div className='contact_image'>
                <img src={require('../../assets/images/contact.jpg')}/>
            </div>
        </div>

    </div>
  )
}

export default Contact