
import './App.css';
import { React } from "react";
import Switch from "react-js-switch";
import Search from './Components/Searchform';
import Index from './Components/Index';
import Flightbooking from './Components/Flightbooking';


function App() {
  return (
   <div className='App'>
    <img src='https://thumbs.dreamstime.com/b/passenger-airplane-flying-above-clouds-view-window-plane-to-amazing-sky-beautiful-clouds-passenger-airplane-flying-112676322.jpg'/>
      <div className='main'>
      
        <Index />
      </div>
   </div>
    
  );
}

export default App;
