import React, {useState, useEffect, useContext} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Calender.css';
import axios from 'axios';
import {UserContext} from "../components/UserProvider";

const Calendar = (data , totaldata) => {

    const { user, setUser, logout } = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(true);
    const [displayTimeButton, setDisplayTimeButton] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [paymentView, setPaymentView] = useState(false);

    const pointId = data.totalData.data.pointId;
    const tariner = data.trainer;

    // Added function to format the date
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}`;
    };

    useEffect(() => {
        getSchedule(pointId);
    }, []);

    useEffect(() => {}, [selectedTime]);

    const getSchedule = (pointId) => {
        axios
            .get(`http://localhost:8080/api/v1/schedule?pointId=${pointId}`)
            .then((response) => {
                const sortedTimeSlots = response.data
                    .map((schedule) => schedule.startTime)
                    .sort();
                setTimeSlots(sortedTimeSlots);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setOpen(false);
        setDisplayTimeButton(true);
    };

    const handleReturn = () => {
        setDisplayTimeButton(false);
        setSelectedDate(null);
        setOpen(true);
    };

    const handlePayment = () => {
        setPaymentView(true); // 결제하기 버튼을 누르면 paymentView state를 true로 변경합니다.
    };

    return (
        <div>
            {!paymentView ? (
                <>
                    <DatePicker
                        className="my-custom-datepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        onInputClick={() => setOpen(true)}
                        open={open}
                        onCalendarClose={() => setOpen(false)}
                        onCalendarOpen={() => setOpen(true)}
                        dateFormat="yyyy/MM/dd"
                        isClearable
                        showYearDropdown
                        showPopperArrow={false}
                    />
                    {displayTimeButton && (
                        <div className="right-content">
                            <div>
                                <h2>{selectedDate ? formatDate(selectedDate) : ''}</h2>
                            </div>
                            <div className="button-container">
                                {timeSlots.map((timeSlot, index) => (
                                    <button
                                        key={index}
                                        className={`time-button ${selectedTime === timeSlot ? 'selected' : ''}`}
                                        onClick={() => setSelectedTime(timeSlot)}
                                    >
                                        {timeSlot}
                                    </button>
                                ))}
                            </div>
                            <button onClick={handleReturn}>날짜 다시고르기</button>
                            <button onClick={handlePayment}>결제하기</button>
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <div className="input-container">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" defaultValue={user.name} readOnly/>
                        </div>
                        <div>
                            <label htmlFor="gymName">Gym Name:</label>
                            <input type="text" id="gymName" name="gymName" defaultValue={data.totalData.data.pointName} readOnly/>
                        </div>
                        <div>
                            <label htmlFor="trainerName">Trainer Name:</label>
                            <input type="text" id="trainerName" name="trainerName" defaultValue={tariner.name} readOnly/>
                        </div>
                        <div>
                            <label htmlFor="date">Date:</label>
                            <input type="text" id="date" name="date" defaultValue={selectedDate ? formatDate(selectedDate) : ''} readOnly/>
                        </div>
                        <div>
                            <label htmlFor="hour">Hour:</label>
                            <input type="text" id="hour" name="hour" defaultValue={selectedTime} readOnly/>
                        </div>
                        <div>
                            <label htmlFor="paymentPrice">Payment Price:</label>
                            <input type="text" id="paymentPrice" name="paymentPrice" defaultValue="$100" readOnly/>
                        </div>
                    </div>
                    <div className="button-container">
                        <button>예약완료</button>
                        <button>예약취소</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
