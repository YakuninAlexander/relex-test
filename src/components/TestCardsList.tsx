import React from 'react';
import { useSelector } from 'react-redux';
import Card from './TestCards/Card';
import NewTest from './TestCards/NewTest';
import TestInfo from './TestCards/TestInfo';
import { RootState } from '..';
import { Link } from 'react-router-dom';

export default function TestCardsList() {
  const testState = useSelector((state: RootState) => state.root.test )
  return(
    <div className='grid grid-cols-2 max-w-[1200px] mx-auto gap-5 place-items-center my-6'>
      {testState.tests.map(e => {
        return (
          <Card key={e.testID}>
            <TestInfo 
              description={e.description} 
              testID={e.testID} 
              title={e.title} 
              questions={e.questions} 
              visibility={e.visibility} 
            />
          </Card>
        )
      })}
      <Link to='/NewTest'>
        <Card><NewTest /></Card>
      </Link>

    </div>
  )
}