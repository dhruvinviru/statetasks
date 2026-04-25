import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './component/Header';
import Home from './component/Home';
import Cal1 from './component/Cal1';
import Cal2 from './component/Cal2';
import Cal3 from './component/Cal3';
import Shape from './component/Shape';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Cal1', path: '/Cal1' },
  { name: 'Cal2', path: '/Cal2' },
  { name: 'Cal3', path: '/Cal3' },
  { name: 'Shape', path: '/Shape' },
];

function App() {
  return (
    <div className="App">
      <Header menu={menuItems} />
      <Routes>
        <Route path="/" element={<Home page={menuItems} />} />
        <Route path="/Cal1" element={<Cal1 />} />
        <Route path="/Cal2" element={<Cal2 />} />
        <Route path="/Cal3" element={<Cal3 />} />
        <Route path="/Shape" element={<Shape />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
