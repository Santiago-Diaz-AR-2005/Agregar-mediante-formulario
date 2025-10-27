import logo from './logo.svg';
import './App.css';
import Contador from './contador.jsx';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <Contador numero={contador} />
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick= {() => contador > 0 && setContador(contador - 1)}>Disminuir</button>
      <button onClick={() => setContador(0)} >Resetear</button>
    </div>
  );
}

export default App;
