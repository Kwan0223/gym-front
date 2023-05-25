import React from 'react';
import '../css/SingUp.css';

const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="signup-content">
                <h2 className="signup-heading">회원가입</h2>
                <form className="signup-form">
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="이름" className="form-input" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="이메일" className="form-input" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" placeholder="비밀번호" className="form-input" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="비밀번호 확인" className="form-input" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="signup-button">회원가입</button>
                    </div>
                </form>
                <div className="login-link">
                    이미 회원이신가요? <a href="/login">로그인</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
