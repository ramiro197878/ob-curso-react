import React, { Component, useState, useEffect } from 'react'
//import ‘../../styles/clock.scss’;

export class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}


const ClockFuncional = () => {
  const datos = {
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
  }
  const [usuario, setUsuario] = useState(datos);


  useEffect(() => {
    const intervalo = setInterval(() => {
        setUsuario({
          fecha: user.fecha,
          edad: user.edad + 1,
          nombre: user.nombre,
          apellidos: user.apellidos,
        });
  }, 1000);

    return () => {
      clearInterval(intervalo);
    }
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
}

export default ClockFuncional;
