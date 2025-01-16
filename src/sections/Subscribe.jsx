import React from 'react'
import Button from '../Components/Button'

const Subscribe = () => {
  return (
    <section className=' flex flex-wrap justify-center items-center max-md:flex-col gap-10 max-container' 
    id='contact-us'>
             
      <h3 className='text-4xl leading-[68px]  font-palanquin font-bold'>Sign up for <span className='text-coral-red '>Updates</span> & Newsletter</h3>
     
      <div className=' w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe