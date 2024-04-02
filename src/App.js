import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='App'>
    <Router>
    <Toaster
      position="top-right"
      reverseOrder={true}
    />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
