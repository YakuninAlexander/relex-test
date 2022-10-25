import React from 'react';

interface CardProps {
  children: JSX.Element
}

export default function Card({children} : CardProps) {
  return(
    <div className='w-[500px] h-[300px] bg-neut-blgr-100 rounded-3xl shadow-md hover:shadow-lg border border-transparent hover:border-neut-blgr-200'>
      {children}
    </div>
  )
}