import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import '../css/Detail.css';

const Detail = () => {
    const location = useLocation();
    const {data} = location.state;


    useEffect( () => {
        // console.log("TES props ::" , props );
        console.log("TES images ::" , data );
        // console.log("TES data ::" , data );

    }, [])
    console.log("Data in Detail:", data);

    if (!data) {
        return <div>Data is not available</div>;
    }

    console.log("Detail Data: ", data);

    return (
        <div className="gymContent">
            <div className='gym'>
                <h2>{data.gymName}</h2>
            </div>
            <div className="gymImgs">
                <div className="leftImages">
                <img src={data.pointImagePath[0]} alt={`gym 1`} id={`img1`} />
                </div>
                <div className="rightUpImages">
                    <img src={data.pointImagePath[1]} alt={`gym 2`} id={`img2`} />
                </div>
                <div className="rightDownImages">
                    <img src={data.pointImagePath[2]} alt={`gym 3`} id={`img3`} />
                    <img src={data.pointImagePath[3]} alt={`gym 4`} id={`img4`} />
                </div>
            </div>
        </div>
    );

};

export default Detail;
