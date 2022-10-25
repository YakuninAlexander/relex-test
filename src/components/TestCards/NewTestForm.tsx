import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ITest } from '../../data/Interfaces';
import { fiveQuestions } from '../../data/Questions';
import { addTest } from '../../redux/actions';
import QuestionsForm from './QuestionsForm';

export default function NewTestForm() {
  const dispatch = useDispatch();

  const [test, setTest] = useState<ITest>({
    testID: Date.now(),
    title: '',
    description: '',
    visibility: true,
    questions: fiveQuestions
  })

  const [createQuestion, setCreateQuestion] = useState(false);

  function onChangeHandler(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault()
    setTest({ ...test, [e.target.name]: e.target.value })
  }
  function onToggleHandler(e: ChangeEvent<HTMLInputElement>) {
    setTest({ ...test, [e.target.name]: e.target.checked })
  }

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(test.title.trim() !== '' && test.description.trim() !== ''){
      dispatch(addTest(test))
      setCreateQuestion(true)
    }
    else alert('Ошибка, название теста и описание не могут быть пустыми!')
  }
  

  if(createQuestion){
    return <Navigate to='/' />
  }

  return(
    <form className='m-12 py-6 px-4 bg-neut-blgr-100 border-2 border-neut-blgr-400 rounded-md shadow-md' onSubmit={(e) => onSubmitHandler(e)}>
      <h3 className='mb-3 text-2xl text-neut-blgr-800 font-light'>Создание теста</h3>
      <label className='block mb-3 text-lg text-neut-blgr-700 font-normal font-mono'>
        Название теста:
        <input maxLength={20} className='min-w-[400px] ml-2 px-1.5 bg-neut-blgr-200 focus:bg-neut-blgr-300 border border-neut-blgr-500 focus:border-2 rounded-md shadow-sm' type='text' name='title' value={test.title} onChange={onChangeHandler} />
      </label>
      <label className='block text-lg text-neut-blgr-700 font-normal font-mono mb-3'>
        Описание теста:
        <textarea className='min-w-[400px] ml-2 px-1.5 bg-neut-blgr-200 focus:bg-neut-blgr-300 border border-neut-blgr-500 focus:border-2 rounded-md shadow-sm' name='description' value={test.description} onChange={onChangeHandler} />
      </label>
      <label className='block text-lg text-neut-blgr-700 font-normal font-mono mb-3'>
        Видимость теста:
        <input className='ml-2 px-1.5 rounded-md shadow-sm outline outline-neut-blgr-500'  type='checkbox' name='visibility' checked={test.visibility} onChange={onToggleHandler} />
      </label>
      
      <QuestionsForm test={test} setTest={setTest}/>

      <div className='w-full flex'>
        <button className='pointer mt-10 mx-auto w-80 bg-pr-purple-200 border border-pr-purple-400 text-xl text-neut-blgr-900 rounded-md shadow-md' type='submit'>Создать тест</button>
      </div>
    </form>
  )
}