import React from 'react';

interface CardProps {
  children: JSX.Element
}

export default function Card({children} : CardProps) {
  return(
    <div className='w-[500px] h-[300px] bg-neut-blgr-100 rounded-3xl shadow-md hover:outline hover:outline-neut-blgr-300 hover:shadow-lg'>
      {children}
    </div>
  )
}