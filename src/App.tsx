import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { TodosPage } from './pages/TodosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container">
          <Routes>
            <Route element={<LoginPage />} path="/" />
            <Route element={<TodosPage />} path="/todo" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
