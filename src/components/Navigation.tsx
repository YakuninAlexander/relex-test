import React from 'react';
import {Link} from 'react-router-dom'
import img from './avatar_9.png';

export default function Navigation() {
  return(
    <nav className='flex justify-between h-14 shadow-md items-center px-10 bg-lime-200 text-blue-700'>
      <h1 className='text-3xl font-semibold'>Relex test app</h1>
      <div className='max-h-14 text-lg'>
        <Link to='/Users' className='mr-2 hover:text-red-800'>Users</Link>
        <Link to='/' className='mr-6 hover:text-red-800'>Tests</Link>
        <Link to='/Auth'><img src={img} alt={'avatar'} className='inline w-12 h-12'/></Link>
      </div>
    </nav>
  )
}