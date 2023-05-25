import React, {useState} from 'react';
import axios from 'axios';
import '../css/Login.css';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.post('http://localhost:8080/user/login', userInfo)
        axios.post('/user/login', userInfo)
            .then(res => {
                console.log(res.data);
                console.log("TEST Lonin !!");

            })
            .catch(error => {
                console.log(error);

            });
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
                        id="password"
                        name="password"
                        className="form-input"
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="login-button">Log in</button>
            </form>
        </div>
    );
};

export default Login;
