// components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const ProjectCard = ({ 
  title,
  description,
  features,
  tech,
  githubLink,
  liveLink,
  imageUrl, // New prop for image URL
  role = "Full-Stack Developer"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-purple-400/30 transition-all"
    >
      {/* Role Badge */}
      <div className="absolute top-3 right-3 bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs">
        {role}
      </div>

      <div className="flex flex-col h-full gap-4">
        {/* Image Preview */}
      
        {imageUrl && (
  <div className="relative w-full h-48 rounded-lg overflow-hidden mt-8"> {/* Added mt-8 here */}
    <img
      src={imageUrl}
      alt={`${title} Preview`}
      className="object-cover w-full h-full" // Changed from fill to explicit dimensions
    />
  </div>
)}

        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-1">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        {/* Key Features */}
        {features && (
          <ul className="flex-1 space-y-2">
            {features.map((feature, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-2 text-gray-300 text-sm"
              >
                <span className="text-purple-400 mt-1">▹</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((technology, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700/30 text-gray-300 rounded-full text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-gray-700/50 pt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="GitHub repository"
            >
              <FiGithub className="text-xl" />
              <span className="text-sm">Source Code</span>
            </a>
          )}
          
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="Live demo"
            >
              <FiExternalLink className="text-xl" />
              <span className="text-sm">
                {githubLink ? 'Live Demo' : 'View Demo'}
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;