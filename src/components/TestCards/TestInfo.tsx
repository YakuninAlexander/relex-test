import React from 'react';
import { useDispatch } from 'react-redux';
import { ITest } from '../../data/Interfaces';
import { changeVisibility, deleteTest } from '../../redux/actions';



export default function TestInfo({testID, title, description, questions, visibility}:ITest) {
  const dispatch = useDispatch();
  return(
    <div className='grid grid-rows-[15%_65%_5%_15%] w-full h-full px-4 '>
      <h3 className='text-3xl text-neut-blgr-800 font-light pt-1 text-center'>{title}</h3>
      <p className='text-lg text-neutral-700'>{description}</p>
      
      <p className='items-end text-neutral-700 text-xs text-right font-light'>{`${questions.length} questions`}</p>

      <div className='items-center flex justify-between'>
        <label className='font-medium text-neutral-600'>
          <input onChange={() => dispatch(changeVisibility(testID, !visibility))} checked={visibility} className='mr-2' type='checkbox'/>
          Видимость теста
        </label>

        <button 
          onClick={() => dispatch(deleteTest(testID))} 
          className='px-1 rounded-md bg-pr-purple-200 hover:bg-pr-purple-300 text-neut-blgr-900 hover:text-neut-blgr-50 shadow-md'
        >
          Удалить тест
        </button>

      </div>
    </div>
  )
}