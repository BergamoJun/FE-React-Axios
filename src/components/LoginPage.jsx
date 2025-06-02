  import React, { useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import "../styles/LoginPage.css";

  function LoginForm() {
    function setEmail(val){
      localStorage.setItem("email",val);
    }
    function setPassword(val){
      localStorage.setItem("password",val);
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      try{
        const data = await axios.post(
          "https://reqres.in/api/login",{
          email: email,
          password: pwd
        },{
          headers: {
            "x-api-key": "reqres-free-v1"
          }
        }
      )
      }catch(e){
        console.log(e);
      }
    };
    return (
      <form onSubmit={handleLogin} className="login-container">
        <h2>🔐 로그인</h2>
        <input type="email" placeholder="이메일" required onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="비밀번호" required onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">로그인</button>
      </form>
    );
  }

  export default LoginForm;
