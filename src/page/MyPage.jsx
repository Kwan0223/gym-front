import React, {useContext, useEffect, useState, useRef} from 'react';
import '../css/MyPage.css';
import {UserContext} from "../components/UserProvider";
import {useNavigate} from "react-router-dom";

const MyPage = () => {
    const {user, setUser, logout} = useContext(UserContext);
    const [imageSrc, setImageSrc] = useState(null);

    const fileInput = useRef();
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageSrc(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImageSrc(null);
        }
    };

    const handleEditProfileClick = () => {
        fileInput.current.click();
    };

    useEffect(() => {
        console.log("TEST mypage : ", user)
        if(user == null){
            navigate('/')
        }
    }, [user])

    return (
        <div className="MyPage-container">
            <div className="MyPage-image-container">
                { !imageSrc ? (
                    <p>There is no image</p>
                ) : (
                    <img className="MyPage-image" src={imageSrc} alt="MyPage" />
                )}
                <input type="file" ref={fileInput} onChange={handleImageUpload} style={{display: 'none'}} />
            </div>
            <div className="info-container">

                {user && (
                    <h2>Name:  {user.name}</h2>
                )}
                {user && (
                    <p>Address: {user.address}</p>
                )}
                {user && (
                    <p>Phone: {user.number}</p>
                )}
                <div>
                    <button className="edit-MyPage-button" onClick={handleEditProfileClick}>Edit Profile</button>
                    <button className="change-password-button">Change Password</button>
                    <button className="save-button">Save</button>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
