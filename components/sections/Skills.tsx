
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'HTML & CSS', icon: '🌐' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Django & flask', icon: '🍃' },
  { name: 'react.js', icon: '⚛️' },
];

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Git/GitHub', icon: '🐱' },
  { name: 'MS office', icon: '🪟'},
  { name: 'pycharm', icon: '🐍' },
  { name: 'numpy', icon: '🔢' },
  { name: 'pandas', icon: '📊' },
  { name: 'matplotlib', icon: '📊'}
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-space mb-6">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-gray-800"
          >
            Programming Skills & frameworks
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-gray-800"
          >
            Tools & modules
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <SkillCard key={tool.name} skill={tool} index={index + skills.length} />
            ))}
          </div>
        </div>

        {/* Floating skill icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-10 text-4xl opacity-20"
          >
            ⚛️
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-10 text-3xl opacity-20"
          >
            🔷
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/4 text-5xl opacity-10"
          >
            💻
          </motion.div>
        </div>
      </div>
    </section>
  );
};
