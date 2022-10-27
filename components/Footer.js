import React from 'react'

function Footer() {
  return (
    <div className='grid md:grid-cols-4 mt-8 bg-gray-200 py-5 px-24 md:p-5 rounded-xl gap-y-6'>
        <div className='space-y-1 md:max-w-[150px] lg:max-w-[200px]'>
              <h2 className='font-semibold text-lg'>Support</h2>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Help Centre</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900' >Supporting people with disabilities</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Report a neighbourhood concern</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Cancellation options</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Our COVID-19 Response</p>
        </div>
        <div className='space-y-1 md:max-w-[150px] lg:max-w-[200px]'>
              <h2 className='font-semibold text-lg'>Community</h2>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Airbnb.org: disaster relief housing</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Support Afghan refugees</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Combating discrimination</p>
        </div>
        <div className='space-y-1 md:max-w-[150px] lg:max-w-[200px]'>
              <h2 className='font-semibold text-lg'>Hosting</h2>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Try hosting</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>AirCover for Hosts</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Explore hosting resources</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>How to host responsibly</p>
        </div>
        <div className='space-y-1 md:max-w-[150px] lg:max-w-[200px]'>
              <h2 className='font-semibold text-lg'>Airbnb</h2>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Newsroom</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Learn about new features</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Letter from our founders</p>
              <p className='text-gray-600 cursor-pointer hover:underline hover:text-gray-900'>Investors</p>
        </div>
    </div>
  )
}

export default Footer;
