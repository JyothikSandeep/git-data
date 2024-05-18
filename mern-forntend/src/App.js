import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import { Routing } from './Routing';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Routing/>}>
            <Route path='/'index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
