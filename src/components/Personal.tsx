import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions';
import img from './avatar_9.png';

export default function Personal() {
  const dispatch = useDispatch()

  return(
    <>
    <h1 className='mt-8 text-center text-5xl text-pr-purple-600 font-medium'>Личный кабинет</h1>
    <div className='max-w-[500px]  mx-auto py-4 flex flex-col col mt-5 items-center rounded-lg drop-shadow-xl bg-neut-blgr-400 gap-4 content-center justify-around'>
      <img src={img} alt={'avatar'} className='w-20 h-20'/>
      <label className='flex flex-col w-4/5'>
        Логин
        <input type='text' placeholder='Логин...' value='Administrator' className='rounded mt-1  text-xl px-2 drop-shadow-md w-full' readOnly/>
      </label>
      <button onClick={() => dispatch(logOut())} className='basis-1/8 rounded bg-slate-300 px-5 font-light text-lg'>Выход</button>
    </div>
    </>
  )
}