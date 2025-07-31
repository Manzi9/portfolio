import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "/project1.jpg", // You can add project images to public folder
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: [
        "React",
        "TypeScript",
        "Socket.io",
        "Node.js",
        "PostgreSQL",
      ],
      image: "/project2.jpg",
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current weather conditions and forecasts using external APIs with interactive charts and maps.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      image: "/project3.jpg",
      github: "https://github.com/yourusername/project3",
      live: "https://project3-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/project4.jpg",
      github: "https://github.com/yourusername/project4",
      live: "https://project4-demo.com",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Project Image</p>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-center text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-center text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-colors font-medium">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
