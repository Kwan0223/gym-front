import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserProvider';
import axios from 'axios';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import '../css/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const [notificationCount, setNotificationCount] = React.useState(3);

    const [notifications, setNotifications] = React.useState([]);
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setNotificationCount(0);
    };
    useEffect(() => {
        console.log('TEST NotificationCount ::  ' , notificationCount)
    },[notificationCount])
    useEffect(() => {
        console.log('TEST Header user ::  ' , user)
        console.log('TEST  Header user Id::  ' , user.userId)

    },[])

    useEffect(() => {
        if (!user) return;

        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            debug: (str) => {
                console.log(str); // WebSocket 디버그 로그 출력
            },
        });

        stompClient.onConnect = () => {
            console.log('TEST Header user ::  ' , user)
            console.log('TEST  Header user Id::  ' , user.userId)
            console.log('Connected to WebSocket');
            stompClient.subscribe(`user/${user.userId}/topic/notifications`, (notification) => {
                console.log('Received to WebSocket');
                console.log('Received notification', notification.body);
                setNotifications((prev) => [...prev, notification.body]); // 알림 추가
                setNotificationCount((prevCount) => prevCount + 1); // 카운터 증가

            });
        };

        stompClient.onStompError = (frame) => {
            console.error('STOMP error:', frame.headers['message']);
        };

        stompClient.activate();

        return () => {
            stompClient.deactivate();
        };
    }, [user]);

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
                        {user && (
                            <div className="notification-icon" onClick={toggleDropdown}>
                                <img src="/image/—Pngtree—bell vector icon_3791349.png" alt="Notification Icon" />
                                {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
                                {showDropdown && (
                                    <div className="notification-dropdown">
                                        {notifications.map((notification, idx) => (
                                            <div key={idx} className="notification-item">
                                                {notification}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
