import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Vue.js', 'Firebase', 'SCSS', 'PWA'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasting and location services',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'API', 'Chart.js', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-2xl overflow-hidden hover-lift group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''}`}>
                <div className={`relative overflow-hidden ${
                  project.featured ? 'lg:w-1/2' : 'h-48'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                <div className={`p-6 flex flex-col justify-between ${
                  project.featured ? 'lg:w-1/2' : ''
                }`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group/link"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group/link"
                    >
                      <Github size={18} />
                      <span>Code</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="glass-effect text-white px-8 py-3 rounded-full font-semibold hover-lift border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects