import React, { useState } from 'react'
import AWS from '../assets/certificate/AWS Certified Cloud Practitioner (CLF-C02) COmplete Course - MALINAO.jpg'
import ChatGPT from '../assets/certificate/ChatGPT Complete Guide Learn Midjourney, ChatGPT  and More - MALINAO.jpg'
import GenAI from '../assets/certificate/GenerativeAI - MALINAO.jpg'
import Gitlab from '../assets/certificate/Introduction to Git for GitLab projects - MALINAO.jpg'
import Networking from '../assets/certificate/IT Networking Fundamentals for Complete Beginners - MALINAO.jpg'
import PreProgramming from '../assets/certificate/Pre-Programming Everything you need to know before you code - MALINAO.jpg'
import Modal from './Modal';

const Certificate = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      src: AWS
    },

    {
      id: 2,
      src: ChatGPT
    },

    {
      id: 3,
      src: GenAI
    },

    {
      id: 4,
      src: Gitlab
    },

    {
      id: 5,
      src: Networking
    },

    {
      id: 6,
      src: PreProgramming
    },
  ]

  const openModal = (src) => {
    setSelectedCertificate(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div name='certificate' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-12'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Certificate</p>
            <p className='py-6'>Here are a few of my certificates that highlight my skills and achievements</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            certificates.map(({ id, src }) => (
              
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                  <img src={src} alt="" className='w-full h-40 rounded-md duration-200 hover:scale-105' onClick={() => openModal(src)}/>
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => openModal(src)}>View</button>
                  </div>
                </div>
              
            ))
          }
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} src={selectedCertificate} />
    </div>
  )
}

export default Certificate
