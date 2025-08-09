'use client'

import { motion } from 'framer-motion'
import { Mail, FileText, Code, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useNavigation } from '@/hooks/useNavigation'
import { useEffect, useState } from 'react'

const techStack = ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL']

// Particle component for floating elements
const FloatingParticle = ({ delay = 0, size = 'w-2 h-2', color = 'bg-blue-400' }) => (
  <motion.div
    className={`absolute ${size} ${color} rounded-full opacity-60`}
    animate={{
      y: [-20, -100, -20],
      x: [-10, 10, -10],
      opacity: [0.6, 0.3, 0.6],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
)

// 3D Card component
const TechCard = ({ tech, index }: { tech: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -90 }}
    animate={{ opacity: 1, rotateY: 0 }}
    transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
    whileHover={{ 
      scale: 1.1, 
      rotateY: 10,
      z: 50,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }}
    className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {tech}
  </motion.div>
)

export const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced animated background with parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Interactive mouse follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            size={i % 3 === 0 ? 'w-3 h-3' : 'w-2 h-2'}
            color={[
              'bg-blue-400', 'bg-purple-400', 'bg-pink-400', 
              'bg-emerald-400', 'bg-yellow-400', 'bg-cyan-400'
            ][i % 6]}
          />
        ))}
        
        {/* Enhanced floating orbs with 3D effect */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-60"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 dark:from-emerald-600 dark:to-teal-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-60"
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced professional badge with glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-full px-8 py-4 mb-12 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Available for new opportunities</span>
              <Zap className="w-4 h-4 text-blue-500" />
            </motion.div>
            
            {/* Enhanced name with 3D effect */}
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight relative"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Ahtisham Ali
                {/* Glowing text shadow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent blur-sm opacity-50 -z-10">Ahtisham Ali</span>
              </motion.span>
            </motion.h1>
            
            {/* Enhanced subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12"
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6 relative">
                  <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-gray-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Senior Full Stack Developer
                  </span>
                  <motion.span
                    className="absolute -right-1 top-0 w-1 h-full bg-blue-600"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </p>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-400 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
                  Architecting scalable solutions and leading development teams with 
                  <motion.span 
                    className="text-blue-600 ml-3 dark:text-blue-400 font-bold"
                    whileHover={{ scale: 1.1, color: "#3B82F6" }}
                  >
                     5+ years
                  </motion.span>
                  {' '}of expertise in modern web technologies
                </span>
              </motion.p>
            </motion.div>
            
            {/* Enhanced 3D Tech stack cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12 perspective-1000"
            >
              {techStack.map((tech, index) => (
                <TechCard key={tech} tech={tech} index={index} />
              ))}
            </motion.div>
            
            {/* Floating code symbols */}
            <motion.div
              className="absolute top-1/4 left-10 text-blue-400/30 text-6xl font-mono"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              {'<>'}
            </motion.div>
            <motion.div
              className="absolute top-3/4 right-10 text-purple-400/30 text-4xl font-mono"
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            >
              {'{}'}
            </motion.div>
            
            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center relative"
            >
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-8 -left-8 w-4 h-4 border-2 border-blue-400/30 rounded-full"
              />
              
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-6 -right-6 w-3 h-3 bg-purple-400/40 rounded-full"
              />
              
              {/* Primary CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Button
                  variant="primary"
                  size="lg"
                  icon={Mail}
                  onClick={() => scrollToSection('contact')}
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transform transition-all duration-300 border-0 text-white font-semibold"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    Let's Collaborate
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              {/* Secondary CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Button
                  variant="secondary"
                  size="lg"
                  icon={FileText}
                  href="/Ahtisham Ali - CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border-2 border-white/30 dark:border-gray-600/30 hover:border-white/50 dark:hover:border-gray-500/50 shadow-xl hover:shadow-2xl transform transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold"
                >
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    View Resume
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              {/* Floating Action Indicators */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
              >
                <Sparkles className="w-3 h-3" />
                <span>Ready to create something amazing?</span>
                <Sparkles className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}