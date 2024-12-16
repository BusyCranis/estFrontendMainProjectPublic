import React, { useState, useEffect } from "react";

const UserSignPage = ({ addUser }) => {
    const [userId, setuserId] = useState('');
    const [userPassword, setuserPassword] = useState('');

    const resetForm = () => {
        setuserId('');
        setuserPassword('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addUser({
            accountName: userId,
            password: userPassword,
            id: Date.now()
        });
        resetForm();
    };
    return (
        <form onSubmit={onSubmit}>
          이메일
            <input
                type="text"
                value={userId}
                placeholder="이름"
                onChange={e => setuserId(e.target.value)}
            >
            </input>
            <br />
            비밀번호
            <input
                type="text"
                value={userPassword}
                placeholder="번호"
                onChange={e => setuserPassword(e.target.value)}
            >
            </input>
            <br />
            <button type="submit"> 가입 </button>
        </form>
    );
};

export default UserSignPage;