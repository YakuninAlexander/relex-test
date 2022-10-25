import React from 'react';
import { IAttempt } from '../../data/Interfaces';
import Attempt from './Attempt';

interface PromptsListProps {
  attempts: IAttempt[]
}

export default function AttemptsList({attempts}: PromptsListProps) {
  return(
    <div className='h-56 mt-2 overflow-y-scroll'>
      <h4 className='font-light text-xl italic'>Attempts <small>(Scroll down)</small>:</h4>
      <ul className='rounded-md border-2 border-neutral-400 list-disc'>
        { attempts.map((attempt,i) => <Attempt key={i} corrects={attempt.correctAnswers} datetime={attempt.datetime} time={attempt.passingTime} />) }
      </ul>
    </div>
  )
}