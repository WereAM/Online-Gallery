import './App.css';
import LandingPage from './pages/landing';
import NavBar from './components/navbar';
import UsersPage from './pages/users';
import { Routes, Route, Outlet } from 'react-router-dom';
import AlbumsPage from './pages/albums';
import DefaultUser from './components/defaultUser';
import { ContextWrapper } from './components/UserContext';
import { UserContext } from './components/UserContext';
import { useContext } from 'react';

export default function App() {
 
  return (
    <>
     <ContextWrapper>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/albums' element={<AlbumsPage />} />
          <Route path='/login' element={<DefaultUser />} />
        </Route>
      </Routes>
      </ContextWrapper>
    </>
  );
}

  function MainLayout(){
    return(
      <>
        <header className="App-header">
          <NavBar />
        </header>

        <main className='App-main'>
          <Outlet />
        </main>
      </>
    );     
  } 
