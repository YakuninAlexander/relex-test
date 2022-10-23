import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import Dropdown from '../components/Dropdown';
import avatar from './Avatar-Transparent-Images.png'

export default function Filter() {
  const users = useSelector((state:RootState) => state.root.test.users).map(user => ({id: user.userID, str: `${user.name} ${user.surname}`}))
  const tests = useSelector((state:RootState)=> state.root.test.tests).map(test => ({id: test.testID, str: test.title}))

  
  
  return (
    <div className='flex justify-between mx-6 my-10'>
      <div className='flex text-xl font-medium items-center gap-4'>
        <label>Пользователи:</label>
        {/* <img src={avatar} alt='Avatar' className='inline object-fill w-12 h-13 '/> */}
        <Dropdown data={users}/>
      </div>
      <div className='flex text-xl font-medium items-center gap-4'>
        <label>Тесты:</label>
        <Dropdown data={tests}/>
      </div>
    </div>
  )
}