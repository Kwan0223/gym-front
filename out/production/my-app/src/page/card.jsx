import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from "./ImageSlider";
import '../css/Card.css';

const Card = (props) => {
    const navigate = useNavigate();

    let params = props.data;

    const handleClick = () => {
        navigate(`/Detail/${props.data.gymName}`, { state: { data: props.data } });
    };


    console.log("Card image Check:", props);
    return (
        <div className="card" onClick={handleClick}>
            <ImageSlider props={props} />
        </div>
    );
};

export default Card;
