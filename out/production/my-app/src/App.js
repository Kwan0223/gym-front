import './css/App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Detail from "./layout/Detail";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./layout/content";
import Login from "./page/login";
import SignUp from "./page/SignUp"; // 추가


function App() {
    // 요청받은 정보를 담아줄 변수 선언
    const [testStr, setTestStr] = useState('');

    // 변수 초기화
    function callback(str) {
        setTestStr(str);
    }

    // 첫 번째 렌더링을 마친 후 실행
    useEffect(
        () => {
            axios({
                url: '/home',
                method: 'GET'
            }).then((res) => {
                console.log("TEST !!!!! Proxy")
                callback(res.data);
            })
        }, []
    );

    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Content/>}/>
                    <Route path="/detail/:gymName" element={<Detail/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
