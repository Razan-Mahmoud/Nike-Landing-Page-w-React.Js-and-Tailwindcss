import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    
    const handleClick = () => {
        console.log(imgURL)
        console.log(bigShoeImage)
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 cursor-pointer max-sm:flex-1  ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
        rounded-xl `} onClick={handleClick}>
          
            <div className={`flex justify-center items-center sm:w-40 sm:h-40  max-sm:p-4 bg-card bg-center bg-cover rounded-xl`} >
                
                <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103.34} className='object-contain' />
            </div>
        </div>
    )
}

export default ShoeCard