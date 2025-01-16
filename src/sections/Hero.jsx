import React, { useState } from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'


const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section id='home' className='w-full flex max-container justify-center min-h-screen gap-4 xl:flex-row flex-wrap'>

      <div className='flex flex-col lg:w-2/4 justify-center items-start  max-xl:px-16 pt-20'>

        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>

        <h1 className='mt-10 font-bold font-palanquin text-8xl max-sm:leading-[82px]  max-sm:text-[72px] '>
         
          <span className='lg:bg-white lg:whitespace-nowrap z-20 relative pr-10'>The New Arrivals</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span>           Shoes
        </h1>

        <p className='font-montserrat text-slate-gray mt-6 mb-10 text-lg leading-8 sm:max-w-sm'>Discover stylish Nike arrivals, qualaity comfort, and innovation for your active life.</p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className='flex justify-center items-start w-full flex-wrap mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='font-palanquin font-bold text-4xl'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center relative xl:min-h-screen bg-primary bg-hero bg-cover bg-center max-xl:py-40 md:px-4'>
        {/**/}
        <img src={bigShoeImage} alt="shoe collection" width={590} height={410} className='object-contain relative z-10  ' />


        <div className='flex sm:gap-4 gap-2 absolute  bottom-0 max-sm:px-6 '>
         
          {shoes.map((shoe, index) => (
            <div key={index} >
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => { setBigShoeImage(shoe) }
              } bigShoeImage="bigShoeImage" />
            </div>

          ))}
        </div>

      </div>

    </section>
  );
}

export default Hero