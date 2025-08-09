'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading development of enterprise-scale web applications and mentoring junior developers.',
    achievements: [
      'Architected and implemented microservices architecture reducing system latency by 40%',
      'Led a team of 5 developers in delivering 3 major product releases',
      'Introduced automated testing practices increasing code coverage from 60% to 95%',
      'Optimized database queries resulting in 50% faster page load times'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Inc',
    location: 'New York, NY',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Developed and maintained multiple client-facing applications using modern web technologies.',
    achievements: [
      'Built responsive web applications serving 100K+ daily active users',
      'Implemented real-time features using WebSocket technology',
      'Collaborated with UX/UI team to improve user engagement by 35%',
      'Mentored 3 junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'GraphQL', 'Jest']
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2019 - 2020',
    type: 'Full-time',
    description: 'Focused on creating intuitive user interfaces and improving user experience.',
    achievements: [
      'Developed mobile-first responsive designs for 5+ web applications',
      'Implemented state management solutions reducing component re-renders by 60%',
      'Created reusable component library adopted across 3 different projects',
      'Improved website accessibility compliance to WCAG 2.1 AA standards'
    ],
    technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Figma', 'Cypress']
  }
]

interface ExperienceCardProps {
  experience: typeof experiences[0]
  index: number
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 relative">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 relative" />
        {index < experiences.length - 1 && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                <Building className="w-4 h-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full flex-shrink-0">
              {experience.type}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {experience.description}
          </p>

          <div className="mb-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
              <Award className="w-4 h-4" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}

export const ExperienceSection: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Professional Journey"
      subtitle="Building innovative solutions and leading development teams"
      className="bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}