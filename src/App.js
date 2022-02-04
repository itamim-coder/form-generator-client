import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home'
import CreateField from '../src/components/CreateField'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navigate } from 'react-router-dom';

import Header from './components/Header';
import SingleForm from './components/SingleForm';
import CategoryInfo from './components/CategoryInfo';


function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Header></Header>
    <Routes>
    
       <Route path="/*" element={<Navigate to= "/home" />} />
       <Route path="/home*" element={<Home/>} />
    
       <Route path="/createform" element={<CreateField />} />
       <Route path="/forminfo/:id" element={<SingleForm />} />
       <Route path="/categoryinfo" element={<CategoryInfo />} />
    
      
    </Routes>      
      
    </BrowserRouter>
   
  </div>
  );
}

export default App;
