//USE CALLBACK GERALMENTE USANDO EM OTIMIZAÇÕES
//USAR EM FUNÇÕES QUE RENDERIZEM COISAS PESADAS

//useCallback(função, [array de dependências])

import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func,
}

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num); //função de callback
  }, []);

  return (
    <div className="App">
      <p>useCallback</p>
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}
export default App;

