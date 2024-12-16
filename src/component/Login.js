import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Routes, Route, useNavigate, Link } from "react-router-dom";



const Login = (props) => {
  const [brain, setbrain] = useState(props.brain)

  const [accountName, setloginuserId] = useState("");
  const [password, setloginuserPassword] = useState("");

  // const resetForm = () => {
  //   setloginuserId('');
  //   setloginuserPassword('');
  // };

  const [logineduserId, setlogineduserId] = useState({});

  const addUser = () => {
    var usertoadd = { ...logineduserId }
    usertoadd.accountName = accountName
    usertoadd.password = password
    usertoadd.id = Date.now()

    setlogineduserId(usertoadd);

  };

  const [islogined, setislogined] = useState(false)

  function onLogin(logindataobj) {
    // addUser();
    // var selecteduser = null

    var usera = brain.filter((usera) => usera.accountName === logindataobj.accountName)[0]
    console.log(logindataobj)
    console.log(usera)

    if (usera === null) alert("없습니다")
    else {
      if (usera.password !== logindataobj.password)
        alert("불일치")

      else {
        var loginprocess = { ...islogined }
        loginprocess = true
        setislogined(loginprocess)
        alert("완료")
      };
    }
    console.log(islogined)

  }

  // function loginaction(accountName) {

  //   var usera = brain.filter((usera) => usera.accountName === logineduserId.accountName)[0]
  //   console.log(logineduserId)
  //   console.log(usera)

  //   if (usera === null) alert("없습니다")
  //   else {
  //     if (usera.password !== logineduserId.password)
  //       alert("불일치")

  //     else {
  //       var loginprocess = { ...islogined }
  //       loginprocess = true
  //       setislogined(loginprocess)
  //       alert("완료")
  //     };
  //   }
  // }

  return <div>

    <br></br><br></br>

    이메일
    <input
      type="text"
      value={accountName}
      placeholder="이름"
      onChange={e => setloginuserId(e.target.value)}
    >
    </input>
    <br />
    비밀번호
    <input
      type="text"
      value={password}
      placeholder="비밀번호"
      onChange={e => setloginuserPassword(e.target.value)}
    >
    </input>
    <br />

    <button onClick={() => onLogin({
      accountName: accountName,
      password: password
    })}> 로그인 </button>



    {/* {brain.map(function (alist) {
      return (
        <div>

          {alist.accountName}
          {alist.password}
          {alist.id}

        </div>)
    })} */}

    {/* <button
  onClick={(usera) => loginaction(usera.accountName)}
> 로그인 완료하기 </button> */}

    {logineduserId.accountName}

    {logineduserId.password}

    <Link to="/usersign">회원 가입</Link>

    <div>    
      {/* <Link to="/usedrecordlist" >  이용 내역 조회하기   </Link>      */}
    </div>



  </div>;
};



export default Login;