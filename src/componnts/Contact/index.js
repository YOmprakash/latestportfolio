import React, { useState } from 'react';

import { FaUser, FaEnvelope, FaPencilAlt } from 'react-icons/fa';
import './index.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, e.g., send data to an API
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Description:', description);
    // reset form fields
    setName('');
    setSubject('');
    setDescription('');
  };

  

  return (
    <>
 <section id='contact' className="contact-section">
      <h2>Get in touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser /> {/* user icon */}
          <input
            type="text"
            placeholder='Name'
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope /> {/* envelope icon */}
          <input
            type="text"
            placeholder='Subject'
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <FaPencilAlt /> {/* pencil icon */}
          <textarea
            placeholder='Description'
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <button type="submit" className='button'>Send Message</button>
      </form>
    </section>
    </>
  );
};

export default Contact;
