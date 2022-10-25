import React from 'react';
import {Link} from 'react-router-dom'
import img from './avatar_9.png';

export default function Navigation() {
  return(
    <nav className='h-14 px-10 bg-pr-purple-600 text-neut-blgr-100 shadow-md flex justify-between items-center'>
      <h1 className='text-3xl font-semibold'>Relex test app</h1>
      <div className='max-h-14 text-lg'>
        <Link to='/Users' className='mr-5 hover:text-pr-vivid-50'>Статистика</Link>
        <Link to='/Tests' className='mr-6 hover:text-pr-vivid-50'>Тесты</Link>
        <Link to='/'><img src={img} alt={'avatar'} className='w-12 h-12 inline'/></Link>
      </div>
    </nav>
  )
}