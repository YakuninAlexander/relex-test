import React, { useState } from 'react';

export default function Dropdown() {
  const [vis, setVis] = useState<boolean>(false);
  return(
    <div className='relative mx-auto w-[560px] font-light'>
      <input 
        type='text'
        className='cursor-pointer border py-2 px-4 w-full h-[42px] mb-2 text-center'
        value={'Click me'}
        onClick={() => setVis(!vis) }
        readOnly
      />
      { vis && <ul className='z-50 list-none text-center absolute top-[42px] left-0 right-0 overflow-y-scroll max-h-[200px] shadow-md bg-white'>
        {/* { data?.map(user => (
          <li 
            key={user.id}
            className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
          >
            { user.login }
          </li>
        )) } */}
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 1
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 2
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 3
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 1
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 2
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 3
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 1
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 2
        </li>
        <li 
          className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
        >
          Test 3
        </li>
      </ul> }
    </div>
  )
}