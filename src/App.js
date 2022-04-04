import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>assignment 9 started.</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
