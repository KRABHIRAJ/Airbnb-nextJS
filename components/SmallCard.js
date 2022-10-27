import Image from 'next/image';
import React from 'react';

function SmallCard({distance, img, location}) {
  return (
      <div className='flex space-x-4 py-3 px-2 mr-4 cursor-pointer rounded-xl hover:bg-gray-50 hover:scale-105 transition duration-200 ease-out'>
          <div className='h-4' >
          <Image 
                  loader={() => img}
                  className="object-contain  rounded-md"
                  src={img}
                  width="50px"
                  height="50px"
                  alt='img'
            />
          </div>
        <div className='cursor-pointer'>
              <h2 className='font-bold tracking-wide'>{location}</h2>
              <p className='text-gray-500'>{distance}</p>
        </div>
    </div>
  )
}

export default SmallCard;
