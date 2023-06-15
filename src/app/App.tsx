import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from '../components/Profile/Profile';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
