import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import UsersPage from '../components/UsersPage/UsersPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="users" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
