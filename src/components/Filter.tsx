import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import Dropdown from '../components/Dropdown';
import { getAllStat, getTestStat, getUserStat, getUserTestStat } from '../redux/actions';

export default function Filter() {
  const users = useSelector((state:RootState) => state.root.test.users).map(user => ({id: user.userID, str: `${user.name} ${user.surname}`}))
  const tests = useSelector((state:RootState)=> state.root.test.tests).map(test => ({id: test.testID, str: test.title}))
  
  const [selectedUser, setSelectedUser] = useState(-1)
  const [selectedTest, setSelectedTest] = useState(-1)

  const dispatch = useDispatch();

  if(selectedTest === -1 && selectedUser === -1) {
    dispatch(getAllStat())
  } else if(selectedTest === -1) {
    dispatch(getUserStat(selectedUser))
  } else if(selectedUser === -1) {
    dispatch(getTestStat(selectedTest))
  } else {
    dispatch(getUserTestStat(selectedUser, selectedTest))
  }

  return (
    <div className='flex justify-between text-neut-blgr-700 mx-6 my-7'>
      <div className='flex text-xl font-medium items-center gap-4'>
        <label>Пользователи:</label>
        <Dropdown data={users} setFilter={setSelectedUser}/>
      </div>
      <div className='flex text-xl font-medium items-center gap-4'>
        <label>Тесты:</label>
        <Dropdown data={tests} setFilter={setSelectedTest}/>
      </div>
    </div>
  )
}