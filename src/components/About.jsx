import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>I’m Fourest Glenn Malinao, full stack developer. Over the course of my studies, I’ve developed a strong foundation in both front-end and back-end technologies. My projects have ranged from creating dynamic user interfaces to designing robust server-side solutions, allowing me to craft comprehensive and user-friendly web applications.</p>
        <br />
        <p className='text-xl'>As I transition into the professional world, I’m excited to bring my passion for coding and problem-solving to new challenges. I’m committed to continuous learning and eager to contribute to innovative projects and collaborate with talented teams.</p>
      </div>
    </div>
  )
}

export default About
