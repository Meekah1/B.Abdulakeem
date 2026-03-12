import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { 
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiFirebase,
  SiTrello,
  // SiNetlify,
  // SiVercel,
  SiWix,
  SiCanva,
  SiTailwindcss,
  SiFigma
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 65 },
        { name: 'Firebase', icon: SiFirebase, level: 80 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'Trello', icon: SiTrello, level: 75 },
        { name: 'Wix', icon: SiWix, level: 95 },
        { name: 'Canva', icon: SiCanva, level: 90 },
        { name: 'Figma', icon: SiFigma, level: 80 }
      ]
    }
  ]

  return (
    <motion.div>
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 hover-lift"
            >
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon 
                          size={24} 
                          className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" 
                        />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Next.js', 'Webpack', 'Wix',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="glass-effect px-4 py-2 rounded-full text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </motion.div>
  )
}

export default Skills