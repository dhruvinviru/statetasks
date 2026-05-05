import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './component/Header';
import Home from './component/Home';
import Cal1 from './component/Cal1';
import Cal2 from './component/Cal2';
import Cal3 from './component/Cal3';
import Cal4 from './component/Cal4';
import Shape from './component/Shape';
import Stopwatch from './component/Stopwatch';
import Ticktack from './component/Ticktack';
import Puzzel1 from './component/Puzzel1';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Cal1', path: '/Cal1' },
  { name: 'Cal2', path: '/Cal2' },
  { name: 'Cal3', path: '/Cal3' },
  { name: 'Cal4', path: '/Cal4' },
  { name: 'Shape', path: '/Shape' },
  { name: 'Stopwatch', path: '/Stopwatch' },
  { name: 'Ticktack', path: '/Ticktack' },
  { name: 'Puzzel 1',path:'/Puzzel1'}
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
        <Route path="/Cal4" element={<Cal4 />} />
        <Route path="/Shape" element={<Shape />} />
        <Route path="/Stopwatch" element={<Stopwatch />} />
        <Route path="/Ticktack" element={<Ticktack />} />
        <Route path="/Puzzel1" element={<Puzzel1 />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
