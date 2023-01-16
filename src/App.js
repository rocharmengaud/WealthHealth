import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { Error404 } from './pages/404';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
