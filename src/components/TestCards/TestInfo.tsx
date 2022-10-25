import React from 'react';
import { useDispatch } from 'react-redux';
import { ITest } from '../../data/Interfaces';
import { changeVisibility, deleteTest } from '../../redux/actions';



export default function TestInfo({testID, title, description, questions, visibility}:ITest) {
  const dispatch = useDispatch();
  return(
    <div className='w-full h-full px-4 grid grid-rows-[15%_65%_5%_15%]'>
      <h3 className='pt-1 text-3xl text-neut-blgr-800 text-center font-light'>{title}</h3>
      <p className='text-lg text-neutral-700'>{description}</p>
      
      <p className='text-neutral-700 text-xs text-right font-light'>{`${questions.length} questions`}</p>

      <div className='flex justify-between items-center'>
        <label className='text-neutral-600 font-medium'>
          <input onChange={() => dispatch(changeVisibility(testID, !visibility))} checked={visibility} className='mr-2' type='checkbox'/>
          Видимость теста
        </label>

        <button 
          onClick={() => dispatch(deleteTest(testID))} 
          className='px-1 bg-pr-purple-200 hover:bg-pr-purple-300 text-neut-blgr-900 hover:text-neut-blgr-50 rounded-md shadow-md'
        >
          Удалить тест
        </button>

      </div>
    </div>
  )
}