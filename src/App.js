import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Cal1 from './component/Cal1';

const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Task1', path: '/Cal1' }
    ];

function App() {
  return (
      <div className="App">
        <Header menu={menuItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cal1" element={<Cal1 />} />
        </Routes>
      </div>
  );
}

export default App;
