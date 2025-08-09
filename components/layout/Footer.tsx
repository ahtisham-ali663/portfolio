'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useNavigation } from '@/hooks/useNavigation'

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/ahtisham-ali-0b7369186',
    label: 'LinkedIn'
  },
  {
    icon: Github,
    href: 'https://github.com/ahtisham-ali663',
    label: 'GitHub'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/ahtisham_dev',
    label: 'Twitter'
  },
  {
    icon: Mail,
    href: 'mailto:ahtisham.ali@email.com',
    label: 'Email'
  }
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export const Footer: React.FC = () => {
  const { scrollToSection } = useNavigation()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-12 border-b border-gray-800 dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AA</span>
                </div>
                <span className="text-xl font-bold">Ahtisham Ali</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Senior Full Stack Developer passionate about creating innovative solutions 
                and building exceptional digital experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using Next.js & TypeScript</span>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">
                  Let's discuss your next project or opportunity.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400"
          >
            © {currentYear} Ahtisham Ali. All rights reserved.
          </motion.div>
          
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}