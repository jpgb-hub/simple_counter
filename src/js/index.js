import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import "../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SimpleCounter() {
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [digit, setDigit] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setSeconds(counter % 60);
    setMinutes(Math.floor(counter / 60)%60);
    setDigit((counter % 9) + 1);
  }, [counter]);

  return (
    <div className="Counter">
      <div className="Clock">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="fourth_digit">{Math.floor(minutes / 10) % 6}</div>
      <div className="third_digit">{minutes % 10}</div>
      <div className="second_digit">{Math.floor(seconds / 10)}</div>
      <div className="first_digit">{seconds % 10}</div>
    </div>
  );
}

ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));




