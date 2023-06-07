import "../styles/Input.css";
import React from 'react';
import PropTypes from "prop-types";

/*function Input () {
    return ( 
    <div className='Input'>
    <input type="text" placeholder="Pesquise no Google ou escreva um url" />
    </div>
     );
}*/

function Input (props) {
    return ( 
    <div className='Input'>
    <input type="text" placeholder={props.prop1} />
    </div>
     );
    }
Input.propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number.isRequired,
}
export default Input;