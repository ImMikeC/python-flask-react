import './App.css';
import { LandingPage } from './landing.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {
  return (
    <div className='App'>
      <h1>Protected React Router</h1>
      <Routes>
      <Route exact path="/" component={LandingPage} />
      </Routes>
    </div>
  );
}

export default App;
