import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserProvider';
import axios from 'axios';
import '../css/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { user, setUser, logout } = useContext(UserContext);

    const sessionOut = async () => {
        const res = await axios.post('http://localhost:8080/api/v1/users/logout');
        logout();
        if (res.status !== 200) {
            throw new Error('LogOut Fail!!');
        }
    };


    const handlePageMove = (id) => {
        switch (id) {
            case 'home':
                navigate('/');
                break;
            case 'login':
                navigate('/Login');
                break;
            case 'signUp':
                navigate('/SignUp');
                break;
            case 'myPage':
                navigate('/MyPage');
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <nav className="header-nav">
                <div className="nav-content">
                    <div onClick={() => handlePageMove('home')} className="logo-section">
                        <img src="/image/logo.PNG" className="logo-image" alt="Flowbite Logo" />
                        <span className="logo-text">헬스짱짱</span>
                    </div>
                    <div className="header-buttons">
                        {user?.name && <p className="welcome-text">Welcome {user.name}</p>}

                        {!user ? (
                            <button onClick={() => handlePageMove('login')} className="login-button">
                                Login
                            </button>
                        ) : (
                            <button onClick={sessionOut} className="logout-button">
                                Logout
                            </button>
                        )}
                        <button onClick={() => handlePageMove(user ? 'myPage' : 'signUp')} className="my-page-button">
                            {user ? 'My Page' : 'Sign up'}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
