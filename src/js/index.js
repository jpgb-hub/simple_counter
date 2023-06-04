//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'; {/*importa la libreria font awesome*/}
import{faClock} from '@fortawesome/free-solid-svg-icons';import { func } from "prop-types";
{/*importa el ícono desde la librería*/}

//program the function//

function SimpleCounter(props){
    return (<div className="Counter">
        <div className="Clock">
        {/* <i className="fa-regular fa-clock"></i> */}
        <FontAwesomeIcon icon={faClock} />{/* se usa el codigo seccion React  */}
        </div>
        <div className="fourth_digit">{props.fourth_digit}</div>
        <div className="third_digit">{props.third_digit}</div>
        <div className="second_digit">{props.second_digit}</div>
        <div className="first_digit">{props.first_digit}</div>
    </div>);
}

SimpleCounter.propTypes ={
    fourth_digit:PropTypes.number,
    third_digit:PropTypes.number,
    second_digit:PropTypes.number,
    first_digit:PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const fourth_digit = Math.floor(counter/1000);
    const third_digit = Math.floor(counter/100);
    const second_digit = Math.floor(counter/10);
    const first_digit = Math.floor(counter/1);
    console.log(fourth_digit, third_digit,second_digit,first_digit);
    counter ++; 
    //render your react application
    
    ReactDOM.render(
        <SimpleCounter first_digit={first_digit} second_digit={second_digit} third_digit={third_digit} fourth_digit={fourth_digit} />, document.querySelector("#app"));

},1000);

//render your react application

