import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Homepage } from './pages/Homepage'; Ici, l'import utilisé avant de changer pour le lazy rendering
const Homepage = lazy(() => import('./pages/Homepage'));
const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const Error404 = lazy(() => import('./pages/404'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
