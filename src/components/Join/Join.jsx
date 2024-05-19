import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current['user_email'].value.trim();

    if (!email) {
      setError('Please enter email address.');
      return;
    }

    emailjs
      .sendForm('service_b3wfubc', 'template_86m2aaq', form.current, {
        publicKey: 'Zhc5aWbnOfCg-OZLA',
      })
      .then(
        () => {
          setMessage('Email sent successfully!');
          setError('');
          form.current.reset();
        },
        (error) => {
          setMessage('');
          setError('Failed to send email. Please try again later.');
          console.error('Email sending failed:', error);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your Email address" />
          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
