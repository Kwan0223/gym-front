import React, {useContext, useEffect, useState} from 'react';  // import useContext here
import Card from "../page/card";
import '../css/Content.css';
import {Link, useLocation} from 'react-router-dom';
import {UserContext} from '../components/UserProvider';
import SearchBar from "../page/SearchBar";
import axios from "axios";
import {logDOM} from "@testing-library/react";


const Content = () => {
    const location = useLocation();
    const {user} = useContext(UserContext); // use useContext here

    let userFromStorage = localStorage.getItem('user');
    userFromStorage = userFromStorage ? JSON.parse(userFromStorage) : location.state ? location.state.data : null;


    const [searchItem, setSearchItem] = useState({

        area: '',
        name: ''
    });
    // const [points, setPoints] = useState({});
    const [points, setPoints] = useState({content: []});

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/point')
            .then(response => {
                setPoints(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const imagesList = [
        {

            gymName: '호매실헬스',
            img: [
                "/image/h1.PNG",
                "/image/h2.PNG",
                "/image/h3.PNG",
                "/image/h4.PNG",
            ],
            gymAddr: '경기도 수원시 권선구 호매실동 1395-3 4층',
            instaUrl: 'https://www.instagram.com/fitness_hms/'
        },
        {
            gymName: 'AMG헬스',
            img: [
                "/image/Amg1.PNG",
                "/image/Amg2.PNG",
                "/image/Amg3.PNG",
                "/image/Amg4.PNG",
            ],
            gymAddr: '경기도 수원시 권선구 호매실로104번길 24-70',
            instaUrl: 'https://www.https://www.instagram.com/amgfitness_homaesil/'
        },
        {
            gymName: '모티비피티앤필라테스',
            img: [
                "/image/motive1.PNG",
                "/image/motive2.PNG",
                "/image/motive3.PNG",
                "/image/motive4.PNG",
            ],
            gymAddr: '경기 수원시 권선구 호매실로90번길 57 4층 401호(호매실동, 우석스퀘어)',
            instaUrl: 'https://www.instagram.com/motive_pt_pilates/'
        },
        {
            gymName: '쓰리핸드짐',
            img: [
                "/image/three1.PNG",
                "/image/three2.PNG",
                "/image/three3.PNG",
                "/image/three4.PNG",
            ],
            gymAddr: '경기 수원시 권선구 호매실로90번길 27 굿프라임2 6층 모티브',
            instaUrl: 'https://www.instagram.com/3handgym/?igshid=YmMyMTA2M2Y%3D'
        },
        {
            gymName: '웨이크업짐',
            img: [
                "/image/wakeUp1.PNG",
                "/image/wakeUp2.PNG",
                "/image/wakeUp3.PNG",
                "/image/wakeUp4.PNG",
            ],
            gymAddr: '경기 수원시 권선구 호매실로104번길 18 4층 401호 웨이크업짐',
            instaUrl: ' https://blog.naver.com/wakeupgym '
        },

    ]
    // const handleSearch = (searchInput) => {
    //     setSearchItem(searchInput);
    // }
    const handleSearch = () => {
        console.log("TEST DATA :" , points)
    }
    //
    // const filteredImagesList = points.content.filter((data) =>
    //     console.log("TEST Filter Data : ")
    //     // data.pointAddress.toLowerCase().includes(searchItem.area.toLowerCase()) &&
    //     // data.pointName.toLowerCase().includes(searchItem.name.toLowerCase())
    // );


    return (
        <>
            <SearchBar onSearch={handleSearch}/>
            <button onClick={handleSearch}>test</button>
            {/*<div className="card-container">*/}
            {/*    {points.content.map((data, index) => (*/}
            {/*        <Card key={index} data={data} className="card"/>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="card-container">
                {points.content ? (
                    points.content.map((data, index) => (
                        <Card key={index} data={data} className="card" />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>

    );
};

export default Content;
