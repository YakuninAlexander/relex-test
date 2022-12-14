import React from 'react';
import Statistic from './Statistic';
import { useSelector } from 'react-redux';
import { RootState } from '../..';

export default function StatisticsList() {
  const stats = useSelector((state:RootState) => state.root.test.statistics)
  return(
    <div className='mx-10 my-7 grid grid-cols-3 gap-x-5 gap-y-8 align-center items-center justify-items-center'>
      {stats.map((stat,i) => 
        <Statistic 
          FIO={stat.FIO}
          attempts={stat.attempts}
          correctAnswerCount={stat.correctsAnswerCount}
          countOfPrompt={stat.attemptsCount}
          percent={stat.correctsAnswerCount/stat.attemptsCount * 100}
          testTitle={stat.testTitle}
          key={i}
        />
      )}
    </div>
  )
}