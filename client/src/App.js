import './App.css';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';

// components
import Navbar from './components/Navbar';

// context
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <main>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<SinglePost />} />
        </Routes>
      </main>
    </UserContextProvider>
  );
}

export default App;
