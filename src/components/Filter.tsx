import React from 'react';
import Dropdown from '../components/Dropdown';
import avatar from './Avatar-Transparent-Images.png'

export default function Filter() {
  return (
    <div className='flex justify-between mx-6 my-10'>
      <div className='flex text-xl font-medium items-center gap-4'>
        <label>Пользователи:</label>
        {/* <img src={avatar} alt='Avatar' className='inline object-fill w-12 h-13 '/> */}
        <Dropdown />
      </div>
      <div className='flex text-xl font-medium items-center gap-4'>
        <label>Тесты:</label>
        <Dropdown />
      </div>
    </div>
  )
}