import './App.css';
import NavigationBar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Venue from './Pages/venue/Venue';
import Contact from './Pages/contact/Contact';
import FAQ from './Pages/faq/FAQ';
import Jobs from './Pages/jobs/Jobs';
import Testimonials from "./Pages/testimonials/Testimonials";
import Footer from './Components/footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IntensiveMatPlus from "./Pages/intensiveMat/IntensiveMatPlus";
import AdvanceMat from './Pages/advanceMat/AdvanceMat';
import InjuryAndSpecial from './Pages/injuryAndSpecial/InjuryAndSpecial';
import IntensiveReformer from './Pages/intensiveReformer/IntensiveReformer';
import Workshops from './Pages/workshops/Workshops';
import Zenga from './Pages/zenga/Zenga';
import TotalBarre from './Pages/totalBarre/TotalBarre';
import AdvancedReformer from './Pages/advancedReformer/AdvancedReformer';
import ICCB from './Pages/iccb/ICCB';
import Login from './Pages/login/Login';


function App() {
  return (
    <div className="app">
      <Router>
      <NavigationBar/>
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path = "About" element = {<About/>} />
        <Route path = 'Venue' element = {<Venue />} />
        <Route path = "Contact" element = {<Contact/>} />
        <Route path = "FAQ" element = {<FAQ/>} />
        <Route path = "Jobs" element = {<Jobs/>} />
        <Route path = "Testimonials" element = {<Testimonials/>} />
        {/* courses route */}
        <Route path = "IntensiveMatPlus" element = {<IntensiveMatPlus/>} />
        <Route path = "AdvanceMat" element = {<AdvanceMat/>} />
        <Route path = "InjuryAndSpecial" element = {<InjuryAndSpecial/>} />
        <Route path = "IntensiveReformer" element = {<IntensiveReformer/>} />
        <Route path = "Workshops" element = {<Workshops/>} />
        <Route path = "Zenga" element = {<Zenga/>} />
        <Route path = "TotalBarre" element = {<TotalBarre/>} />
        <Route path = "AdvancedReformer" element = {<AdvancedReformer/>} />
        <Route path = "ICCB" element = {<ICCB />} />
        <Route path = "Login" element = {<Login />} />
        

        
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
