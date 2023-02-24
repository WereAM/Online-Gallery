import './App.css';
import LandingPage from './pages/landing';
import NavBar from './components/navbar';
import HomePage from './pages/home';
import UsersPage from './pages/users';
import { Routes, Route, Outlet } from 'react-router-dom';
import AlbumsPage from './pages/albums';
import DefaultUser from './components/defaultUser';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/albums' element={<AlbumsPage />} />
          <Route path='/login' element={<DefaultUser />} />
        </Route>
      </Routes>
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



