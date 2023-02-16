import './App.css';
import LandingPage from './landing';
// import { Link } from "react-router-dom";
import NavBar from './navbar';
// import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <NavBar />
      </header>

      <main className='App-main'>
        <LandingPage />
      </main>
    </div>
  );
}


