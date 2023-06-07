import '../styles/Header.css';
import React from "react";

function Header(props) {
    return ( 
        <div className="Header">
            <h3>Bem-vindo {props.nome}</h3>
            </div>   
     );
}

export default Header;