// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingMenu from './components/FloatingMenu';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Navbar />
      <FloatingMenu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}