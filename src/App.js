import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Cal1 from './component/Cal1';

const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Cal1', path: '/Cal1' }
    ];

function App() {
  return (
      <div className="App">
        <Header menu={menuItems} />
        <Routes>
          {menuItems.map((item, index) => (
            <Route key={index} path={item.path} element={<item.name />} />
          ))}
        </Routes>
      </div>
  );
}

export default App;
