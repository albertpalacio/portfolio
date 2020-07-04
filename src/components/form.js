import React from "react";
import "../styles/form.css";

const Form = () => {
  return (
    <div className="form-div">
      <hr />

      <h1>Send Me A Message</h1>
      <form class="cf" action="https://submit-form.com/AX04vYxzcs5pdDYkLg2L0">
        <div class="half left cf">
          <input type="text" className="input-form" placeholder="Name" />
          <input
            type="email"
            className="input-form"
            placeholder="Email address"
          />
          <input type="text" className="input-form" placeholder="Subject" />
        </div>
        <div class="half right cf">
          <textarea
            name="message"
            type="text"
            className="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
};

export default Form;
