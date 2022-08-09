import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AddEnquete from './view/AddEnquete';
import Home from './view/Home';


function App() {
  return (
    <div className='gradient-custom'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' element={<AddEnquete />} />
      </Routes>
    </div>
  );
}

export default App;
