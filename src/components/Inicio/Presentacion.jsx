import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import pc from '../../assets/pc.png'

const Presentacion = () => {
  return (
    <>
    <div className='flex justify-center items-center m-5'>
      <div className='space-x-18'>
        <h1 className='text-black font-bold space-y-2 text-2xl'>Óscar Muñoz</h1>
        <h2 className='text-black font-light text-2xl'>Desarrollador Web</h2>
      </div>
      <div className='mt-4'>
      <img src={pc} alt="PC" className='w-24' />
      </div>
    </div>
    </>
  )
}

export default Presentacion
