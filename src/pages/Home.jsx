import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import CodingProfiles from "../components/CodingProfiles";

export default function Home() {
  return (
    <section className="min-h-screen relative">
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-8 max-w-4xl w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Varshitha Vemula
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Building digital solutions that combine creativity with technical excellence
          </motion.p>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/varshitha-vemula/"
              target="_blank"
              className="text-2xl text-gray-300 hover:text-purple-400"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/Varshitha80"
              target="_blank"
              className="text-2xl text-gray-300 hover:text-purple-400"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:varshithavemula148@gmail.com"
              className="text-2xl text-gray-300 hover:text-purple-400"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </section>

      <CodingProfiles />
    </section>
  );
}
