import React, { useState,useEffect } from "react";
import ReactCodeInput from "react-code-input";

const CORRECT_PIN_CODE = "111222";

function  PinCode({publicId, firstStep})  {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const checkPinCode = () => {

    var dataBody  = { code:pinCode, publicId:publicId };
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBody)
    };

    fetch(`https://therevolutiontoken.com/backend/api/check-code`, requestOptions)
      .then((response) => response.json())
      .then(response => {

        console.log('response',response);
        if(response) {
          const isPinCodeValid = response.request;

          setBtnIsPressed(true);
          setIsPinCodeValid(isPinCodeValid);
          if (!isPinCodeValid)
          {setPinCode("");}
          else {
            firstStep();
          }

        }
      }
      )
      .catch(rejected => {
      console.log('error',rejected);
      });


  };

  useEffect(() => {
    if(pinCode.length == 6) {
      checkPinCode();
    }
}, [pinCode]);

  const resendPinCode = () => {

    var dataBody  = { publicId:publicId };
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBody)
    };

    fetch(`https://therevolutiontoken.com/backend/api/resend-code`, requestOptions)
      .then((response) => response.json())
      .then(response => {

        console.log('response',response);
        if(response) {

        }
      }
      )
      .catch(rejected => {
      console.log('error',rejected);
      });


  };

  const handlePinChange = pinCode => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
  };

  return (
    <>
      <p className="title">verification</p>
      <p className="subtitle">please check your email</p>
      <ReactCodeInput
        id="pinCode"
        type="number"
        isValid={isPinCodeValid}
        fields={6}
        onChange={handlePinChange}
        value={pinCode}
      />
    <br/>
    {/*
    <br/>
      <button className="submit mt-3 mb-2" onClick={checkPinCode}>Check pin</button>
      */}
    <br/>
      <label className="resend" onClick={resendPinCode}><b>Resend</b></label>
    </>
  );
}

export default PinCode;

