import logo from './logo.svg';
import './App.css';

const state = {
  name: 'Lan Zhan',
  age: 30
}
function App() {
  //const name = "Wei Ying"
  return (
    <div className="App">
    <h1>Holla Amigos</h1>
    <p> Numero Uno Amigo: {state.name} </p>
    </div>
  );
}

export default App;
