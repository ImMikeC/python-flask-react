import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import { AppLayout } from './app.layout';
import LandingPage from './landing.page';
import ProtectedRoute from './protected.route';

function App() {
  return (
    <div className='App'>

      <h1>Protected React Router</h1>
      
        <Route path='/' component={LandingPage} exact />
        <ProtectedRoute  exact path='/app' component={AppLayout} />    
    </div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);


