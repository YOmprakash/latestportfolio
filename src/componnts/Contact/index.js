import React, { useState ,useRef} from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
 


  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs
    .sendForm('service_qp97t0w', 'template_eobtvhw', form.current, {
      publicKey: 'rTfcb-OLlJEQ3giOt',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Your message has been sent successfully!');
        setName('');
        setSubject('');
        setDescription('');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again later.');
      },
    );
  };

  return (
    <div id='contact' className='contact-container'>
      <h1>Get in touch</h1>
     
     
      <form onSubmit={handleSubmit} ref={form} className='contact-form'>
        <div className='form-group'>
          <input
            type="text"
            placeholder='Name'
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='form-input'
          />
        </div>
        <input
          type="text"
          placeholder='Subject'
          name="user_subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className='form-input'
        />
        <textarea
          placeholder='Description'
          name="message" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={6}
          style={{ resize: 'none' }}
          className='form-input'
        ></textarea>
        <button type="submit" className='button'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
