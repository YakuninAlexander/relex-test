import React from 'react';
import { IPrompt } from '../../data/Interfaces';
import Prompt from './Prompt';

interface PromptsListProps {
  attempts: IPrompt[]
}

export default function PromptsList({attempts}: PromptsListProps) {
  return(
    <div className='h-56 overflow-y-scroll mt-2 scr'>
      <h4 className='font semibold text-xl italic'>Attempts <small>(Scroll down)</small>:</h4>
      <ul className='border-2 list-disc'>
        { attempts.map((attempt,i) => <Prompt key={i} corrects={attempt.correctAnswers} datetime={attempt.datetime} time={attempt.passingTime} />) }
      </ul>
    </div>
  )
}