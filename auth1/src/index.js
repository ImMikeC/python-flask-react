import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import { AppLayout } from './app.layout';
import { LandingPage } from './landing.page';
import { ProtectedRoute } from './protected.route';

function App() {
  return (
    <div className='App'>

      <h1>Protected React Router</h1>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <ProtectedRoute
          exact
          path='/app'
          component={AppLayout}
        />
      </Switch>
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


