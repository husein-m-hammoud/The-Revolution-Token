// Libraries
import React, { useState } from 'react';

import './ContactUs.scss';

function ContactUs() {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sucsess, setSucsess] = useState("");

  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  //validate email input
function ValidateEmail(email) {
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {return true;}
return false;
}

function formValidation() {
  let errors = [];
  setErrorMessages([]);
  setSucsess('');
  const isMessageValid = ( message !== "");

  if (!ValidateEmail(email)) {
    errors.push("Email is not valid, please try again.");
  }
  if (email === "") {
    errors.push("Email field is empty, please try again.")
  }
  if (phone === "") {
    errors.push("Phone field is empty, please try again.")
  }
  console.log(phone);
  if (!isMessageValid) {
    errors.push("Message is not valid, please try again.");
  }

  if (errors.length > 0) {
    setShowErrors({ showErrors: true });
    setErrorMessages(errors);
  }
  else {
    setShowErrors({ showErrors: false });
    sendEmail();
  }
}

  function sendEmail() {
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:email, phone:phone, message:message })
    };
    fetch(`https://therevolutiontoken.com/backend/api/contact-us`,requestOptions)
      .then((response) => response.json())
      .then(data => {

        console.log('response',data);
        setEmail("");
        setPhone("");
        setMessage("");
        if(data) {
        setSucsess('Thank you! Your message has been sent.');
        }
        else{
          let errors =[];
          errors.push("Something went wrong please try again later.");

          setShowErrors({ showErrors: true });
          setErrorMessages(errors);
        }
      }
      );

  }

  /**
   *
   */
  return (
    <div className="tokenomics contact_us_container mt-5" id="ContactUs">
      <div className="tokenomics-relative">
      <div className="tokenomics-block">
    <div className="p-5">
      <p className="tokenomics-title">Contact Us</p>
    <label class="custom-field two">
      <input type="email" placeholder="&nbsp;" onChange ={e => setEmail(e.target.value)} value={email}/>
      <span class="placeholder">Enter Your Email</span>
    </label>
    <br/>
    <label class="custom-field two">
      <input type="number" placeholder="&nbsp;" onChange = {e => setPhone(e.target.value)}  value={phone}/>
      <span class="placeholder">Enter Your Phone</span>
    </label>
    <br/>
    <label class="custom-field two">
      <input type="text" placeholder="&nbsp;" onChange  ={e => setMessage( e.target.value)} value={message}/>
      <span class="placeholder">Enter Your Message</span>
    </label>
    </div>
    </div>
    <div>
    {showErrors ? errorMessages.map((item, index) => {
        return <ul className="error"key={index}>{item}</ul>;}) : null
    }
    </div>
    {sucsess && <p className="sucsess">{sucsess}</p>}
      <div className="submit mb-3" onClick = {() => formValidation()}> SUBMIT</div>
    </div>
    </div>
  );
}
export default ContactUs;
