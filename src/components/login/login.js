import React, { useState, useEffect } from 'react'
import './login.css'
// import { useNavigate  } from "react-router-dom";


const Login = () => {


  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // let navigate  = useNavigate ();

  // useEffect(() => {
  //  if(localStorage.getItem('user-info')){
  //   navigate.push("/")
  //  }
   
  // }, [])
  
 function login(){

  let items = {email,password}

  let fetchApi = fetch(`https://retoolapi.dev/B13laa/getusers?user_id=${email}&password=${password}`, {
         method: "POST",
         body: JSON.stringify(items),
         headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    }
})
 .then(res => res.json())
 .then((data )=> {
  localStorage.setItem(JSON.stringify(data))

 } );

 }

  return (
    <>
      <div className='wrapper'>
        <div className='formCard'>
          <div className='formCardContainer'>
            <h2 className='mb-4'>User Login</h2>
              <div className="form-group">
                <label className='mb-3'>Email</label>
                <input type="text" className="form-control mb-4" placeholder="Enter your Email"
                onChange={(e)=> setEmail(e.target.value)}
                />
                <label className='mb-3'>Password</label>
                <input type="text" className="form-control mb-4" placeholder="Enter your Password"
                 onChange={(e)=> setPassword(e.target.value)}
                  />
                <button className='btn submitBtn mt-1'
                onClick={login}
                >Submit</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login