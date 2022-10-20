import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigation() {
  return(
    <nav className='flex justify-between h-14 shadow-md items-center px-10 bg-lime-200 text-blue-700'>
      <h1 className='text-3xl font-semibold'>Relex test app</h1>
      <span className='text-lg'>
        <Link to='/Users' className='mr-2 '>Users</Link>
        <Link to='/Tests'>Tests</Link>
      </span>
    </nav>
  )
}