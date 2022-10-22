import React from 'react';

export default function NewTest() {
  return(
    <div className='cursor-pointer w-[500px] h-[300px] bg-orange-200 rounded-3xl shadow-md hover:outline hover:outline-orange-300 hover:shadow-lg px-4 flex items-center'>
      <div className='flex justify-around w-52 h-52 my-auto mx-auto bg-gray-200 opacity-70 rounded-full items-center'>
        <p className='text-6xl max-h-min select-none text-gray-700'>+</p>
      </div>
    </div>
  )
}