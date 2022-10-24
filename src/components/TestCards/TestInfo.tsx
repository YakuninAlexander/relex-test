import React from 'react';
import { useDispatch } from 'react-redux';
import { ITest } from '../../data/Interfaces';
import { changeVisibility, deleteTest } from '../../redux/actions';



export default function TestInfo({testID, title, description, questions, visibility}:ITest) {
  const dispatch = useDispatch();
  return(
    <div className='grid grid-rows-[15%_65%_5%_15%] w-full h-full px-4'>
      <h3 className='text-3xl font-light pt-1 text-center'>{title}</h3>
      <p className='text-lg'>{description}</p>
      
      <p className='items-end text-xs text-right font-light'>{`${questions.length} questions`}</p>

      <div className='items-center flex justify-between'>
        <label className='font-medium'>
          <input onChange={() => dispatch(changeVisibility(testID, !visibility))} checked={visibility} className='mr-2' type='checkbox'/>
          Видимость теста
        </label>

        <button 
          onClick={() => dispatch(deleteTest(testID))} 
          className='px-1 rounded-md bg-red-500 hover:bg-red-600 hover:text-white shadow-md'
        >
          Delete test
        </button>

      </div>
    </div>
  )
}