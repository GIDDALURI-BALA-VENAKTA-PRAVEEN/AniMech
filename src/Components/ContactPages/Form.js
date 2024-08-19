import './Form.css';

import React from 'react';

export const Form = () => {
  return (
    <div className='bgs'>
      <form>
        <div className="grid-containers">
          
          <div className="grid-item">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" className="full-width" />
            </div>
            <div className='grid-item'>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" className="full-width" />
          </div>

         
          <div className="grid-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" className="full-width" />
          </div>

          
          <div className="grid-item">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" className="full-width"></textarea>
          </div>
         </div>
        <button type="submit" className="full-widths">Register</button>
          
      </form>
     
    </div>
  );
};
