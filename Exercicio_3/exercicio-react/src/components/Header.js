import '../styles/Header.css';
import React from "react";

function Header() {
    const nome = "Alexandre"
    return ( 
        <div className="Header">
            <h3>Bem-vindo {nome}</h3>
            </div>   
     );
}

export default Header;