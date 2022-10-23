import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '..';
import Filter from '../components/Filter';
import StatisticsList from '../components/Statistics/StatisticsList';

export default function UsersPage() {
  const auth = useSelector((state: RootState) => state.root.app.authorize)
  if (!auth ) {
    return <Navigate to="/Auth" />
  }
  
  return (
    <>
      <Filter />
      <StatisticsList />
    </>
  )
}