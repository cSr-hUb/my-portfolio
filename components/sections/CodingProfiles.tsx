
import { motion } from 'framer-motion';

const profiles = [
  {
    id: 1,
    name: "LeetCode",
    username: "@developer",
    description: "1000+ problems solved",
    stats: "Top 5% globally",
    icon: "🧩",
    color: "from-orange-400 to-red-500",
    url: "#"
  },
  {
    id: 2,
    name: "GitHub",
    username: "@developer",
    description: "50+ repositories",
    stats: "1000+ contributions",
    icon: "🐱",
    color: "from-gray-600 to-gray-800",
    url: "#"
  },
  {
    id: 3,
    name: "SkillRack",
    username: "@developer",
    description: "Expert level",
    stats: "500+ challenges",
    icon: "⚡",
    color: "from-blue-500 to-indigo-600",
    url: "#"
  },
  {
    id: 4,
    name: "CodeChef",
    username: "@developer",
    description: "4-star coder",
    stats: "200+ contests",
    icon: "👨‍🍳",
    color: "from-yellow-500 to-orange-500",
    url: "#"
  },
  {
    id: 5,
    name: "HackerRank",
    username: "@developer",
    description: "Gold badges",
    stats: "Top 10% rank",
    icon: "🏅",
    color: "from-green-500 to-teal-600",
    url: "#"
  },
  {
    id: 6,
    name: "Codeforces",
    username: "@developer",
    description: "Expert level",
    stats: "1600+ rating",
    icon: "🎯",
    color: "from-purple-500 to-pink-600",
    url: "#"
  }
];

export const CodingProfiles = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]" />
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
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing algorithmic skills and competitive programming achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block"
            >
              <div className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{profile.icon}</span>
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="w-3 h-3 bg-green-400 rounded-full"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                    {profile.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-1">
                    {profile.username}
                  </p>
                  
                  <p className="text-gray-700 mb-3">
                    {profile.description}
                  </p>

                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${profile.color} text-white rounded-full text-sm font-semibold`}>
                    {profile.stats}
                  </div>

                  {/* Hover effect arrow */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="absolute top-6 right-6 text-gray-400"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Competitive Programming Stats</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-gradient">2000+</div>
                <div className="text-sm text-gray-600">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-gray-600">Contests</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">Top 5%</div>
                <div className="text-sm text-gray-600">Global Ranking</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating coding icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-10 text-4xl opacity-20"
          >
            💻
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-10 text-3xl opacity-20"
          >
            🏆
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/4 text-5xl opacity-10"
          >
            ⚡
          </motion.div>
        </div>
      </div>
    </section>
  );
};
