import React from 'react';
import Navigation from './components/Navigation';
import {Route, Routes} from 'react-router-dom'
import UsersPage from './pages/UsersPage';
import TestsPage from './pages/TestsPage';
import AuthorizationPage from './pages/AuthorizationPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/Users' element={<UsersPage />} />
        <Route path='/' element={<TestsPage />} />
        <Route path='/Auth' element={<AuthorizationPage />} />
      </Routes>
    </>
  );
}

export default App;
