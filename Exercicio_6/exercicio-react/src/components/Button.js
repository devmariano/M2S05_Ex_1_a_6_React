import "../styles/Button.css";
import React from "react";
import PropTypes from 'prop-types';

//exemplo de props 

  /*function Button(props) {
    if (props.prop){
        return (<h1>"Hello"</h1>)
    }
    //abaixo é igual ao else
    return (
      <React.Fragment>
        <button className="Btn">{props.prop1}</button>
      </React.Fragment>
    );
  }*/
  function Button(props) {
    return  (
    <React.Fragment>
      <button className="Btn" type="submit">{props.prop1}</button>
    </React.Fragment>
    );
    }
    Button.propTypes = {
      prop1: PropTypes.string.isRequired,
      prop2: PropTypes.number.isRequired,
      prop3: PropTypes.bool,
    }
  
  export default Button;