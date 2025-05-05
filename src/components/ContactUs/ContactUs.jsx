import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import classes from './ContactUs.module.css';
import Button from '../common/Button/Button';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xkgnovre"); 
  if (state.succeeded) {
    return <p className={classes.successMessage}>Thanks for reaching out!</p>;
  }

  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <div className={classes.card2}>
          <h1 className={classes.heading}>Contact Us</h1>
          <form onSubmit={handleSubmit} className={classes.userData}>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Name<span className={classes.mandatory}>*</span>
              </label>
              <input 
                id="name" 
                type="text" 
                name="name"
                className={classes.input} 
                required 
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Email<span className={classes.mandatory}>*</span>
              </label>
              <input 
                id="email" 
                type="email" 
                name="email" // Check that 'email' matches the expected field name
                className={classes.input} 
                required 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Message<span className={classes.mandatory}>*</span>
              </label>
              <textarea 
                id="message" 
                name="message" // Check that 'message' matches the expected field name
                className={classes.message} 
                placeholder="Enter text here" 
                required 
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className={classes.button}>
              <Button label="Send" disabled={state.submitting} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
