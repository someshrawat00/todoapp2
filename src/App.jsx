import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import './index.css'
import Home from "./pages/Home/Home";
import Today from "./pages/Today/Today";
import Personal from "./pages/Personal/Personal";
import Work from "./pages/Work/Work";
import Animatedroutes from "./components/animatedroutes/animatedroutes";


const App = () => {
  
  return (
       <div id="dashboard">
         <BrowserRouter>
           <Animatedroutes/>
         </BrowserRouter>
       </div>
  )
};

export default App;
