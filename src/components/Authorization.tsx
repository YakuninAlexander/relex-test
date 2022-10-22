import React from 'react';
import img from './avatar_9.png';

export default function Authorization() {
  return(
    <form className='max-w-[500px]  mx-auto py-4 flex flex-col col mt-5 items-center rounded-lg drop-shadow-xl bg-slate-400 gap-4 content-center justify-around'>
      <img src={img} alt={'avatar'} className='w-20 h-20'/>
      <h3 className='text-2xl basis-2/8 font-medium'>Авторизация</h3>
      <div className='w-4/5 basis-2/8'>
        <input type='text' placeholder='Логин...' className='rounded  text-xl px-2 drop-shadow-md w-full'/>
      </div>

      <div className='w-4/5 basis-2/8'>
        <input type='password' placeholder='Пароль...' className='rounded text-lg px-2 drop-shadow-md w-full'/>
      </div>
      <input type='submit' className='basis-1/8 rounded bg-slate-300 px-5 font-light text-lg'/>
    </form>
  )
}