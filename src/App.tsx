import React from 'react';
import MainView from './Views/MainView'
import BidenEsView from './Views/BidenEsView';
import {BrowserRouter, Routes,  Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainView/>} />
      <Route path='/ebinBiden' element={<BidenEsView/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
