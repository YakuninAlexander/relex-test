import React, { ChangeEvent, useState } from 'react';

interface QuestionFormProps{
  deleteEnable: boolean
  id: number
  onDelete: (id:number) => void
}

export default function QuestionForm({deleteEnable, id, onDelete}: QuestionFormProps) {
  const [state, setState] = useState({
    question: '',
    firstAnswer:'', 
    secondAnswer: '', 
    thirdAnswer:'', 
    fourthAnswer:'',
    correctAnswer: 1
  })

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setState({...state, [e.target.name]: e.target.value})
  }

  function onChangeCorrectHandler(e: ChangeEvent<HTMLInputElement>, correct: number) {
    setState({...state, correctAnswer: correct})
  }

  return(
    <fieldset 
      className='p-3 border border-neut-blgr-400 hover:border-neut-blgr-700 rounded-md shadow-md hover:shadow-lg text-neut-blgr-700 flex flex-col gap-2'
    >
      <label className='mb-3 text-neut-blgr-700 flex flex-row justify-between'>
        Вопрос:
        <input 
          className='w-80 px-1.5 rounded-md shadow-sm border border-neut-blgr-200 text-neut-blgr-700' 
          type='text' 
          value={state.question} 
          name='question' 
          onChange={onChangeHandler} 
        />
      </label>

      <div className='flex flex-row justify-between text-neut-blgr-700'>
        <input type='radio' checked={1===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 1)}/>
        <input 
          className='w-80 px-1.5 rounded-md shadow-sm border border-neut-blgr-200 text-neut-blgr-700' 
          type='text' 
          value={state.firstAnswer} 
          name='firstAnswer' 
          onChange={onChangeHandler} 
        />
      </div>

      <div className='flex flex-row  justify-between text-neut-blgr-700'>
        <input type='radio' checked={2===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 2)}/>
        <input 
          className='w-80 px-1.5 rounded-md shadow-sm border border-neut-blgr-200 text-neut-blgr-700' 
          type='text' 
          value={state.secondAnswer} 
          name='secondAnswer' 
          onChange={onChangeHandler} 
        />
      </div>

      <div className='flex flex-row justify-between text-neut-blgr-700'>
        <input type='radio' checked={3===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 3)}/>
        <input 
          className='w-80 px-1.5 rounded-md shadow-sm border border-neut-blgr-200 text-neut-blgr-700' 
          type='text' 
          value={state.thirdAnswer} 
          name='thirdAnswer' 
          onChange={onChangeHandler} 
        />
      </div>

      <div className='flex flex-row justify-between'>
        <input type='radio' checked={4===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 4)}/>
        <input 
          className='w-80 px-1.5 rounded-md shadow-sm border border-neut-blgr-200 text-neut-blgr-700' 
          type='text' 
          value={state.fourthAnswer} 
          name='fourthAnswer' 
          onChange={onChangeHandler} 
        />
      </div>

      <button type='button' className='mt-4 rounded-md shadow-sm bg-pr-purple-100 hover:bg-pr-purple-200 border border-pr-purple-200 hover:border-pr-purple-300 text-neut-blgr-700 hover:text-neut-blgr-900' disabled={!deleteEnable} onClick={(e) => onDelete(id)}>Удалить</button>
    </fieldset>
  )
}