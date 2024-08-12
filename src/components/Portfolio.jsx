import React, { useState } from 'react';
import GRAPHpickJava from '../assets/portfolio/GRAPHpickJava.jpg'
import blogReact from '../assets/portfolio/blogReact.png'
import notesApp from '../assets/portfolio/notesAppDjango&React.png'
import inventoryAppDjango from '../assets/portfolio/inventoryAppDjango.png'
import pizzaPHPandMySQL from '../assets/portfolio/pizzaPHP&MySQL.png'
import recipeTailwind from '../assets/portfolio/recipeTailwind.png'
import Modal from './Modal'
import GITHUB from '../assets/github.png'

const Portfolio = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: GRAPHpickJava,
      link: "https://github.com/Fourest06/GRAPHpick"
    },

    {
      id: 2,
      src: blogReact,
      link: "https://github.com/Fourest06/Blog-React"
    },

    {
      id: 3,
      src: notesApp,
      link: "https://github.com/Fourest06/Notey-Django-React"
    },

    {
      id: 4,
      src: inventoryAppDjango,
      link: "https://github.com/Fourest06/Inventory-App-Django"
    },

    {
      id: 5,
      src: pizzaPHPandMySQL,
      link: "https://github.com/Fourest06/Pizza-php"
    },

    {
      id: 6,
      src: recipeTailwind,
      link: "https://github.com/Fourest06/Recipe-Tailwind"
    },
  ]

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({ id, src, link }) => (
              
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                  <img src={src} alt="" className='w-full h-40 rounded-md duration-200 hover:scale-105' onClick={() => openModal(src)}/>
                  <div className='flex items-center justify-center'>
                    <a href={link} target="_blank" rel="noopener noreferrer"> 
                      <img src={GITHUB} alt='GitHub' className='w-10 h-10 m-4 duration-200 hover:scale-105' />
                    </a>
                  </div>
                </div>
              
            ))
          }
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} src={selectedImage} />
    </div>
  )
}

export default Portfolio
