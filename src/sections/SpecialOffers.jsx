import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex gap-10 max-container max-sm:flex-col-reverse items-center flex-wrap'>
     
<div className='flex-1 '>
  <img src={offer} width={773} height={687} className='object-contain w-full' alt="" />
</div>


        <div className='flex flex-1 flex-col'>
      

      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        <span className='text-coral-red '>Special </span> Offers         
     
      </h2>
      
      <p className=' mt-4 lg:max-w-lg info-text '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellendus excepturi veritatis fugiat sequi saepe nobis, nulla necessitatibus nihil esse!</p>
      <p className='mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit tempore accusantium ut eos officiis?</p>
      
      <div className='mt-11 flex flex-wrap gap-4'>
      
      <Button label="View details" iconURL={arrowRight} />
      <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />
      </div>
         
             
            </div>
    </section>
  )
}

export default SpecialOffers