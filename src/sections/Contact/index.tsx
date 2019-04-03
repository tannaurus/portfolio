import React from "react";

import "./ContactStyles.css";

class Contact extends React.Component { 

  onSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    
  }
  
  render() {
    
    return (
      <article id="contact" className="contact">
        <div className="form-wrapper">
          <div className="reach-out">
            <h2>HOW CAN I HELP?</h2>
            <p>Thanks for visiting!<br/>Do you have a project in need of a developer? Want to collaborate? Let's work together!<br/>Give me an idea of what you're looking for below.</p>
          </div>      
          <form>
            <fieldset>
              <legend>Contact me</legend>
              <div className="form-split">
                <div className="info-col">
                  <div className="input-spacer">
                    <label htmlFor="frmNameA">Name (required)</label>
                    <input required type="text" name="name" id="frmNameA" autoComplete="name" placeholder="Bazos" list="names"/>
                    <datalist>
                      <option value="Darth Vader"/>
                      <option value="Mr President"/>
                    </datalist>
                  </div>
                </div>
                <div className="info-col">
                  <div className="input-spacer">
                    <label htmlFor="frmEmailA">Email (required)</label>
                    <input required type="email" name="email" id="frmEmailA" autoComplete="email" placeholder="name@example.com"/>
                  </div>
                </div>
              </div>
              <div className="input-spacer">
                <label>Tell me about your project (required)</label>
                <textarea required id="about-project" placeholder="The next big thing"/>
              </div>
              <div className="input-spacer">
                <label htmlFor="content">Anything else?</label>
                <textarea id="content" placeholder="..."/>
              </div>
              <input onClick={(event) => this.onSubmit(event)} type="submit" name="submit" id="submit" className="submit-btn"/>
            </fieldset>
          </form>
        </div>
      </article>
    )
  };
};

export default Contact;