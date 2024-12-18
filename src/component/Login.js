import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const [brain, setbrain] = useState(props.brain);
  const [accountName, setloginuserId] = useState("");
  const [password, setloginuserPassword] = useState("");
  const [logineduserId, setlogineduserId] = useState({});

  const addUser = () => {
    var usertoadd = { ...logineduserId };
    usertoadd.accountName = accountName;
    usertoadd.password = password;
    usertoadd.id = Date.now();

    setlogineduserId(usertoadd);
  };

  const [islogined, setislogined] = useState(false);

  function onLogin(logindataobj) {
    var usera = brain.filter(
      (usera) => usera.accountName === logindataobj.accountName
    )[0];
    console.log(logindataobj);
    console.log(usera);

    if (usera === null) alert("없습니다");
    else {
      if (usera.password !== logindataobj.password) alert("불일치");
      else {
        var loginprocess = { ...islogined };
        loginprocess = true;
        setislogined(loginprocess);
        alert("완료");
      }
    }
    console.log(islogined);
  }

  return (
    <div>

















      {/* <br></br>
      <br></br>
      이메일
      <input
        type="text"
        value={accountName}
        placeholder="이름"
        onChange={(e) => setloginuserId(e.target.value)}
      ></input>
      <br />
      비밀번호
      <input
        type="text"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setloginuserPassword(e.target.value)}
      ></input>
      <br />
      <button
        onClick={() =>
          onLogin({
            accountName: accountName,
            password: password,
          })
        }
      >
        {" "}
        로그인{" "}
      </button>
      {logineduserId.accountName}
      {logineduserId.password}
      <Link to="/usersign">회원 가입</Link>
      <div></div> */}
    </div>
  );
};

export default Login;
