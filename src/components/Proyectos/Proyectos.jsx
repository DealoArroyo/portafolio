import React from 'react'
import proyectos from './listaProyectos'

const Proyectos = () => {
  return (
    <>
      <div className='bg-gray-200 p-2'>
      <h3 className='text-black text-lg font-semibold ml-8'>Proyectos</h3>
        {proyectos.map((proyecto) => (
            <div key={proyecto.id} className='m-10 bg-gray-100 p-5 rounded-3xl drop-shadow-sm'>
                <img src={proyecto.imagen} alt={proyecto.alt} className='' />
                <h1 className='text-black font-semibold text-center mt-4 lg:text-xl'>{proyecto.nombre}</h1>
                <p className='text-black text-justify mt-4 text-sm lg:text-lg'>{proyecto.Descripcion}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default Proyectos
