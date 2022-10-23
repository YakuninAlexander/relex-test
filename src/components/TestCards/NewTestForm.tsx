import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
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

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setTest({ ...test, [e.target.name]: e.target.value })
  }
  function onToggleHandler(e: ChangeEvent<HTMLInputElement>) {
    setTest({ ...test, [e.target.name]: e.target.checked })
  }

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(addTest(test))
  }

  return(
    <form onSubmit={onSubmitHandler}>
      <label>
        Название теста:
        <input type='text' name='title' value={test.title} onChange={onChangeHandler} />
      </label>
      <label>
        Описание теста:
        <input type='text' name='description' value={test.description} onChange={onChangeHandler} />
      </label>
      <label>
        Видимость теста:
        <input type='checkbox' name='visibility' checked={test.visibility} onChange={onToggleHandler} />
      </label>

      <QuestionsForm test={test} setTest={setTest}/>
      <input type='submit' />
      
    </form>
  )
}