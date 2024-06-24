import React, { useState } from 'react';
import './App.css';
import './App.js';

function App() {
    
    const [contador, setContador] = useState(0);

   
    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div className="App">
            <div id="contador">{contador}</div>
            <button onClick={incrementarContador}>sumar</button>
        </div>
    );
}

export default App;
