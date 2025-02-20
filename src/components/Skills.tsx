import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Web Scraping', level: 90 },
      { name: 'Chrome Extensions', level: 90 },
    ],
  },
  {
    category: 'Specialized Skills',
    skills: [
      { name: 'Automation', level: 90 },
      { name: 'Browser Extensions', level: 90 },
      { name: 'Data Extraction', level: 90 },
      { name: 'Expo Router', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-indigo-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Social Media Automation',
              'Custom Software Development',
              'Mobile App Development',
              'AI Integration',
              'Data Extraction',
              'Chrome Extension Development',
              'Figma (UI Design)',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 