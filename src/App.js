import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import DetailPage from './pages/Detail';
import Stats from './pages/Stats';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/stats' element={<Stats />} />
          <Route exact path='/detail/:id' element={<DetailPage />} />
          <Route index path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
