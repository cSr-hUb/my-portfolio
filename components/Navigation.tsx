import { motion } from 'framer-motion';
import { useState } from 'react';

interface NavigationProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
}

export const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { name: 'Home', id: 0 },
    { name: 'About', id: 1 },
    { name: 'Education', id: 2 },
    { name: 'Skills', id: 3 },
    { name: 'Projects', id: 4 },
    { name: 'Contact', id: 5 },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass-card rounded-full px-6 py-3">
          <ul className="flex space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    currentSection === section.id
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section.name}
                  {currentSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-6 right-6 z-50 md:hidden glass-card w-12 h-12 rounded-full flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="flex flex-col space-y-1">
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gray-700"
          />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700"
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-full bg-white/95 backdrop-blur-xl z-40 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => {
                onSectionChange(section.id);
                setIsMenuOpen(false);
              }}
              className={`text-2xl font-semibold transition-all duration-300 ${
                currentSection === section.id
                  ? 'text-gradient'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {section.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};
