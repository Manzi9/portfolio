import React from "react";
import Image from "next/image";
import holidoughImg from "@/app/assets/holidough-sacha-home.png";
import autotraderImg from "@/app/assets/autotrader-home.png";
import weatherImg from "@/app/assets/weather-app-js.png";
//TODO
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HoliDough",
      description:
        "A full stack holiday budgeting app built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: holidoughImg,
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com",
    },
    {
      id: 2,
      title: "Numberplate Search",
      description:
        "A numberplate search app built with React, Node.js, and MongoDB.",
      technologies: [
        "React",
        "TypeScript",
        "Socket.io",
        "Node.js",
        "PostgreSQL",
      ],
      image: autotraderImg,
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current weather conditions and forecasts using external APIs with interactive charts and maps.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      image: weatherImg,
      github: "https://github.com/yourusername/project3",
      live: "https://project3-demo.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: autotraderImg,
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
              {/* Project Image */}
              <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                  priority={project.id === 1}
                />
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
