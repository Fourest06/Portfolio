import React from 'react'
import authenticationDjango from '../assets/portfolio/authenticationDjango.png'
import blogReact from '../assets/portfolio/blogReact.png'
import formDjango from '../assets/portfolio/formDjango.png'
import inventoryAppDjango from '../assets/portfolio/inventoryAppDjango.png'
import mario from '../assets/portfolio/mario.png'
import recipeTailwind from '../assets/portfolio/recipeTailwind.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: authenticationDjango
    },

    {
      id: 2,
      src: blogReact
    },

    {
      id: 3,
      src: formDjango
    },

    {
      id: 4,
      src: inventoryAppDjango
    },

    {
      id: 5,
      src: mario
    },

    {
      id: 6,
      src: recipeTailwind
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({ id, src }) => (
              
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                  </div>
                </div>
              
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
