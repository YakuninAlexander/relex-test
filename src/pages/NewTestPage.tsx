import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '..';
import NewTestForm from '../components/TestCards/NewTestForm';

export default function NewTestPage() {
  const auth = useSelector((state:RootState) => state.root.app.authorize);

  if(!auth) {
    return <Navigate to='/' />
  }
  return(
    <>
      <NewTestForm />
    </>
  );
}