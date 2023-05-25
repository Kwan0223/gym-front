import React from 'react';
import Card from "../page/card";
import '../css/Content.css';
import { Link } from 'react-router-dom';

const Content = () => {

    const imagesList =[
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


    console.log("TEST : ", imagesList);
    return (
        <div className="card-container">
            {imagesList.map((data, index) => (
                <Card key={index} data={data}  className="card"/>
            ))}
        </div>

    );
};

export default Content;
