import React, {useEffect} from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = (props) => {
    const images = props.props.data.pointImagePath
    const data = props.props.data

    useEffect( () => {
        // console.log("TES props ::" , props );
        console.log("TES images ::" , images );
        // console.log("TES data ::" , data );

    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="card-image-container">
                        <img className="card-image" src={image} alt={`room-${index}`}/>
                    </div>
                ))}
            </Slider>
            <span>{data.pointName}</span>

        </div>
    );
};

export default ImageSlider;
