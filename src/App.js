import logo from './logo.svg';
import './App.css';
import Amigo from './components/Amigo';
import Button from './components/Button';
import Hover from './components/Hover';
function App() {
    return (
    <div className="App">
    <h1>Holla Amigos</h1>
    <Amigo />
    <Button />
    <Hover />
    </div>
  );
}

export default App;
