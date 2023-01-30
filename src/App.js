import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Homepage } from './pages/Homepage'; Ici, l'import utilisé avant de changer pour le lazy rendering
const Homepage = lazy(() => import('./pages/Homepage'));
const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const Error404 = lazy(() => import('./pages/404'));

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Homepage />
            </Suspense>
          }
        />
        <Route
          path="/employee-list"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <EmployeeList />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Error404 />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
