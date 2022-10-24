import React from 'react';
import Navigation from './components/Navigation';
import {Route, Routes} from 'react-router-dom'
import UsersPage from './pages/UsersPage';
import TestsPage from './pages/TestsPage';
import AuthorizationPage from './pages/AuthorizationPage';
import NewTestPage from './pages/NewTestPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/Users' element={<UsersPage />}></Route>
        <Route path='/' element={<TestsPage />}></Route>
        <Route path='/Auth' element={<AuthorizationPage />} />
        <Route path='/NewTest' element={<NewTestPage />} />
      </Routes>
    </>
  );
}

export default App;
