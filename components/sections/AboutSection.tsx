'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Users, Calendar, Briefcase, Code, Award, Target, Zap, Sparkles, Star, TrendingUp } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

// Floating particle component
const FloatingElement = ({ delay = 0, duration = 4, children, className = '' }: {
  delay?: number
  duration?: number
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [-10, -30, -10],
      x: [-5, 5, -5],
      rotate: [0, 180, 360],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    {children}
  </motion.div>
)

// Stats data
const stats = [
  { icon: Calendar, label: 'Years Experience', value: '5+', color: 'from-blue-500 to-cyan-500' },
  { icon: Briefcase, label: 'Projects Completed', value: '50+', color: 'from-purple-500 to-pink-500' },
  { icon: Code, label: 'Technologies', value: '20+', color: 'from-green-500 to-emerald-500' },
  { icon: Users, label: 'Team Members Mentored', value: '15+', color: 'from-orange-500 to-red-500' }
]

const expertise = [
  {
    icon: Code,
    title: 'Technical Expertise',
    description: 'Proficient in modern web technologies with deep understanding of software architecture patterns.',
    skills: [
      'Full-stack development with React, Node.js, and TypeScript',
      'Cloud architecture and deployment on AWS, Azure, and GCP',
      'Database design and optimization (SQL and NoSQL)',
      'API development and microservices architecture'
    ]
  },
  {
    icon: Users,
    title: 'Leadership & Collaboration',
    description: 'Experienced in leading development teams and driving technical decisions in fast-paced environments.',
    skills: [
      'Agile/Scrum methodology and project management',
      'Code review and mentoring junior developers',
      'Cross-functional collaboration with design and product teams',
      'Technical documentation and knowledge sharing'
    ]
  }
]

const AboutSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about creating exceptional digital experiences"
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <FloatingElement delay={0} duration={6} className="w-20 h-20 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm" />
        </FloatingElement>
        <FloatingElement delay={1} duration={8} className="w-16 h-16 opacity-15">
          <div className="w-full h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg blur-sm" />
        </FloatingElement>
        <FloatingElement delay={2} duration={5} className="w-12 h-12 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-sm" />
        </FloatingElement>
        
        {/* Floating icons */}
        <FloatingElement delay={0.5} duration={7} className="text-blue-400/30">
          <Code size={24} />
        </FloatingElement>
        <FloatingElement delay={1.5} duration={6} className="text-purple-400/30">
          <Target size={20} />
        </FloatingElement>
        <FloatingElement delay={2.5} duration={9} className="text-green-400/30">
          <Award size={18} />
        </FloatingElement>
        
        {/* Mouse follower effect */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="relative z-10">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="text-center p-6 h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 text-6xl text-blue-500/20 font-serif"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>
              
              <motion.p
                className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm a passionate{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  full-stack developer
                </span>{' '}
                with over 5 years of experience crafting digital solutions that make a difference. 
                My journey in technology is driven by curiosity and a commitment to excellence.
              </motion.p>
              
              <motion.div
                className="absolute top-8 right-4 text-yellow-400"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                animate={{ rotate: [0, 10, -10, 0] }}
              >
                <Sparkles size={20} />
              </motion.div>
            </div>
            
            <motion.p
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From concept to deployment, I specialize in building scalable web applications 
              using modern technologies. I believe in writing clean, maintainable code and 
              creating user experiences that are both beautiful and functional.
            </motion.p>
            
            <motion.div
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5" />
              <span className="font-medium">Always learning, always growing</span>
            </motion.div>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {expertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {item.description}
                        </p>
                        <div className="space-y-2">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                              {skill}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection