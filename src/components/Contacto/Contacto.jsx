import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Contacto = () => {
  return (
    <>
      <h1 className='text-black text-lg font-semibold m-8 mb-2'>Contacto</h1>
      <div className='flex justify-center items-center m-8 space-x-8'>
        <a href="https://wa.me/4424220140" target='_blank' rel='noopener noreferrer'>
        <FaWhatsapp className='text-5xl bg-gradient-to-bl from-green-400 via-green-500 to-green-600 rounded-full p-1 text-white hover:from-green-600 hover:via-green-500 hover:to-green-400 transition duration-500' />
        </a>

        <a href="https://www.facebook.com/dealo.arroyo.12/" target='_blank' rel='noopener noreferrer'>
        <TiSocialFacebook className='text-5xl bg-gradient-to-bl from-blue-400 via-blue-500 to-blue-600 rounded-full p-1 text-white hover:from-blue-600 hover:via-blue-400 hover:to-blue-500 transition duration-500' />
        </a>

        <a href="https://www.instagram.com/arroyodealo/" target='_blank' rel='noopener noreferrer'>
        <FaInstagram className='text-5xl bg-gradient-to-bl from-violet-500 via-pink-600 to-orange-400 rounded-full p-1 text-white hover:from-orange-300 hover:via-pink-500 hover:to-violet-400 transition duration-500' />
        </a>
    
      </div>
    </>
  )
}

export default Contacto
