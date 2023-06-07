import "../styles/Input.css";
import React from 'react';


function Input (props) {
    if (props.prop){
        return (<h1>"Props não declarada!"</h1>)
    }
    return ( 
    <div className='Input'>
    <input type="text" placeholder={props.prop1} />
    </div>
     );
    }

export default Input;