import React from 'react';
import { IAttempt } from '../../data/Interfaces';
import AttemptsList from './AttemptsList';

interface StatisticProps {
  FIO: string
  testTitle: string
  countOfPrompt: number
  correctAnswerCount: number
  percent: number
  attempts: IAttempt[]
}

export default function Statistic({FIO, testTitle, attempts, correctAnswerCount, countOfPrompt,percent}: StatisticProps) {
  return(
    <div className='max-w-sm w-full px-5 py-3 rounded-md shadow-md hover:shadow-lg bg-neut-blgr-100 border border-transparent hover:border-neut-blgr-200'>
      <h3 className='text-2xl font-light'>{FIO}</h3>
      <h3 className='text-lg font-semibold'>{testTitle}</h3>
      <p className='text-lg'>{`Кол-во попыток: ${countOfPrompt}`}</p>
      <p className='text-lg'>{`Успешно пройденные: ${correctAnswerCount}        (${percent.toFixed(2)}%)`}</p>
      <AttemptsList attempts={attempts} />
    </div>
  )
}