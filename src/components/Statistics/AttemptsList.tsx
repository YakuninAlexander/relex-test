import React from 'react';
import { IAttempt } from '../../data/Interfaces';
import Attempt from './Attempt';

interface PromptsListProps {
  attempts: IAttempt[]
}

export default function AttemptsList({attempts}: PromptsListProps) {
  return(
    <div className='h-56 overflow-y-scroll mt-2 scr'>
      <h4 className='font semibold text-xl italic'>Attempts <small>(Scroll down)</small>:</h4>
      <ul className='border-2 list-disc'>
        { attempts.map((attempt,i) => <Attempt key={i} corrects={attempt.correctAnswers} datetime={attempt.datetime} time={attempt.passingTime} />) }
      </ul>
    </div>
  )
}