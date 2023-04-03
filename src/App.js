import './App.css';
import {
     BrowserRouter,
     Routes,
     Route
} from 'react-router-dom'

//Importing the Nav1 components
import DownloadApp from './Components/Nav_1/DownloadApp'
import AdmissionEnquiryForm from './Components/Nav_1/AdmissionEnquiryForm';
import OnlineAdmissions from './Components/Nav_1/OnlineAdmissions'
import NewsEvents from './Components/Nav_1/NewsEvents'
import Downloads from './Components/Nav_1/Downloads'
import FAQs from './Components/Nav_1/FAQs'
import Contact from './Components/Nav_1/Contact'
import Navbar from './Components/Navbar';
import Login from './Components/Nav_1/Login';

//Importing the Nav2 components
import Aboutus from './Components/Nav_2/Aboutus'
import Preprimary from './Components/Nav_2/Preprimary'
import Primary from './Components/Nav_2/Primary'
import Highschool from './Components/Nav_2/Highschool'
import Studentlife from './Components/Nav_2/Studentlife'
import Achievements from './Components/Nav_2/Achievements'
import Facilities from './Components/Nav_2/Facilities'
import Uniforms from './Components/Nav_2/Uniforms'
import Gallery from './Components/Nav_2/Gallery'
import Careers from './Components/Nav_2/Careers'
import Home from './Components/Nav_1/Home';



function App() {
  return (
    <div className="App">
        <BrowserRouter> 
        <Navbar fixed="top"/>  
                  {/* adding the routing to Nav1 components*/}
             <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/downloadapp' element={<DownloadApp/>}/>
                  <Route path='/admissionenquiryform' element={<AdmissionEnquiryForm/>}/>
                  <Route path='/onlineadmission' element={<OnlineAdmissions/>}/>
                  <Route path='/newsevents' element={<NewsEvents/>}/>
                  <Route path='/download' element={<Downloads/>}/>
                  <Route path='/faqs' element={<FAQs/>}/>
                  <Route path='/contact' element={<Contact/>}/> 
                  <Route path='/login' element={<Login/>}/>
              </Routes>
                 {/* adding the routing to Nav2 components*/}
              <Routes>
                  <Route path='/aboutus' element={<Aboutus/>}/>
                  <Route path='/preprimary' element={<Preprimary/>}/>
                  <Route path='/primary' element={<Primary/>}/>
                  <Route path='/highschool' element={<Highschool/>}/>
                  <Route path='/studentlife' element={<Studentlife/>}/>
                  <Route path='/achievements' element={<Achievements/>}/>
                  <Route path='/facilities' element={<Facilities/>}/> 
                  <Route path='/uniforms' element={<Uniforms/>}/> 
                  <Route path='/gallery' element={<Gallery/>}/> 
                  <Route path='/careers' element={<Careers/>}/> 
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
