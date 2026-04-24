import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/Home/HomePage';
// Other imports will be added by Person 1 and 3

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Person 3 will add listing detail routes here */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
