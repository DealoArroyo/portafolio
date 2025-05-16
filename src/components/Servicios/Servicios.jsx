import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

const Servicios = () => {
  return (
    <div className='m-8'>
      <h3 className='text-black font-semibold text-lg'>Servicios</h3>
      <ul className='text-sm pt-2'>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className='text-green-700' /> Sitios web informativos
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className='text-green-700' /> Tiendas en línea
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className='text-green-700' /> Aplicaciones web a medida
        </li>
        <li className="flex items-center gap-2">
          <FaRegCircleCheck className='text-green-700' /> Diseño responsive y soporte
        </li>
      </ul>
    </div>
  )
}

export default Servicios
