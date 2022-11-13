import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000');
  const [intervalo, setIntervalo] = useState(0);


  function generarColor(){
    let hexa = '0123456789ABCDEF'
    let col = '#'

    for(let i=0; i < 6; i++){
      col = col + hexa[Math.floor(Math.random() * 16)];
    }
    setColor(col)
    console.log(col)
  }

  const cambiarColor = () => {
    return setIntervalo(setInterval(generarColor, 500))
  }

  const pararCambioColor = () => {
    return clearInterval(intervalo, 0)
  }


  return (
    <div className="App" style={{ margin: 'auto' }}>
      <div
        id="square"
        onMouseOver={cambiarColor}
        onMouseLeave={pararCambioColor}
        onDoubleClick={pararCambioColor}
        style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
      ></div>{' '}
      <p style={{ color: 'black' }}>Color: {color} </p>
    </div>
  );
}

export default App;