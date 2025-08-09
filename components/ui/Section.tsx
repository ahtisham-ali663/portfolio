'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'transparent'
  padding?: 'sm' | 'md' | 'lg'
  title?: string
  subtitle?: string
  badge?: {
    text: string
    icon?: LucideIcon
    color?: string
  }
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  title,
  subtitle,
  badge
}) => {
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
    transparent: 'bg-transparent'
  }
  
  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  }
  
  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} relative overflow-hidden ${className}`}
    >
      <div className="container-custom relative z-10">
        {(title || subtitle || badge) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {badge && (
              <div className={`inline-flex items-center gap-2 ${badge.color || 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                {badge.icon && <badge.icon className="w-4 h-4" />}
                {badge.text}
              </div>
            )}
            {title && (
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}