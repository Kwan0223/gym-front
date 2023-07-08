import {useNavigate} from 'react-router-dom';
import ImageSlider from "./ImageSlider";
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Card.css';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState} from "react";

const Card = ({data, type}) => {

    const navigate = useNavigate();
    let result;
    let imageSliderProps;
    const [startDate, setStartDate] = useState(new Date());
    const [modalIsOpen, setIsOpen] = useState(false);

    if (type === 'content') {
        imageSliderProps = data.pointImagePath;
    } else if (type === 'trainer') {
        imageSliderProps = data.trainerImage;
        result = data.trainerHistory[0].split(',').map(s => s.trim());
    }
    const handleClick = () => {
        navigate(`/Detail/${data.pointName}`, {state: {data: data}});
    };

    const handleReservation = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        type === 'content' ? (
            <div className="card m-2" onClick={handleClick}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <ImageSlider imageSliderProps={imageSliderProps}/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{data.pointName}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            type === 'trainer' ? (
                <div className="card card-trainer m-2">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <ImageSlider imageSliderProps={imageSliderProps}/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="button-group">
                                    <button>P.T 문의 및 상담</button>
                                    <button onClick={handleReservation}>Make a P.T reservation</button>
                                </div>
                                <span className="trainer-label">trainer</span>
                                <h2>{data.name}</h2>
                                <span className="prize-history-label">Prize history</span>
                                {result.map((item, index) => (
                                    <div key={index}>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Reservation Modal"
                    >
                        <h2>Make a reservation</h2>
                        <button onClick={closeModal}>close</button>
                        <Calendar onChange={setStartDate} value={startDate} />
                    </Modal>
                </div>
            ) : null
        )
    );
};

export default Card;
