import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Component/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { About, Contact, Home, Project } from './Pages';


function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='About' element = {<About />}/>
        <Route path='Project' element = {<Project />}/>
        <Route path='Contact' element = {<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
