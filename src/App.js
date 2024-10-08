import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {Portfolio} from './General/Portfolio/Portfolio';
import {About} from './General/About';
import {Contact} from './General/Contact';
import {Navigation} from './Navigation';
import {Footer} from './Footer';
import {Errorpage} from './Error';
import { HearMe } from './General/Portfolio/HearMe';
import { Ecomapp } from './General/Portfolio/EcomApp';
import { FnBWebsite } from './General/Portfolio/FnBWebsite';
import Gobckup from './Functions/Gobckup'; 

function App() {

  return (
    <HashRouter>
        <div className="App" >
          <header>
          <Gobckup />
          <Navigation />
          </header>

          <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/HearingAidApp' element={<HearMe/>}/>
            <Route path='/SpectacleE-commerceApp' element={<Ecomapp/>}/>
            <Route path='/FnBWebsite' element={<FnBWebsite/>}/>
            <Route path='*' element={<Errorpage/>}/>
          </Routes>
          </main>
          <Footer/>
        </div>
      </HashRouter>
  );
}

export default App;
