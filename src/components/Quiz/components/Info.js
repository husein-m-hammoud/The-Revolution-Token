// Libraries
import React, { useState } from 'react';


function Info({startQuiz}) {

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
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
  const isFirstnameValid = ( firstname !== "");
  const isLastnameValid = ( lastname !== "");

  if (!ValidateEmail(email)) {
    errors.push("Email is not valid, please try again.");
  }
  if (email === "") {
    errors.push("Email field is empty, please try again.")
  }
  if (phone === "") {
    //errors.push("Telegram link field is empty, please try again.")
  }
  if (!isFirstnameValid) {

    errors.push("Firstname is empty, please try again.");
  }
  if (!isLastnameValid) {

    errors.push("Lastname is empty, please try again.");
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
        body: JSON.stringify({ email:email, phone:phone, firstname:firstname,lastname:lastname })
    };
    startQuiz(requestOptions);

  }

  /**
   *
   */
  return (
    <div>
    <div className="p-5">
      <p className="tokenomics-title">fill your Info</p>
      <p className="info_subtitle" >You can only take the quiz once<br/> and must be finished within three minutes. <br/>The timer starts once the verification code we have <br/>sent to your email is entered in the required field.
    </p>

    <label class="custom-field two">
      <input type="text" placeholder="&nbsp;" onChange  ={e => setFirstname( e.target.value)} value={firstname}/>
      <span class="placeholder">Enter Your Firstname</span>
    </label>
    <br/>
    <label class="custom-field two">
      <input type="text" placeholder="&nbsp;" onChange  ={e => setLastname( e.target.value)} value={lastname}/>
      <span class="placeholder">Enter Your Lastname</span>
    </label>
    <br/>
    <label class="custom-field two">
      <input type="email" placeholder="&nbsp;" onChange ={e => setEmail(e.target.value)} value={email}/>
      <span class="placeholder">Enter Your Email</span>
    </label>
    <br/>
    <label class="custom-field two">
      <input type="text" placeholder="&nbsp;" onChange = {e => setPhone(e.target.value)}  value={phone}/>
      <span class="placeholder">Enter Your Telegram Link</span>
    </label>
    </div>
    <div>
    {showErrors ? errorMessages.map((item, index) => {
        return <ul className="error"key={index}>{item}</ul>;}) : null
    }
    </div>
    {sucsess && <p className="sucsess">{sucsess}</p>}
      <div className="submit mb-3" onClick = {() => formValidation()}> SUBMIT</div>
    </div>
  );
}
export default Info;
