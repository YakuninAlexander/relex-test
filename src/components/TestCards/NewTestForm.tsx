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
    <form className='border-2 border-gray-500 rounded-md shadow-md m-12 py-6 px-4' onSubmit={(e) => onSubmitHandler(e)}>
      <h3 className='text-2xl font-light mb-3'>Создание теста</h3>
      <label className='text-lg font-normal block mb-3 font-mono'>
        Название теста:
        <input maxLength={20} className='min-w-[400px]  rounded-sm shadow-sm outline outline-gray-500 ml-2 px-1.5' type='text' name='title' value={test.title} onChange={onChangeHandler} />
      </label>
      <label className='text-lg font-normal block font-mono mb-3'>
        Описание теста:
        <textarea className='min-w-[400px] rounded-sm shadow-sm outline outline-gray-500 ml-2 px-1.5' name='description' value={test.description} onChange={onChangeHandler} />
      </label>
      <label className='text-lg font-normal block font-mono mb-3'>
        Видимость теста:
        <input className='rounded-sm shadow-sm outline outline-gray-500 ml-2 px-1.5' type='checkbox' name='visibility' checked={test.visibility} onChange={onToggleHandler} />
      </label>
      
      <QuestionsForm test={test} setTest={setTest}/>

      <div className='flex w-full'>
        <button className='pointer w-80 bg-lime-300 outline outline-lime-400 rounded-md shadow-md mt-10 text-xl mx-auto' type='submit'>Создать тест</button>
      </div>
    </form>
  )
}