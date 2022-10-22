import React from 'react';
import Card from './TestCards/Card';
import NewTest from './TestCards/NewTest';
import TestInfo from './TestCards/TestInfo';

export default function TestCardsList() {
  return(
    <div className='grid grid-cols-2 max-w-[1200px] mx-auto gap-5 place-items-center my-6'>

      <Card><TestInfo /></Card>
      <Card><TestInfo /></Card>
      <Card><TestInfo /></Card>
      <Card><NewTest /></Card>

    </div>
  )
}