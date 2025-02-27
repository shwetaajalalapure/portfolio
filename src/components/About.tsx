import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineCode, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';
import meImage from '../assets/me1.jpeg';
import { useEffect, useState } from 'react';

const About = () => {
  const shadowColors = [
    'from-green-200/50 to-green-300/50',
    'from-blue-200/50 to-blue-300/50',
    'from-red-200/50 to-red-300/50',
    'from-orange-200/50 to-orange-300/50',
    'from-purple-200/50 to-purple-300/50',
    'from-pink-200/50 to-pink-300/50',
    'from-teal-200/50 to-teal-300/50'
  ];

  const [currentShadowIndex, setCurrentShadowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShadowIndex((prev) => (prev + 1) % shadowColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creative and detail-oriented UX/UI Designer
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
                A creative and detail-oriented UX/UI Designer with expertise in user-centered design, wireframing, prototyping, 
                and research. Passionate about crafting intuitive, visually appealing experiences, collaborating with teams, and 
                leveraging design tools to enhance usability, engagement, and innovation in digital products.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Skills & Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">User Experience Design:</span> Creating intuitive and engaging user experiences through thoughtful design.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Prototyping & Wireframing:</span> Developing detailed wireframes and interactive prototypes to visualize design concepts.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Visual Design:</span> Creating aesthetically pleasing interfaces with attention to color theory and iconography.
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
                  <h4 className="font-semibold text-gray-900">Specialization</h4>
                  <p className="text-gray-600">UI/UX Designer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiOutlineClock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">1 Year Experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiOutlineBriefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Availability</h4>
                  <p className="text-gray-600">Full Time</p>
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
                      src={meImage}
                      alt="Professional headshot of Shweta Jalalapure, UI/UX Designer"
                      className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-all duration-500 select-none pointer-events-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
                    />
                    <div 
                      className="absolute inset-0 pointer-events-none select-none" 
                      onContextMenu={(e) => e.preventDefault()}
                    ></div>
                  </div>
                </div>
                <motion.div
                  className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-green-200/50 to-green-300/50 blur-sm opacity-75"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.6, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-1 -right-1 w-64 h-64 rounded-full blur-sm -z-10 bg-gradient-to-br from-green-200/40 to-green-300/40 opacity-60"></div>
              <div className="absolute -top-1 -left-1 w-64 h-64 rounded-full blur-sm -z-10 bg-gradient-to-br from-green-200/40 to-green-300/40 opacity-60"></div>
              
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