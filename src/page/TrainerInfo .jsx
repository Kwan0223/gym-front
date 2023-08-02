import React, {useEffect, useState} from 'react';
import Card from "./card";

const TrainerInfo = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() =>{
        console.log("TEST !!!!!!!!  TrainerInfo props : " , props)
    },[]);


    const trainerInfo = props.data.trainerInfo;

    return (
        <div>
            <div className="card-container">
                {trainerInfo ? (
                    // <Card data={trainerInfo[currentIndex]} type="trainer"  pointId = {pointId} totalData = {props}/>
                    <Card data={trainerInfo[currentIndex]} type="trainer"  totalData = {props}/>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="button-container">
                {trainerInfo && trainerInfo.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className="index-button">
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TrainerInfo;
