import React from 'react';
import Presentacion from '../components/Inicio/Presentacion';
import SobreMi from '../components/Acerca/SobreMi';
import Servicios from '../components/Servicios/Servicios';
import Proyectos from '../components/Proyectos/Proyectos';
import Contacto from '../components/Contacto/Contacto';


const Landing = () => {
  return (
    <>
      <Presentacion />
      <SobreMi />
      <Servicios />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default Landing
