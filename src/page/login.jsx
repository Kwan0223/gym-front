import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserProvider';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        pwd: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    };

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/login', userInfo, {
                headers : {
                    "Content-Type" : "application/json",
                },
            });

            console.log("TEST RES : ", res);
            console.log("TEST UserInfo : " , userInfo);

            if(res.data === 'login Success') {
                console.log("TEST RES : ", res);

                // 서버에서 사용자 데이터를 가져옵니다.
                // const userDataResponse = await axios.get(`http://localhost:8080/getUser/${userInfo.email}`);  // 서버의 실제 API 엔드포인트로 교체해야 합니다.
                // setUser(userDataResponse.data);  // context에 사용자 데이터를 설정합니다.
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email"> Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        className="form-input"
                        value={userInfo.pwd}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="login-button">Log in</button>
            </form>
        </div>
    );
};

export default Login;
