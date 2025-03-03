import React from 'react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const TeacherCard = ({name, photo, post})=>{
  return (
    <div className="rounded overflow-hidden shadow-lg bg-amber-100 md:w-52 w-full">
        <img src={photo} alt={name} className="h-48 object-contain scale-100 w-full px-4 mx-auto mt-4 rounded" />
        <div className="px-6 py-4 text-center">
          <h3 className="text-sm font-medium text-gray-800">{name}</h3>
          <p className='text-xs'>{post}</p>
        </div>
      </div>
  )
}

const Home = () => {
  return (
    <div className='bg-[url(./home.avif)] pb-12 bg-fixed bg-center text-center text-amber-900'>
      <div className='h-screen flex flex-col items-center justify-center text-center gap-8'>
        <p className='text-3xl font-bold'>7-8 March 2025</p>
        <div className="flex gap-2 flex-col items-center">
          <Logo classes={"md:w-[26rem] w-72"} />
          <h2 className='text-2xl font-medium'> Celebrating 10<sup>th</sup> Anniversary</h2>
        </div>
        <Link to="register"><button className='p-2 shadow-lg shadow-orange-900 px-4 border border-amber-900 rounded-full text-xl'><p className='hover:font-medium object-cover'>Book Your Slot</p></button></Link>
      </div>

      <div className="flex flex-col md:flex-row text-center items-center md:pr-8 md:py-4 md:w-3/4 md:p-0 p-8 w-full justify-between m-auto bg-amber-100 rounded-3xl">
        {/* Logo Section */}
        <div className="flex md:w-1/2 w-full justify-center mb-4 md:mb-0">
          <Logo classes="w-72" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-4">A Timeless Tale of Colors and Culture!</h2>
          <p className="text-sm md:text-base">
            The race to become the best starts when you step out of your comfort zone. It's time to travel beyond your closed sphere and explore the world with endless possibilities. AQUAREGIA is not merely an event; it is a voyage into a world where creativity knows no bounds and brilliance finds its stage. Immerse yourself in a celebration of talent, innovation, and the spirit of camaraderie.
          </p>
        </div>
      </div>

      <div className='m-4 pt-12 flex flex-col gap-20 items-center'>
        <div className='flex flex-col gap-8'>
          <h2 className='font-bold text-3xl'>CHIEF PATRON</h2>
          <TeacherCard photo = {"./teachers/vc.webp"} name ={"PROF. ALPANA KATEJA"} post={"(VICE CHANCELLOR, UNIVERSITY OF RAJASTHAN)"}/>
        </div>

        <div className='flex flex-col gap-8'>
          <h2 className='font-bold text-3xl'>ORGANISING COMMITTEE</h2>
          <div className='flex gap-12 md:flex-row flex-col'>
          <TeacherCard photo = {"./teachers/gp-principal.jpg"} name ={"PROF. G. P. Singh"} post={"(PATRON)"}/>
          <TeacherCard photo = {"./teachers/rk-meena-sir.webp"} name ={"DR. RISHIKESH MEENA"} post={"(CONVENER)"}/>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <h2 className='font-bold text-3xl'>CO-CONVENERS</h2>
          <div className='flex gap-12 md:flex-row flex-col'>
          <TeacherCard photo = {"./teachers/guneria.webp"} name ={"DR. R.K. GUNSARIA"} post={"(VICE-PRINCIPAL)"}/>
          <TeacherCard photo = {"./teachers/rajendra.jpg"} name ={"DR. R.S. YADAV"} post={"(VICE-PRINCIPAL)"}/>
          <TeacherCard photo = {"./teachers/arvind.jpg"} name ={"DR. ARVIND KUMAR"} post={"(VICE-PRINCIPAL)"}/>
          <TeacherCard photo = {"./teachers/cp-sir.jpg"} name ={"DR. C.P. SINGH"} post={"(VICE-PRINCIPAL)"}/>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <h2 className='font-bold text-3xl'>CO-CONVENERS</h2>
          <div className='flex gap-12 md:flex-row flex-col'>
          <TeacherCard photo = {"./teachers/ravi.jpg"} name ={"DR. RAVI RATN GAUR"} />
          <TeacherCard photo = {"./teachers/jyoti-jain.jpg"} name ={"DR. JYOTI JAIN"} />
          <TeacherCard photo = {"./teachers/surekha.jpg"} name ={"DR. SUREKHA JAIN"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home