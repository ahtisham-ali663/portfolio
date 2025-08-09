'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Palette, Settings, Sparkles, Star, Zap, Cpu, Globe, Shield } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useState, useEffect } from 'react'

// Floating Element Component
const FloatingElement: React.FC<{ children: React.ReactNode; delay?: number; duration?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  duration = 4, 
  className = '' 
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0, opacity: 0.3 }}
      animate={{ 
        y: [-20, 20, -20],
        opacity: [0.3, 0.7, 0.3],
        rotate: [0, 360]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

const featuredSkills = [
  { 
    name: 'React/Next.js', 
    level: 95, 
    color: 'from-blue-500 to-cyan-500',
    icon: Code,
    description: 'Modern React ecosystem'
  },
  { 
    name: 'Node.js', 
    level: 90, 
    color: 'from-green-500 to-emerald-500',
    icon: Cpu,
    description: 'Server-side JavaScript'
  },
  { 
    name: 'TypeScript', 
    level: 88, 
    color: 'from-blue-600 to-indigo-600',
    icon: Shield,
    description: 'Type-safe development'
  },
  { 
    name: 'AWS/Cloud', 
    level: 85, 
    color: 'from-orange-500 to-red-500',
    icon: Cloud,
    description: 'Cloud infrastructure'
  }
]

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
      { name: 'Angular', level: 70 }
    ]
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'GraphQL', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 78 }
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications in the cloud',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 82 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Terraform', level: 70 },
      { name: 'Monitoring', level: 78 }
    ]
  },
  {
    icon: Database,
    title: 'Database Technologies',
    description: 'Designing and optimizing data storage solutions',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'Elasticsearch', level: 75 },
      { name: 'DynamoDB', level: 70 }
    ]
  }
]

interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-3">
        <motion.span 
          className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay }}
          viewport={{ once: true }}
        >
          {name}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-1"
        >
          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{level}%</span>
          {level >= 90 && <Star className="w-3 h-3 text-yellow-500" />}
          {level >= 85 && level < 90 && <Sparkles className="w-3 h-3 text-blue-500" />}
        </motion.div>
      </div>
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: `${level}%`, opacity: 1 }}
            transition={{ duration: 1.5, delay, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300"
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                duration: 2, 
                delay: delay + 1, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
        
        {/* Skill level indicator */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + 1.2 }}
          viewport={{ once: true }}
          className="absolute top-0 h-3 w-1 bg-white dark:bg-gray-900 rounded-full shadow-md"
          style={{ left: `${level}%`, transform: 'translateX(-50%)' }}
        />
      </div>
    </motion.div>
  )
}

export const SkillsSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Section
      id="skills"
      title="Technology Arsenal"
      subtitle="Comprehensive expertise across the full development stack"
      className="bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        
        {/* Floating Tech Icons */}
        <FloatingElement delay={0} duration={6} className="top-20 left-10 text-blue-500/20">
          <Code size={24} />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} className="top-40 right-20 text-green-500/20">
          <Database size={20} />
        </FloatingElement>
        <FloatingElement delay={2} duration={7} className="bottom-40 left-20 text-purple-500/20">
          <Cloud size={28} />
        </FloatingElement>
        <FloatingElement delay={3} duration={4} className="bottom-20 right-10 text-orange-500/20">
          <Zap size={22} />
        </FloatingElement>
        <FloatingElement delay={1.5} duration={6} className="top-60 left-1/3 text-cyan-500/20">
          <Globe size={18} />
        </FloatingElement>
        <FloatingElement delay={2.5} duration={5} className="top-80 right-1/3 text-pink-500/20">
          <Sparkles size={16} />
        </FloatingElement>
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-gray-400 dark:border-gray-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.01, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      {/* Featured Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Star className="w-6 h-6 text-yellow-500" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Core Expertise
            </h3>
            <Star className="w-6 h-6 text-yellow-500" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Mastering the technologies that power modern web development
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-6 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* Floating Sparkles */}
                <motion.div
                  className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} />
                </motion.div>
                
                <div className="relative mb-6">
                  {/* Icon Background */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Circular Progress */}
                  <div className="w-24 h-24 mx-auto relative">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200 dark:text-gray-700"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className={`bg-gradient-to-r ${skill.color}`}
                        stroke="url(#gradient-${index})"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ strokeDasharray: '0 100' }}
                        whileInView={{ strokeDasharray: `${skill.level} 100` }}
                        transition={{ duration: 2, delay: index * 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </motion.div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical Proficiencies
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {category.title}
                    </motion.h3>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                      className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1"
                    />
                  </div>
                </div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed relative z-10"
                >
                  {category.description}
                </motion.p>
                
                {/* Skills */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <SkillBar
                        name={skill.name}
                        level={skill.level}
                        delay={categoryIndex * 0.3 + skillIndex * 0.1}
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Zap size={20} />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}