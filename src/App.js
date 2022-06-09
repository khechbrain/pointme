import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './components/admin/AdminPage';
import LoginPage from './components/pages/login/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <div className='App container-fluid p-0 m-0'>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/admin/*' element={<AdminPage/>} />
        <Route path='/' element={<Navigate to={'/login'}/>} />
      </Routes>
    </div>
  );
}

export default App;
