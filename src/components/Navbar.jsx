// components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all ${
      isHome ? 'bg-gray-900/80 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-6xl mx-auto pl-6 py-3"> {/* Increased left padding */}
        <Link 
          to="/" 
          className={`text-2xl font-bold tracking-tight ${
            isHome 
              ? 'text-purple-400'
              : 'text-purple-400 hover:text-purple-300'
          } transition-all duration-300`}
        >
          <motion.span
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="inline-block"
          >
            Varshitha
            <span className="text-purple-400">.</span> {/* Consistent color */}
          </motion.span>
        </Link>
      </div>

      {/* Desktop Nav - Only on Home */}
      {isHome && (
        <nav className="hidden md:flex gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link to="/work" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 px-3 py-2 rounded-lg transition-all">
          <FiBriefcase className="text-lg" />
            Work
          </Link>
          <Link to="/skills" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 px-3 py-2 rounded-lg transition-all">
          <FiCode className="text-lg" />
            Skills
          </Link>
          <Link to="/about" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 px-3 py-2 rounded-lg transition-all">
          <FiUser className='text-lg'/>
            About
          </Link>
        </nav>
      )}
    </header>
  );
}