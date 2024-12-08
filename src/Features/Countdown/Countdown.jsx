import React, { useEffect, useState } from 'react';
import './Countdown.css';

function Countdown() {
    const [isStart, setStart] = useState(true);
    const [isResume, setResume] = useState(true);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const handleStart = () => {
        if (hour === 0 && min === 0 && sec === 0) {
            return alert("Please enter the timer");
        }
        setStart(false);
    };

    function checkTime(h, m, s) {
        if (s > 0) {
            setSec(s - 1);
        } else if (sec === 0 && min > 0) {
            setMin(m - 1);
            setSec(59);
        } else if (min === 0 && h > 0) {
            setHour(h - 1);
            setMin(59);
            setSec(59);
        }
    }

    useEffect(() => {
        if (!isStart && isResume) {
            const timerInterval = setInterval(() => {
                checkTime(hour, min, sec);
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    }, [isStart, hour, min, sec, isResume]);

    const handleReset = () => {
        setStart(true);
        setHour(0);
        setMin(0);
        setSec(0);
        setResume(true);
    };

    const setValue = (e) => {
        const { value, id } = e.target;
        if (id === 'HH') setHour(value);
        else if (id === 'MM') setMin(value);
        else setSec(value);
    };

    const handlePause = () => setResume(false);
    const handleResume = () => setResume(true);

    return (
        <div className="mainContainer">
            <h1>Countdown timer</h1>

            {isStart ? (
                <div input-Container>
                    <div>
                        <input
                            type="text"
                            maxLength={2}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            onChange={setValue}
                            id="HH"
                            className="timer"
                            placeholder="HH"
                        />
                        <input
                            type="text"
                            maxLength={2}
                            onChange={setValue}
                            id="MM"
                            className="timer"
                            placeholder="MM"
                        />
                        <input
                            type="text"
                            maxLength={2}
                            onChange={setValue}
                            id="SS"
                            className="timer"
                            placeholder="SS"
                        /> <br />
                        <button onClick={handleStart}>Start</button>
                    </div>
                </div>
            ) : (
                <div className="dispay-container">
                    <div>
                        <span>{hour < 10 ? `0${hour}` : hour}</span>
                        <span>:</span>
                        <span>{min < 10 ? `0${min}` : min}</span>
                        <span>:</span>
                        <span>{sec < 10 ? `0${sec}` : sec}</span>
                    </div>
                    <div>
                        {isResume ? (
                            <button onClick={handlePause}>Pause</button>
                        ) : (
                            <button onClick={handleResume}>Resume</button>
                        )}
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Countdown;
