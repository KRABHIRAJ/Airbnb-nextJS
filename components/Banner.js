import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className='relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]'>
        <Image
              src='/images/banner.webp'
              className='object-center object-cover'
              alt='banner_img'
              layout='fill'
        />
        <div className='absolute flex flex-col w-full top-1/2'>
              <h2 className='font-semibold text-center'>Not sure where to go? Perfect</h2>   
              &apos;      
            <button className='bg-white mx-auto  w-fit px-4 py-2 rounded-full  font-semibold text-[#1a61cc] shadow-sm hover:bg-gray-50 transition-all active:scale-95'>I'm Flexible</button>
        </div>
        
    </div>
  )
}

export default Banner
