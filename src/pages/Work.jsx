// pages/Work.jsx
import ProjectCard from '../components/ProjectCard';

export default function Work() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-900">
       <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Launchpad to Excellence: My Full-Stack Journey Begins Here
        </h1>
        <p className="text-gray-300 text-center italic max-w-2xl mx-auto mb-12">
          "Crafted with precision, powered by MERN — discover projects that reflect my dedication to clean code and problem-solving."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Existing Projects */}
          <ProjectCard
            title="Insta Share"
            description="Social media platform with real-time interactions"
            features={[
              "JWT authentication & authorization",
              "CRUD operations for posts/comments",
              "REST API with Express.js middleware",
              "MongoDB database design",
              "React.js frontend with responsive design"
            ]}
            tech={["React.js", "Node.js", "MongoDB", "JWT", "REST API"]}
            githubLink="https://github.com/Varshitha80/Instashare"
            liveLink="https://insta-share-xzvp.onrender.com"
            imageUrl="https://i.ibb.co/tTPY3hzN/Screenshot-161.png" // Add image URL
          />

          <ProjectCard
            title="Jobby"
            description="Job search portal with advanced filtering"
            features={[
              "User authentication system",
              "Complex query filters with MongoDB",
              "RESTful API endpoints",
              "Context API for state management",
              "Full-stack deployment on Render"
            ]}
            tech={["React.js", "Express.js", "MongoDB", "JWT", "REST API"]}
            githubLink="https://github.com/Varshitha80/jobbyapp"
            liveLink="https://jobby-website.onrender.com"
            imageUrl="https://i.ibb.co/twN97BTn/jobby-web.png" // Add image URL
          />

          {/* New E-Commerce Project */}
          <ProjectCard
            title="NXT Trendz"
            description="Full-featured e-commerce platform with secure transactions"
            features={[
              "Product catalog management system",
              "Shopping cart persistence using localStorage",
              "JWT-based user authentication",
              "React Context API for state management",
              "Responsive design across all devices"
            ]}
            tech={[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT",
              "React Router",
              "Context API",
              "REST API"
            ]}
            liveLink="https://ecomnxttrends.ccbp.tech/"
            imageUrl="https://i.ibb.co/JwBPx3VJ/project-1-jpg.png" // Add image URL
          />
        </div>
      </div>
    </section>
  );
}