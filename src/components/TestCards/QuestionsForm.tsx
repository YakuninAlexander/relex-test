import React from 'react';
import { ITest } from '../../data/Interfaces';
import { question } from '../../data/Questions';
import QuestionForm from './QuestionForm';

interface QuestionFormProps {
  test: ITest
  setTest: React.Dispatch<React.SetStateAction<ITest>>
}

export default function QuestionsForm({test, setTest}:QuestionFormProps) {

  function onAddHandler(event: any) {
    event.preventDefault()
    setTest({...test, questions: [...test.questions, question]});
  }
  function onDeleteHandler(id: number) {
    setTest({...test, questions: test.questions.filter((e,i) => i!==id)})
  }

  return(
    <div className='grid grid-cols-3 gap-3 auto-rows-fr justify-between'>
      {test.questions.map((e,i) => <QuestionForm key={i} id={i} deleteEnable={test.questions.length>5} onDelete={onDeleteHandler}/>)}

      <button 
        className='border border-neut-blgr-400 hover:border-neut-blgr-700 rounded-md shadow-md hover:shadow-lg text-2xl font-light italic' 
        disabled={test.questions.length===15} 
        onClick={onAddHandler}
      >
        Добавить вопрос
      </button>
    </div>
  )
}