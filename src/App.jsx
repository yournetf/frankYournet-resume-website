import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Routes/Home';
import About from './Routes/University';
import './App.css'
import University from './Routes/University';


function App() {

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
            <Home/>
          </>
        }/>

        <Route path='/University' element={
          <>
            <University/>
          </>
        }/>


      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
