import React from 'react';
import Prompt from './Prompt';

export default function PromptsList() {
  return(
    <div className='h-56 overflow-y-scroll mt-2 scr'>
      <h4 className='font semibold text-xl italic'>Attempts <small>(Scroll down)</small>:</h4>
      <ul className='border-2 list-disc'>
        <Prompt />
        <Prompt />
        <Prompt />
        <Prompt />
        <Prompt />
        <Prompt />
      </ul>
    </div>
  )
}