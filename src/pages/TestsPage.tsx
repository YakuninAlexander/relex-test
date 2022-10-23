import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import TestCardsList from '../components/TestCardsList';
import { Navigate } from 'react-router-dom';

export default function TestsPage() {
  const auth = useSelector((state: RootState) => state.root.app.authorize)
  if (!auth ) {
    return <Navigate to="/Auth" />
  }
  
  return(
    <>
      <TestCardsList />
    </>
  )
}