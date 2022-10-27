import Image from 'next/image'
import React from 'react'

function LargeCard({buttonText, img, title, desc}) {
  return (
    <div className='relative mt-16 cursor-pointer '>
      <div className=' h-80 '>
        <Image
            className=' rounded-xl '
            src={img}
            layout="fill"
          objectFit='cover'
          alt='img'
        />
      </div>
      
      <div className='absolute top-12 left-10'>
        <h2 className='text-3xl font-semibold max-w-[200px] mb-2'>{title}</h2>
        <p>{desc}</p>
        <button className='text-white bg-gray-700 px-4 py-2 rounded-xl mt-3 hover:bg-gray-900 transition-all active:scale-95'>{buttonText}</button>
      </div>
      
    </div>
  )
}

export default LargeCard
