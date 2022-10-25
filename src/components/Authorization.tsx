import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/actions';
import img from './avatar_9.png';

export default function Authorization() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(auth({ login, password }))
  }

  function loginOnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setLogin(e.target.value);
  }
  function passwordOnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(e.target.value);
  }


  const dispatch = useDispatch();
  return(
    <>
      <h1 className='mt-8 text-center text-5xl text-pr-purple-600 font-medium'>Авторизация</h1>
      <form onSubmit={submitHandler} className='max-w-[500px]  mx-auto py-4 flex flex-col col mt-5 items-center rounded-lg drop-shadow-xl bg-neut-blgr-400 gap-4 content-center justify-around'>
        <img src={img} alt={'avatar'} className='w-20 h-20'/>
        <div className='w-4/5 basis-2/8'>
          <input onChange={loginOnChangeHandler} type='text' value={login} placeholder='Логин...' className='rounded  text-xl px-2 drop-shadow-md w-full'/>
        </div>

        <div className='w-4/5 basis-2/8'>
          <input onChange={passwordOnChangeHandler} value={password} type='password' placeholder='Пароль...' className='rounded text-lg px-2 drop-shadow-md w-full'/>
        </div>
        <button type='submit' className='basis-1/8 rounded bg-slate-300 px-5 font-light text-lg'>Войти</button>
      </form>
    </>
  )
}