import React from 'react';
import Statistic from './Statistics/Statistic';

export default function StatisticsList() {
  return(
    <div className='grid grid-cols-3 gap-x-5 gap-y-8 align-center items-center justify-items-center mx-10 my-7'>
      <Statistic />
      <Statistic />
      <Statistic />
      <Statistic />
      <Statistic />
    </div>
  )
}