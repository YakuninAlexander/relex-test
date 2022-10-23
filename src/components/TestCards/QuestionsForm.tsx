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
    <div>
      {test.questions.map((e,i) => <QuestionForm key={i} id={i} deleteEnable={test.questions.length>5} onDelete={onDeleteHandler}/>)}

      <button disabled={test.questions.length===15} onClick={onAddHandler}>Add question</button>
    </div>
  )
}