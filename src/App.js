import React from 'react';
//import MyHeader from './MyHeader.js';
import Navigation from './Navigation.js';
//import MyCarousel from './MyCarousel.js';
import MyContent from './MyContent.js';
import MyFooter from './MyFooter.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.js';
import Clubs from './Clubs.js';


function App() {
  return (
     <React.Fragment>
     <Router>
             <Navigation></Navigation>
             <Routes>
               <Route path="/Home" element={<Home />}></Route>
               <Route path="/Clubs" element={<Clubs />}></Route>
             </Routes>
           </Router>
      <MyContent></MyContent>
       <MyFooter />
    </React.Fragment>
  );
}

export default App;


//import logo from './logo.svg';
//import './App.css';
////import photo from "./logo.svg";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigation from './Navigation.js';
//import MyCarousel from './MyCarousel.js';
//import MyCard from './MyCard.js';
//
////import ChampionsLeague from './ChampionsLeague.jpg';
////import BasicExample from './BasicExample';
////import { Button } from 'react-bootstrap';
////import Button from 'react-bootstrap/Button';
//
//function App() {
//  return (
//    <div>
//         <Navigation></Navigation>
//         <MyCarousel></MyCarousel>
//         <MyCard></MyCard>
//    </div>
//);
//}
//
//export default App;
