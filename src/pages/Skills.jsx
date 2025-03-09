import { motion } from "framer-motion";
import {
  SiC, SiCplusplus, SiPython, SiMysql, SiReact, SiNodedotjs,
  SiJavascript, SiBootstrap, SiHtml5, SiCss3, SiMongodb, SiExpress,
  SiGit, SiGithub, SiPostman,SiCodepen
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: "💻",
    skills: [
      { icon: <SiReact className="text-3xl text-blue-400" />, name: "React.js", level: "Advanced", description: "Built 10+ projects using React.js" },
      { icon: <SiNodedotjs className="text-3xl text-green-500" />, name: "Node.js", level: "Intermediate", description: "Experience in building REST APIs & backend services" },
      { icon: <SiJavascript className="text-3xl text-yellow-400" />, name: "JavaScript", level: "Advanced", description: "Strong understanding of ES6+ and asynchronous programming" },
      { icon: <SiPython className="text-3xl text-blue-300" />, name: "Python", level: "Intermediate", description: "Familiar with automation scripts and Flask/Django" },
    ],
  },
  {
    title: "Database & Backend",
    icon: "🗄️",
    skills: [
      { icon: <SiMongodb className="text-3xl text-green-600" />, name: "MongoDB", level: "Intermediate", description: "Experience with NoSQL databases & Mongoose ORM" },
      { icon: <SiMysql className="text-3xl text-blue-600" />, name: "MySQL", level: "Intermediate", description: "Worked with relational databases & queries" },
      { icon: <SiExpress className="text-3xl text-gray-300" />, name: "Express.js", level: "Intermediate", description: "Developed RESTful APIs with Express.js & Node.js" },
      { icon: <SiPostman className="text-3xl text-orange-500" />, name: "Postman", level: "Advanced", description: "Proficient in API testing & debugging" },
    ],
  },
  {
    title: "Languages & Fundamentals",
    icon: "📚",
    skills: [
      { icon: <SiC className="text-3xl text-blue-400" />, name: "C", level: "Intermediate", description: "Basic understanding of data structures & algorithms" },
      { icon: <SiCplusplus className="text-3xl text-blue-600" />, name: "C++", level: "Intermediate", description: "Experience with OOP & STL" },
      { icon: <SiHtml5 className="text-3xl text-orange-500" />, name: "HTML5", level: "Advanced", description: "Proficient in semantic HTML & accessibility" },
      { icon: <SiCss3 className="text-3xl text-blue-500" />, name: "CSS3", level: "Advanced", description: "Expertise in Flexbox, Grid, and animations" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { icon: <BiLogoVisualStudio className="text-3xl text-blue-500" />, name: "VS Code", level: "Advanced", description: "Daily driver for coding & debugging" },
      { icon: <SiCodepen className="text-3xl text-white" />, name: "CodePen", level: "Intermediate", description: "Used for front-end project prototyping" },
      { icon: <SiGit className="text-3xl text-orange-600" />, name: "Git", level: "Advanced", description: "Version control & GitHub collaboration" },
      { icon: <SiGithub className="text-3xl text-gray-300" />, name: "GitHub", level: "Advanced", description: "Experienced in GitHub workflows & repositories" },
      { icon: <SiBootstrap className="text-3xl text-purple-500" />, name: "Bootstrap", level: "Intermediate", description: "Used for responsive UI design" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-900">
      <div className="max-w-6xl w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
        >
          Technical Arsenal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Technologies I’ve mastered through building scalable applications, <br className="hidden md:block" />
          with a focus on clean architecture and performance optimization.
        </motion.p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-semibold text-purple-300">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="group relative flex items-center gap-3 p-3 bg-gray-700/20 rounded-lg hover:bg-gray-700/40 transition-colors"
                  >
                    {skill.icon}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center gap-2">
                        <span 
                          className="text-gray-300 truncate"
                          aria-label={`${skill.name} - ${skill.level}`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-sm text-purple-400 whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                      <div className="hidden group-hover:block text-sm text-gray-400 mt-2 transition-opacity duration-200">
                        {skill.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}