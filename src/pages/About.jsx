// pages/About.jsx
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FiFileText } from 'react-icons/fi';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="glass-card p-8 max-w-4xl w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl font-bold mb-8 text-purple-400">
            Building Bridges Between Logic & Creativity
          </h1>

          <div className="space-y-8">
            {/* Story Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-purple-300 font-semibold">Electronics engineer turned coder  </span> 
                with a passion for solving real-world problems through clean code. 
                My journey through <span className="text-purple-200">80+ LeetCode challenges</span> and 
                <span className="text-purple-200"> 4 full-stack projects</span> has honed my ability to:
              </p>
              
              <ul className="list-disc list-inside text-gray-400 space-y-3 pl-4">
                <li>Transform complex requirements into <span className="text-purple-200">scalable solutions</span></li>
                <li>Optimize API response times by <span className="text-purple-200">40%+</span> through efficient algorithms</li>
                <li>Maintain <span className="text-purple-200">100% project completion rate</span> with modular code practices</li>
              </ul>
            </div>

            {/* Proof Points Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SiLeetcode className="text-2xl text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-300">Code & Conquer</h3>
                </div>
                <p className="text-gray-400">
                  Daily DSA practice with focus on:<br />
                  <span className="text-purple-200">• Array/String manipulation<br />
                  • Optimal time-space complexity<br />
                  • Real-world problem patterns</span>
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FiFileText className="text-2xl text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-300">Education</h3>
                </div>
                <p className="text-gray-400">
                  B.Tech in ECE @ Vignan’s Lara Institute of Technology and Science<br />
                  <span className="text-purple-200">8.4 CGPA</span><br />
                  <span className="text-sm italic">Key Courses:C, OS, Computer Networks Digital Circuits, VLSI </span>
                </p>
              </div>
            </div>

            {/* Core Philosophy */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">Development Mantra</h3>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-400 italic">
                  "Clean code is not just about working solutions, but creating 
                  <span className="text-purple-200"> maintainable systems</span> that 
                  <span className="text-purple-200"> scale gracefully</span> under real-world demands."
                </p>
              </div>
            </div>

            {/* Strategic CTA */}
            <div className="mt-12 text-center space-y-6">
              <p className="text-lg text-gray-300">
              🚀 Ready to convert technical expertise into business value?
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://www.linkedin.com/in/varshitha-vemula/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all"
                >
                  Let's Collaborate
                </a>
                <a 
                  href="https://drive.google.com/file/d/11xPPfAzWLIq5s8G9aZvN0FlBFoKmwRQh/view?usp=sharing"
                  target='_blank'
                  rel='noopener noreferrer'
                  className="flex items-center gap-2 border border-purple-500 text-purple-300 hover:bg-purple-900/20 px-6 py-3 rounded-lg transition-all"
                  download
                >
                  <FiFileText className="text-xl" />
                  View My Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}