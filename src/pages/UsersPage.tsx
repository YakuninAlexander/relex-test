import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '..';
import Filter from '../components/Filter';
import StatisticsList from '../components/Statistics/StatisticsList';

export default function UsersPage() {
  const auth = useSelector((state: RootState) => state.root.app.authorize)
  if (!auth ) {
    return <Navigate to="/" />
  }
  
  return (
    <>
      <h1 className='mt-8 text-center text-5xl text-pr-purple-600 font-medium'>Статистика пользователей</h1>
      <Filter />
      <StatisticsList />
    </>
  )
}