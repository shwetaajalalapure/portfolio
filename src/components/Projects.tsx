import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Workspace Website',
    description: 'Designed a seamless, productivity-focused workspace platform with an intuitive UI. Enhanced user experience with modern layouts, interactive dashboards, and responsive design.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop',
    tags: ['User Experience Design', 'User Interface Design', 'Wireframing', 'Figma', 'Wix Studio'],
    liveUrl: '#'
  },
  {
    title: 'Astrology Website',
    description: 'Created an engaging astrology platform with immersive visuals and interactive elements. Optimized user flow for personalized horoscope readings and seamless navigation.',
    image: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1170&auto=format&fit=crop',
    tags: ['Visual Design', 'Interactive Design', 'User Flow', 'Canva', 'Wix Editor'],
    liveUrl: '#'
  },
  {
    title: 'Crane Industries Website',
    description: 'Developed an industrial-grade website with a robust, scalable design. Focused on accessibility, structured information, and high-performance web architecture.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1170&auto=format&fit=crop',
    tags: ['Information Architecture', 'UI Design', 'Adobe Illustrator', 'Responsive Design', 'Figma'],
    liveUrl: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my key design projects, showcasing my skills in UI/UX design and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-110 filter brightness-95 contrast-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm bg-black/30">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1 min-h-[100px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm text-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 