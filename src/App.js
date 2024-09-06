import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {Portfolio} from './General/Portfolio/Portfolio';
import {About} from './General/About';
import {Navigation} from './Navigation';
import {Footer} from './Footer';
import {Errorpage} from './Error';
import { HearMe } from './General/Portfolio/HearMe';
import { Ecomapp } from './General/Portfolio/EcomApp';
import { FnBWebsite } from './General/Portfolio/FnBWebsite';

function App() {

  return (
    <BrowserRouter basename='/Rianne_Studio'>
        <div className="App" >
          <Navigation />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Rianne_Studio/About' element={<About/>}/>
            <Route path='/Rianne_Studio/Portfolio' element={<Portfolio/>}/>
            <Route path='/Rianne_Studio/HearingAidApp' element={<HearMe/>}/>
            <Route path='/Rianne_Studio/SpectacleE-commerceApp' element={<Ecomapp/>}/>
            <Route path='/Rianne_Studio/FnBWebsite' element={<FnBWebsite/>}/>
            <Route path='*' element={<Errorpage/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
