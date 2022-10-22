import React from 'react';
import PromptsList from './PromptsList';

export default function Statistic() {
  return(
    <div className='rounded-md shadow-md bg-gray-100 max-w-sm w-full px-5 py-3 hover:outline hover:outline-gray-300 hover:shadow-lg'>
      <h3 className='text-2xl font-light'>FIO</h3>
      <h3 className='text-lg font-semibold'>Test Title</h3>
      <p className='text-lg'>Count of Prompt</p>
      <p className='text-lg'>Count of Successful and %</p>
      <PromptsList />
    </div>
  )
}