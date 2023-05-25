import React from 'react';
import '../css/MyPage.css';

const MyPage = () => {
    return (
        <div className="MyPage-container">
            <div className="MyPage-image-container">
                <img className="MyPage-image" src="your-MyPage-picture-url" alt="MyPage" />
                <button className="edit-MyPage-button">Edit MyPage</button>
            </div>
            <div className="info-container">
                <p>Name: John Doe</p>
                <p>Address: 1234 Main St.</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <button className="change-password-button">Change Password</button>
        </div>
    );
}

export default MyPage;
