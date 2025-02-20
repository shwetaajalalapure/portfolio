import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineCode, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate Full Stack Developer driven by consistency and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm a passionate developer specializing in web development, automation, and mobile app development.
                With expertise in web scraping, automation scripts, and mobile app development using React Native and Expo,
                I create efficient and innovative solutions for modern business needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I have experience in creating automated solutions for social media management, web scraping projects,
                and developing mobile applications with AI integration. My focus is on delivering high-quality,
                customized software solutions that meet specific business requirements.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values & Work Ethic</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Consistency & Excellence:</span> I believe in maintaining high standards and delivering consistent quality in every project.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Continuous Growth:</span> I'm dedicated to continuous learning and improving my skills to stay ahead in technology.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Discipline & Dedication:</span> I approach each project with strong work ethic and commitment to achieving the best results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiOutlineLocationMarker className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Bangalore, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiOutlineCode className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Development</h4>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiOutlineClock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">1 Year</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiOutlineBriefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Availability</h4>
                  <p className="text-gray-600">Freelance Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative z-20"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-3">
                  <div className="aspect-[4/5] relative rounded-xl overflow-hidden">
                    <img
                      src="/src/assets/me1.jpeg"
                      alt="Professional headshot of a Full Stack Developer"
                      className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-100/60 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-100/60 rounded-full blur-2xl -z-10"></div>
              
              {/* Additional decorative dots */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-600/20"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 