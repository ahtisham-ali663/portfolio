'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Star, Sparkles, Zap, Eye, Code2, Rocket, Award } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
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

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    longDescription: 'Built a comprehensive e-commerce solution handling 10K+ daily transactions with features including real-time inventory tracking, multiple payment gateways, advanced analytics dashboard, and mobile-responsive design.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/ahtisham-ali663/ecommerce-platform',
    featured: true,
    stats: {
      users: '50K+',
      transactions: '10K+',
      uptime: '99.9%'
    },
    timeline: '6 months',
    teamSize: '4 developers'
  },
  {
    title: 'Task Management SaaS',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.',
    longDescription: 'Developed a comprehensive task management platform with real-time collaboration, Kanban boards, time tracking, team analytics, and integration with popular tools like Slack and GitHub.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker', 'GCP'],
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/ahtisham-ali663/task-manager',
    featured: true,
    stats: {
      teams: '200+',
      projects: '1K+',
      satisfaction: '4.8/5'
    },
    timeline: '4 months',
    teamSize: '3 developers'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization, custom reports, and predictive insights.',
    longDescription: 'Created a powerful analytics dashboard processing millions of data points with real-time visualizations, custom report generation, machine learning insights, and multi-tenant architecture.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'ClickHouse', 'Kubernetes', 'Azure'],
    liveUrl: 'https://analytics-demo.com',
    githubUrl: 'https://github.com/ahtisham-ali663/analytics-dashboard',
    featured: false,
    stats: {
      dataPoints: '10M+',
      clients: '100+',
      accuracy: '95%'
    },
    timeline: '8 months',
    teamSize: '5 developers'
  },
  {
    title: 'Social Media Automation Tool',
    description: 'An AI-powered social media management platform with content scheduling, analytics, and engagement automation.',
    longDescription: 'Built an intelligent social media management tool with AI-powered content suggestions, automated posting schedules, engagement analytics, and multi-platform integration.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Express.js', 'OpenAI API', 'PostgreSQL', 'Bull Queue', 'Heroku'],
    liveUrl: 'https://socialmedia-demo.com',
    githubUrl: 'https://github.com/ahtisham-ali663/social-automation',
    featured: false,
    stats: {
      posts: '100K+',
      engagement: '+150%',
      timeSaved: '80%'
    },
    timeline: '3 months',
    teamSize: '2 developers'
  }
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  isHovered?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isHovered }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        rotateX: 2,
      }}
      className="relative group"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating Sparkles on Hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-4 left-4 text-yellow-400 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles size={16} />
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 text-cyan-400 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Sparkles size={14} />
          </motion.div>
        </>
      )}
      
      <Card className="relative h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {/* Project Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-blue-500/30 dark:text-blue-400/30">
              {project.title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
          {project.featured && (
            <motion.div 
              className="absolute top-4 right-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium rounded-full shadow-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-3 h-3" />
                </motion.div>
                Featured
              </span>
            </motion.div>
          )}
        </div>

        <div className="p-6 relative">
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-8 gap-1 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.005, duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Project Header */}
          <div className="mb-4 relative z-10">
            <motion.h3 
              className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {project.title}
              {isHovered && (
                <motion.span
                  className="inline-block ml-2 text-purple-500"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Rocket size={16} />
                </motion.span>
              )}
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.featured ? project.longDescription : project.description}
            </motion.p>
          </div>

          {/* Project Stats */}
          {project.featured && (
            <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          )}

          {/* Project Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.timeline}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{project.teamSize}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-3 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="primary"
                size="sm"
                icon={Eye}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                />
                Live Demo
              </Button>
            </motion.div>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="secondary"
                size="sm"
                icon={Code2}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                Code
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

export const ProjectsSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Showcasing innovative solutions and technical excellence"
      className="bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        
        {/* Floating Project Icons */}
        <FloatingElement delay={0} duration={6} className="top-20 left-10 text-purple-500/20">
          <Code2 size={24} />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} className="top-40 right-20 text-blue-500/20">
          <Rocket size={20} />
        </FloatingElement>
        <FloatingElement delay={2} duration={7} className="bottom-40 left-20 text-green-500/20">
          <Award size={28} />
        </FloatingElement>
        <FloatingElement delay={3} duration={4} className="bottom-20 right-10 text-orange-500/20">
          <Zap size={22} />
        </FloatingElement>
        <FloatingElement delay={1.5} duration={6} className="top-60 left-1/3 text-cyan-500/20">
          <Eye size={18} />
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
      
      {/* Enhanced Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <Rocket className="w-6 h-6 text-purple-500" />
          <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Portfolio Showcase
          </span>
          <Rocket className="w-6 h-6 text-purple-500" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Discover my latest projects featuring cutting-edge technologies and innovative solutions
        </motion.p>
      </motion.div>
      <motion.div 
         className="grid lg:grid-cols-3 gap-8 relative z-10"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.3 }}
         viewport={{ once: true }}
       >
         {projects.map((project, index) => (
           <motion.div
             key={project.title}
             onHoverStart={() => setHoveredProject(index)}
             onHoverEnd={() => setHoveredProject(null)}
             className={project.featured ? 'lg:col-span-2' : ''}
           >
             <ProjectCard
               project={project}
               index={index}
               isHovered={hoveredProject === index}
             />
           </motion.div>
         ))}
       </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 border-0">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Interested in My Work?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            These projects represent just a fraction of my portfolio. I'm always excited to discuss new opportunities and collaborate on innovative solutions.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={Github}
            href="https://github.com/ahtisham-ali663"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </Button>
        </Card>
      </motion.div>
    </Section>
  )
}