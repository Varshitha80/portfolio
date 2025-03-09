// components/FloatingMenu.jsx
import { useState } from 'react';
import { FiMenu, FiX, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <motion.div
        className="bg-gray-800/80 backdrop-blur-sm rounded-full shadow-xl"
        whileHover={{ scale: 1.1 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 text-purple-400"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full right-0 mb-4 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
        >
          <div className="flex flex-col gap-3">
            <a href="/work" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
              <FiBriefcase />
              Work
            </a>
            <a href="/skills" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
              <FiCode />
              Skills
            </a>
            <a href="/about" className="flex items-center gap-2 text-gray-300 hover:text-purple-400">
              <FiUser />
              About
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}