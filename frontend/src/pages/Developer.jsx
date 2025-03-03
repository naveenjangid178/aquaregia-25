import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Developer = () => {
  return (
    <div className='h-screen flex bg-[url(./team.jpg)] bg-cover bg-center bg-fixed items-center justify-center'>
    <div className="w-60 rounded overflow-hidden bg-transparent shadow-lg shadow-orange-900 m-4">
      <img src='./team/naveen.webp' alt="Naveen Kumar" className="w-full h-52 p-2 object-cover rounded-xl" />
      <div className="px-6 py-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Naveen Kumar</h3>
        <h4 className="text-sm font-semibold text-gray-800">Full-Stack Developer</h4>
        <div className="mt-2 flex justify-center space-x-8 items-center">
          <Link to="https://www.instagram.com/naveenjangir178/" target='_blank'>
          <FaInstagram size={24} className='text-amber-900 hover:text-amber-700' />
          </Link>
          <Link to="https://www.linkedin.com/in/naveen-kumar178/" target='_blank'>
            <FaLinkedinIn size={21} className='text-amber-900 hover:text-amber-700' />
          </Link>
          <Link to="https://x.com/naveen_kumar178" target='_blank'>
          <FaTwitter size={24} className='text-amber-900 hover:text-amber-700' />
          </Link>
          <Link to="https://naveenjangid.vercel.app/" target='_blank'>
          <TbWorldWww size={24} className='text-amber-900 hover:text-amber-700' />
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Developer