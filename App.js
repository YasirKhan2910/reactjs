import logo from './logo.svg';
import './App.css';
import Page from './Components/Page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SuperHero from './Components/SuperHero';
import SuperHeroEdit from './Components/SuperHeroEdit';
import UserRegister from './Components/UserRegister';
import Userlogin from './Components/Userlogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar /> 
      <Routes>
        <Route path='/'element={<UserRegister/>}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Userlogin' element={<Userlogin />}/>
        <Route path='/SuperHero/' element={<SuperHero />}/>
        <Route path='/superedit' element={<SuperHeroEdit />}/> 
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
