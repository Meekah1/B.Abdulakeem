import React from 'react'
import { motion as Motion } from 'framer-motion'
import { Code2, Palette, Smartphone, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating visually stunning interfaces with latest design trends'
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Building websites that work perfectly on all devices'
    },
    {
      icon: Zap,
      title: 'Fast & Optimized',
      description: 'Optimizing for performance and best user experience'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Passionate developer with 3+ years of experience creating digital solutions 
            that make a difference
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Crafting Digital Excellence</h3>
            <p className="text-white/70 mb-6 text-lg">
              I'm a full-stack developer specializing in modern web technologies. 
              I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-white/70 mb-8 text-lg">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Completed', value: '50+' },
                { label: 'Happy Clients', value: '30+' },
                { label: 'Years Experience', value: '3+' },
                { label: 'Coffee Cups', value: '1000+' }
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-effect p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Profile"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </Motion.div>
        </div>

        {/* Features Grid */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <Motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl text-center hover-lift group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-white/60">{feature.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}

export default About;