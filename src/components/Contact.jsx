import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.name)) {
      newErrors.name = 'Name must contain only letters and spaces';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Email is not valid';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      e.target.submit();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 mt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form 
            action="https://getform.io/f/bjjedrob" 
            method='POST' 
            className='flex flex-col w-full md:w-1/2'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <input 
                type="text" 
                name='name' 
                placeholder='Enter your name' 
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
            </div>

            <div className='mb-4'>
              <input 
                type="text" 
                name='email' 
                placeholder='Enter your email' 
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
            </div>

            <div className='mb-4'>
              <textarea 
                name="message" 
                placeholder='Enter your message' 
                rows={10} 
                className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                value={formValues.message}
                onChange={handleChange}
              />
              {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
            </div>

            <button 
              type='submit' 
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
