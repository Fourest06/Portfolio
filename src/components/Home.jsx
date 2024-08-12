import React from 'react'
import FGM from '../assets/me.jpg'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Passionate about creating seamless digital experiences. Skilled in front-end and back-end development, ready to bring innovative mobile and web applications to life.
                </p>

                <div className='md:block lg:hidden'>
                    <a
                      href='/Resume - MALINAO.pdf' 
                      download='Resume - MALINAO.pdf' 
                      className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Resume
                    </a>
                </div>
            </div>

            <div>
                <img src={FGM} alt="My Profile" className='rounded-2xl mx-auto w-44 md:w-72 lg:w-96'/>
            </div>
        </div>
    </div>
  )
}

export default Home
