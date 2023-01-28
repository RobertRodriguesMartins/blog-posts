import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import { CreateNews, CreateUser, Login } from './components/';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/create" element={<CreateNews />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
