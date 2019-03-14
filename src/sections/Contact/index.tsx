import React from "react";

import "./ContactStyles.css";

const Contact = () => (
  <article className="contact">
    <div className="form-wrapper">
      <h2>REACH OUT</h2>
      <form>
        <div className="client-info">
          <div className="client-info-col">
            <label htmlFor="frmNameA">Name</label>
            <input type="text" name="name" id="frmNameA" autoComplete="name" required placeholder="Bazos" list="names"/>
            <datalist>
              <option value="Darth Vader"/>
              <option value="Mr President"/>
            </datalist>
          </div>
          <div className="client-info-col">
            <label htmlFor="frmEmailA">Email</label>
            <input type="email" name="email" id="frmEmailA" autoComplete="email" required placeholder="name@example.com"/>
          </div>
        </div>
        <label htmlFor="content">Message</label>
        <textarea id="content" placeholder="You're hired"/>
        <input type="submit" name="submit" id="submit" className="submit-btn"/>
      </form>
    </div>
  </article>
);

export default Contact;