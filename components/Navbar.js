import React, { useState } from 'react';
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon, UserIcon, UsersIcon } from '@heroicons/react/24/solid'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router';
import Image from 'next/image';



function Navbar({placeholder}) {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [passanger, setPassanger] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleChange = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const handleClear = () => {
    setLocation("");
  }

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        passanger
      }
    })

    handleClear();
  }

  return (
    
    <div className='sticky top-0 z-50'>
      <div className='bg-white shadow-md flex justify-between items-center p-3 '>
      <div className='hidden sm:inline-block'>
          <Image
            className=' cursor-pointer object-contain'
            
            loader={() => "https://logos-download.com/wp-content/uploads/2016/03/Airbnb_logo.png"}
            onClick={() => router.push("/")}
            src="https://logos-download.com/wp-content/uploads/2016/03/Airbnb_logo.png"
            height={"32px"}
            width={"90px"}
            alt="img"
        />
      </div>
      <div className='flex flex-grow items-center justify-between border-2  h-6 py-5 mx-4 rounded-full max-w-xl '>
              <input className='items-center mx-2 px-2   flex-grow bg-transparent outline-none'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type='text' 
                  placeholder={placeholder || 'Start Your Search'}
                  />
              <MagnifyingGlassIcon
                  className='h-4 px-3 items-center text-white bg-airbnb m-3 rounded-full cursor-pointer'
              />
      </div>
      
      <div className='flex items-center'>
              <p className='hidden md:inline-block font-semibold cursor-pointer rounded-full hover:bg-gray-100 transition-all px-4 py-2'>Become a host</p>
              <GlobeAltIcon className='h-9 mr-3 cursor-pointer hover:bg-gray-100 rounded-full p-2 transition-all' />
              <div className='flex space-x-2 border-2 p-2 rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md'>
                  <Bars3Icon className='h-5 cursor-pointer'/>
                  <UserCircleIcon className='h-5 cursor-pointer'/>
              </div>
      </div>
      </div>

        {location &&
         
            <div className='flex flex-col bg-white  items-center mt-10 mx-auto pb-10'>

                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FF5A5F"]}
                  onChange={handleChange}
                />
              
            
            <div className='flex my-5 items-center text-center justify-center '>
              <h1 className=' font-semibold text-2xl flex-grow pr-6 ' >Number of guests</h1>
              <UsersIcon className='h-4 text-gray-500 items-center pr-2'/>
            <input
              className='w-12 border-2'
              value={passanger}
              onChange={(e) => setPassanger(e.target.value)}
              type='number'
            />
            </div>
            <div className='flex space-x-11'>
            <button
              className='px-5 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-all active:scale-95'
              type='submit'
              onClick={handleClear}>Clear</button>
            <button
              onClick={handleSearch}
              className='px-5 py-1 bg-airbnb rounded-full text-white hover:bg-red-600 transition-all active:scale-95' type='submit'>Search</button>
            </div>

          </div>

        }

      </div>
  )
}

export default Navbar
