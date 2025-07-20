import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { about } from '@/components/sections/about';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleHireMe = () => {
    setCurrentSection(sections.findIndex(s => s.name === 'Contact'));
  };

  const handleViewWork = () => {
    setCurrentSection(sections.findIndex(s => s.name === 'Projects'));
  };

  const sections = [
    { component: () => <Hero onHireMe={handleHireMe} onViewWork={handleViewWork} />, name: 'Home' },
    { component: about, name: 'About us' }, // Using Hero for About as well
    { component: Education, name: 'Education' },
    { component: Skills, name: 'Skills' },
    { component: Projects, name: 'Projects' },
    { component: Contact, name: 'Contact' },
  ];

  const handleSectionChange = (sectionIndex: number) => {
    if (sectionIndex === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(sectionIndex);
      setIsTransitioning(false);
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleSectionChange(Math.min(currentSection + 1, sections.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleSectionChange(Math.max(currentSection - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Section Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="space-y-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSectionChange(index)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="min-h-screen"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Loading overlay during transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
