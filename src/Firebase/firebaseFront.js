import React, { useState}  from 'react';
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { auth } from "./firebaseconfig";

export default function Login() {

  const [number, setEmail] = useState("");
  const [verify, setverify] = useState("");


  const [converify, setconverify] = useState("");

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const submit=async(e)=>{
    //const [user, setUser] = useState({});
    e.preventDefault();
    console.log(number);
    //setError("");
    if (number === "" || number === undefined)
      return alert("Please enter a valid phone number!");
    try {
      const response=await setUpRecaptha(number);
      //console.log("I am response",response);
      setconverify(response);
      setverify(true);
      alert("Google OTP has Been Sent");
      //setResult(response);
      //setFlag(true);
    } catch (err) {
      //setError(err.message);
      alert(err)
    }
   
   
    
}


const verification=async(e)=>{
    e.preventDefault();
    if (verify === "" || verify === null) return;
    try {
      await converify.confirm(verify);

      alert("Your Number Has Been Verified. This Project is made my Abhishek KS")
      window.location.href="https://www.linkedin.com/in/abhidcoder/" 

    } catch (err) {
      alert("Sorry The OTP Entered By You is Wrong Please Try again")
      
    }
    }


  return (
   <> <h1 className="text-center" style={{ fontSize: '4.5rem',color:'red', marginLeft : 0, marginTop : 18,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}>Google Authentication</h1>
   <h4 className="text-center" style={{ fontSize: '2.5rem',color:'crimsonred', marginLeft : 0, marginTop : 18,  display: "block", width: "100%", height: "40%",background:"lightblue",fontWeight:90}}>Made By Abhishek Kumar Singh</h4>
    <div className="text text-center" style={{marginTop:100}} >
    <ul>
     <label className="text-center" style={{marginRight:6,'font-size':"1.2rem",color:'red'}}>Enter Your Mobile Number </label>
     <br></br>
     <br></br>
     <div>
          <PhoneInput
           defaultCountry="IN"
            type="phone"
            value={number}
            onChange={setEmail}
            className="text-center"
          />
          </div>
          <br></br>
          </ul>
          <br></br>
          <ul>
          
      <div id="recaptcha-container" style={{marginLeft:"40%",marginRight:"50%"}}/>
       <br></br>
       <button className="btn btn-success text-center" onClick={submit}>
          Get OTP
        </button>
        </ul>
        <div style={{backgroundColor:"black",height:2}}></div>
  <br></br>
  <br></br> 
    <lable style={{marginRight:6,marginLeft:20,'font-size':"1.2rem",color:'purple'}}>Enter Your OTP </lable>
    <input 
        style={{marginLeft:50}}
        type="text"
        value={verify}
        onChange={(e) => setverify(e.target.value)}
/><button className="btn btn-dark" onClick={verification} style={{marginLeft:20}}>
          Verify
        </button>
        
    </div>
    </>

  );

}
