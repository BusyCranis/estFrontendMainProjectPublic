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

      <h2 className={styles["login-title"]}>이메일로 로그인</h2>
        <p>다시 꿈꾸러 오셔서 기뻐요!</p>
        <LoginForm
          onSubmit={handleEmailLogin}
          className={styles["login-form"]}
        >
          <label className={styles["id-label"]}>
            이메일
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className={styles["pw-label"]}>
            비밀번호
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <p role="alert" className={styles["error-message"]}>
            {error && "이메일 또는 비밀번호가 일치하지 않습니다"}
          </p>
          <Button
            type="submit"
            highlight={true}
            className={styles["login-button"]}
          >
            로그인
          </Button>
          <div className={styles["google-login"]}>
            <p>다른 방법으로 로그인하기</p>
            <button type="button" onClick={handleGoogleLogin}>
              <img
                src="/images/google-logo.svg"
                width={40}
                height={40}
                alt="google 로그인"
              />
            </button>
          </div>
          <div className={styles["join-button"]}>
            <span>회원이 아니신가요?</span>
            <Button type="button" onClick={() => setShowSignupForm(true)}>
              가입하기
            </Button>
          </div>
        </LoginForm>












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
