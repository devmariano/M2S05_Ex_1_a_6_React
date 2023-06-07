import React from "react";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="foot">
      <div>Brasil</div>
      <hr />
      <div className="foot_bottom">
        <div>
          <span>Sobre</span>
          <span>Publicidade</span>
          <span>Negócios</span>
          <span>Como funciona a Pesquisa</span>
        </div>
        <div>
          <span>Privacidade</span>
          <span>Termos</span>
          <span>Configurações</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;