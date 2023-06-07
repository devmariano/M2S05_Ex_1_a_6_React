import './styles/App.css';
import googleLogo from './images/googlelogo.png';
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <img className="app-logo" src={googleLogo} alt="" />
      <Input prop1="Pesquise no Google ou escreva um url" prop2={2023}/>
      <Button prop1='Pesquisa Google' prop2={42} prop3/>
      <Button prop1='Estou com sorte' prop2={12} prop3={false}/>
      <Footer/>
    </div>
  );
}

export default App;
