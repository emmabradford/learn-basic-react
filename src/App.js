import logo from './logo.svg';
import './App.css';
import Amigo from './components/Amigo';
import Button from './components/Button';
import Hover from './components/Hover';
import Copy from './components/Copy';

function App() {
    return (
    <div className="App">
    <h1>Hola Amigos</h1>
    <Amigo />
    <Button />
    <Hover />
    <Copy />
    </div>
  );
}

export default App;
