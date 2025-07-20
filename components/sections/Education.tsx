import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "Bharathidasan University",
    period: "2023 - 2025",
    percentage: "70%",
    icon: "🎓"
  },
  {
    id: 2,
    degree: "Bachelor of Science (Mathematics)",
    institution: "Sudarsan Arts and Science College",
    period: "2019 - 2022",
    percentage: "81%",
    icon: "🏛️"
  }
];

const certifications = [
  {
    id: 1,
    name: "Advance Python Certification",
    issuer: "KenStack",
    year: "2025",
    duration: "6 months",
    icon: "💻"
  },
  {
    id: 2,
    name: "full stack development",
    issuer: "novi tech",
    year: "2025",
    duration:"3 months",
    icon:""
  }
  // Add more certifications here
];

export const Education = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_rgba(99,102,241,0.08)_0%,_transparent_60%)]" />
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
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building knowledge through continuous learning and academic excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-300 to-purple-300 z-0" />
              )}

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 top-20 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10 shadow-lg"
              />

              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass-card p-8 rounded-2xl max-w-lg ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-3xl">{edu.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-gradient mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        {edu.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-blue-600 font-semibold">
                    Percentage: {edu.percentage}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold font-space mb-4">
              Certifications <span className="text-gradient">🏅</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map(cert => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <p className="text-sm text-gradient">{cert.issuer} &middot; {cert.year}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">Duration:{cert.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
