import './App.css';
import Main from './maincomp';
import { BrowserRouter, Route,Routes,Link,NavLink } from 'react-router-dom';
import Aboutus from './aboutUs';
import Braches from './branches';
import Contactus from './contactUs';
import Studentlogin from './studentlogin';
import Adminlogin from './adminlogin';

function App() {
  return (
    <div id="body">


<div>
      <BrowserRouter>
         
          <Routes>
            <Route path="/" element={<Main/>}></Route>
              <Route path="/aboutus" element={<Aboutus/>}/>
              <Route path="/contactus" element={<Contactus/>}/>
              <Route path="/branches" element={<Braches/>}/>
              <Route path="/studentlogin" element={<Studentlogin/>}/>
              <Route path="/adminlogin" element={<Adminlogin/>}/>
          </Routes>
          </BrowserRouter>
      </div>
      
      
    </div>
  );
}

export default App;
