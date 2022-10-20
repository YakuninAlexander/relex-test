import React from 'react';
import Navigation from './components/Navigation';
import {Route, Routes} from 'react-router-dom'
import UsersPage from './pages/UsersPage';
import TestsPage from './pages/TestsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/Users' element={<UsersPage />} />
        <Route path='/Tests' element={<TestsPage />} />
      </Routes>
    </>
  );
}

export default App;
