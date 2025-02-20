import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Social Media Automation',
    description: 'A comprehensive social media management system I developed that automates email responses, content posting, and email handling. This project streamlines social media operations and maintains consistent brand presence across platforms.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1170&auto=format&fit=crop',
    tags: ['Python', 'Automation', 'Social Media APIs', 'Email Integration'],
    liveUrl: '#'
  },
  {
    title: 'AI Voice Proposal Generator',
    description: 'My innovative AI application that transforms voice or text input into professional business proposals. Users can generate proposals through voice commands or text input, with automatic formatting and email sending capabilities.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop',
    tags: ['Python', 'AI', 'Speech Recognition', 'Email Automation'],
    liveUrl: '#'
  },
  {
    title: 'Mobile Application Development',
    description: 'A React Native mobile app I built with modern UI/UX principles. Implemented features like real-time data processing and offline capabilities. The app demonstrates my expertise in creating responsive and user-friendly mobile experiences.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'UI/UX', 'Mobile Development'],
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
            Here are some of the key projects I've developed, showcasing my skills in automation, AI integration, and mobile app development
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
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                    onClick={() => {
                      alert('Portfolio details will be updated soon!');
                    }}
                  >
                    View Project Details
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
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