import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <header id="main-header">
        
        <nav><a href="" id="main-logo">Flask meetups</a></nav><h1></h1>
        
     <p>Find the one that best suits your needs</p>

    </header>
  <BrowserRouter>
  <Routes>

    
  <Route path='/' element= {<App /> }/>
  {/* <Route path="/meetup /:id" element= {<Meetupid /> }/> */}
        {/* <Route path='/login' element= {<Login/>}/> */}

           
</Routes>
        </BrowserRouter>
        
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
