import React from 'react';
import img from './avatar_9.png';

export default function Personal() {
  return(
    <div className='max-w-[500px]  mx-auto py-4 flex flex-col col mt-5 items-center rounded-lg drop-shadow-xl bg-slate-400 gap-4 content-center justify-around'>
      <img src={img} alt={'avatar'} className='w-20 h-20'/>
      <h3 className='text-2xl basis-2/8 font-medium'>Личный кабинет</h3>
      <label className='flex flex-col w-4/5'>
        Логин
        <input type='text' placeholder='Логин...' value='Administrator' className='rounded mt-1  text-xl px-2 drop-shadow-md w-full' readOnly/>
      </label>
      <button className='basis-1/8 rounded bg-slate-300 px-5 font-light text-lg'>Выход</button>
    </div>
  )
}