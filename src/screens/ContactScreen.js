import React from "react";
import "./styles/ContactScreen.css";
import InstagramIcon from "@material-ui/icons/Instagram";

import emailjs from "emailjs-com";
import Footer from "../components/Footer";

function ContactScreen() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ewvgec",
        "template_2dy6tvf",
        e.target,
        "user_CubZHTEchnxvU69WJdxpV"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();

    alert("Your message has been successfully sent to Carlos Paz.");
  }

  return (
    <div className="contactScreen">
      <h1>Contact Us</h1>
      <p className="contactScreen__p">
        Please contact us with any questions or concerns. If the reason you are
        contacting us pertains to an order, please include your order reference
        code in your message. Thank you!
      </p>
      <form onSubmit={sendEmail}>
        <div className="form__element">
          <label htmlFor="name">Name</label>
          <input
            className="inputName"
            type="text"
            placeholder="Enter your name here"
            name="from_name"
            required
          />
        </div>
        <div className="form__element">
          <label htmlFor="email">Email</label>
          <input
            className="inputEmail"
            type="email"
            placeholder="Enter your email address here"
            name="email"
            required
          />
        </div>
        <div className="form__element">
          <label htmlFor="message">Message</label>
          <textarea
            className="inputMessage"
            type="text"
            placeholder="Enter your message here"
            name="message"
            cols="30"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="form__submitButton"
          value="Send Message"
        >
          Submit
        </button>
      </form>

      <div className="contactScreen__socials">
        <p>Follow us on Instagram: </p>
        <a href="https://www.instagram.com/lonelywrl.d/" target="_blank">
          <InstagramIcon className="contactScreen__IGIcon" />
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default ContactScreen;
