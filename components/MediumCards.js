import Image from 'next/image'
import React from 'react'

function MediumCards({img , title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transition duration-300 ease-out'>
      <Image
        className='rounded-md'
        loader={() => img}
        src={img}
        height="250px"
        width="250px"
       />
          <p className='font-semibold'>{title}</p>
    </div>
  )
}

export default MediumCards
