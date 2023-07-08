import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from "./ImageSlider";
import '../css/Card.css';

const PointInfo = (props) => {
    useEffect(() => {
       console.log("TEST PointInfo Data : " , props)
    },[])

    return (
        <div>
            <h2>PointInfo</h2>
        </div>
    );
};

export default PointInfo;
