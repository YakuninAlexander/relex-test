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
    <fieldset className='border border-neut-blgr-400 rounded-md shadow-md hover:shadow-lg text-neut-blgr-700 hover:border-neut-blgr-700  p-3 flex flex-col gap-2 '>
      <label className='flex flex-row justify-between mb-3 text-neut-blgr-700'>
        Вопрос:
        <input className='w-80 rounded-sm shadow-sm outline text-neut-blgr-700 outline-neut-blgr-200 px-1.5' type='text' value={state.question} name='question' onChange={onChangeHandler} />

      </label>
      <div className='flex flex-row justify-between text-neut-blgr-700'>
        <input type='radio' checked={1===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 1)}/>
        <input className='w-80 rounded-sm shadow-sm outline text-neut-blgr-700 outline-neut-blgr-200 px-1.5' type='text' value={state.firstAnswer} name='firstAnswer' onChange={onChangeHandler} />
      </div>

      <div className='flex flex-row justify-between text-neut-blgr-700'>
        <input type='radio' checked={2===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 2)}/>
        <input className='w-80 rounded-sm shadow-sm outline text-neut-blgr-700 outline-neut-blgr-200 px-1.5' type='text' value={state.secondAnswer} name='secondAnswer' onChange={onChangeHandler} />
      </div>

      <div className='flex flex-row justify-between text-neut-blgr-700'>
        <input type='radio' checked={3===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 3)}/>
        <input className='w-80 rounded-sm shadow-sm outline text-neut-blgr-700 outline-neut-blgr-200 px-1.5' type='text' value={state.thirdAnswer} name='thirdAnswer' onChange={onChangeHandler} />
      </div>

      <div className='flex flex-row justify-between'>
        <input type='radio' checked={4===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 4)}/>
        <input className='w-80 rounded-sm shadow-sm outline text-neut-blgr-700 outline-neut-blgr-200 px-1.5' type='text' value={state.fourthAnswer} name='fourthAnswer' onChange={onChangeHandler} />
      </div>

      <button className='mt-4 rounded-sm shadow-sm bg-pr-purple-100 outline outline-pr-purple-200 hover:bg-pr-purple-200 hover:outline-pr-purple-300 hover:text-neut-blgr-900 text-neut-blgr-700' disabled={!deleteEnable} onClick={(e) => onDelete(id)}>Удалить</button>
    </fieldset>
  )
}