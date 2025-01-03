"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my work and skills.",
    image: "/images/project1.jpg",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce app with secure payment integration.",
    image: "/images/project2.jpg",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard for analyzing social media metrics.",
    image: "/images/project3.jpg",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-white py-16 px-6 sm:px-12 md:px-24 lg:px-36"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
          My Projects
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Here are some of the projects I’ve worked on. Click on a project to
          learn more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-gray-100"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={project.link}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
