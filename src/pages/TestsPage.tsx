import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import TestCardsList from '../components/TestCardsList';
import { Navigate } from 'react-router-dom';

export default function TestsPage() {
  const auth = useSelector((state: RootState) => state.root.app.authorize)
  if (!auth ) {
    return <Navigate to="/" />
  }
  
  return(
    <>
      <h1 className='mt-8 text-center text-5xl text-pr-purple-600 font-medium'>Тесты</h1>
      <TestCardsList />
    </>
  )
}