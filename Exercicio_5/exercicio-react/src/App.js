import Header from './components/Header.js';
import Button from './components/Button.js';
import Input from './components/Input.js';

import './styles/App.css';

function App() {
  return (
    <div className="App">
    <Header nome='Alexandre Mariano'/>
    <h1>Insira seu nome</h1>
    <Input prop1='Insira seu nome aqui'/>
    <Button prop1='Enviar'/>
    </div>
  );
}

export default App;
