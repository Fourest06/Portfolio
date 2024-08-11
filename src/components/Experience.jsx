import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import BOOTSTRAP from '../assets/bootstrap.png'
import TAILWIND from '../assets/tailwind.png'
import REACT from '../assets/react.png'
import Cplusplus from '../assets/c++.png'
import PYTHON from '../assets/python.png'
import JAVA from '../assets/java.png'
import PHP from '../assets/php.png'
import DJANGO from '../assets/django.png'
import LARAVEL from '../assets/laravel.png'
import MYSQL from '../assets/mysql.png'
import GITHUB from '../assets/github.png'

const Experience = () => {

    const tech = [
        {
            id: 1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },

        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },

        {
            id: 3,
            src: JAVASCRIPT,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },

        {
            id: 4,
            src: BOOTSTRAP,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },

        {
            id: 5,
            src: TAILWIND,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },

        {
            id: 6,
            src: REACT,
            title: 'React',
            style: 'shadow-cyan-400'
        },

        {
            id: 7,
            src: Cplusplus,
            title: 'C++',
            style: 'shadow-blue-400'
        },

        {
            id: 8,
            src: PYTHON,
            title: 'Python',
            style: 'shadow-amber-400'
        },

        {
            id: 9,
            src: JAVA,
            title: 'Java',
            style: 'shadow-amber-700'
        },

        {
            id: 10,
            src: PHP,
            title: 'php',
            style: 'shadow-indigo-500'
        },

        {
            id: 11,
            src: DJANGO,
            title: 'Django',
            style: 'shadow-emerald-500'
        },

        {
            id: 12,
            src: LARAVEL,
            title: 'Laravel',
            style: 'shadow-red-500'
        },

        {
            id: 13,
            src: MYSQL,
            title: 'MySQL',
            style: 'shadow-yellow-600'
        },

        {
            id: 14,
            src: GITHUB,
            title: 'Github',
            style: 'shadow-gray-400'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-16'>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the experience I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                tech.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 h-20 object-contain mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
