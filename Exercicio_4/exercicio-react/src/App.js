import Header from './components/Header.js';
import Button from './components/Button.js';
import Input from './components/Input.js';

import './styles/App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <h1>Insira seu nome</h1>
    <Input/>
    <Button/>
    </div>
  );
}

export default App;
