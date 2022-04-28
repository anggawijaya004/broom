import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './Pages';
import Input from './Pages/Input';

function App() {
  return (
    <Routes>
      <Route element={<Index/>} path='/'/>
      <Route element={<Input/>} path='/add' />
    </Routes>
  );
}

export default App;
