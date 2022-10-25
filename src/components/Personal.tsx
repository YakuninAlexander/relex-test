import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions';
import img from './avatar_9.png';

export default function Personal() {
  const dispatch = useDispatch()

  return(
    <>
    <h1 className='mt-8 text-center text-5xl text-pr-purple-600 font-medium'>Личный кабинет</h1>
    <div className='max-w-[500px] mx-auto mt-5 py-4 bg-neut-blgr-400 rounded-lg drop-shadow-xl flex flex-col items-center gap-4 content-center justify-around'>
      <img src={img} alt={'avatar'} className='w-20 h-20'/>
      <label className='w-4/5 flex flex-col'>
        Логин
        <input type='text' placeholder='Логин...' value='Administrator' className='w-full mt-1 px-2 rounded text-xl drop-shadow-md' readOnly/>
      </label>
      <button onClick={() => dispatch(logOut())} className='px-5 bg-slate-300 rounded text-lg font-light basis-1/8'>Выход</button>
    </div>
    </>
  )
}