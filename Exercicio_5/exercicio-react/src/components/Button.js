import "../styles/Button.css";
import React from "react";



function Button(props) {
    if (props.prop){
        return (<h1>"Props não declarada!"</h1>)
    }
    //abaixo é igual ao else
    return (
      <React.Fragment>
        <button className="Btn">{props.prop1}</button>
      </React.Fragment>
    );
}
  
  export default Button;