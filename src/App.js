import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Cal1 from './component/Cal1';
import Cal2 from './component/Cal2';

const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Cal1', path: '/Cal1' },
        { name: 'Cal2', path: '/Cal2' }
    ];

function App() {
  return (
      <div className="App">
        <Header menu={menuItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cal1" element={<Cal1 />} />
          <Route path="/Cal2" element={<Cal2 />} />
        </Routes>
      </div>
  );
}


export default App;
