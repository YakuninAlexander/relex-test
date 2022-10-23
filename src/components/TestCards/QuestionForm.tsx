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
    <fieldset className='border mx-2'>
      <input type='text' value={state.question} name='question' onChange={onChangeHandler} />
      <div>
        <input type='radio' checked={1===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 1)}/>
        <input type='text' value={state.firstAnswer} name='firstAnswer' onChange={onChangeHandler} />
      </div>

      <div>
        <input type='radio' checked={2===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 2)}/>
        <input type='text' value={state.secondAnswer} name='secondAnswer' onChange={onChangeHandler} />
      </div>

      <div>
        <input type='radio' checked={3===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 3)}/>
        <input type='text' value={state.thirdAnswer} name='thirdAnswer' onChange={onChangeHandler} />
      </div>

      <div>
        <input type='radio' checked={4===state.correctAnswer} onChange={(e) => onChangeCorrectHandler(e, 4)}/>
        <input type='text' value={state.fourthAnswer} name='fourthAnswer' onChange={onChangeHandler} />
        
      </div>

      <button disabled={!deleteEnable} onClick={() => onDelete(id)}>Удалить</button>
    </fieldset>
  )
}