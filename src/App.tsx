import React from 'react';
import { Link, Route, Routes, Navigate } from "react-router-dom";
import { Button } from 'antd';

import './App.css';
import notFound from './assets/images/404.png'
import LayoutWrapper from './layout/Layout';
import Home from './pages/home/Home';
import CharacterDetailPage from './pages/character-detail/CharacterDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
          <Route path="/404-Not-Found" element={<NoMatch />} />
          <Route
            path="*"
            element={<Navigate to="/404-Not-Found" replace />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

function NoMatch() {
  return (
    <div style={{ padding: '20px' }}>
      <img src={notFound} alt="404" />
      <Button type="primary">
        <Link to="/">Go to the home page</Link>
      </Button>
    </div>
  );
}
