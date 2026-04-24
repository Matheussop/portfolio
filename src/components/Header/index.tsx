"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { HeaderContainer } from './styles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

const menuItems = [
  { text: 'Home', href: '/#top', section: 'top' },
  { text: 'Projetos', href: '/#Projects', section: 'Projects' },
  { text: 'Sobre Mim', href: '/#About', section: 'About' },
  { text: 'Trabalhos', href: '/#Works', section: 'Works' },
  { text: 'Habilidades', href: '/#Skills', section: 'Skills' },
  { text: 'Contato', href: '/#Contact', section: 'Contact' },
]

export function Header() {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const isHomePath = useMemo(() => pathName === '/' || pathName === '/Home', [pathName])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathName])

  useEffect(() => {
    if (!isHomePath) {
      setActiveSection('top')
      return
    }

    const sectionIds = menuItems.map((item) => item.section)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0]

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-25% 0px -45% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [isHomePath])

  return (
    <HeaderContainer>
      <Link className="brand" href="/" aria-label="Página inicial de Matheus Spindula">
        <span className="mono">Matheus</span>
        <p>Spindula</p>
      </Link>

      <nav aria-label="Navegação principal">
        {menuItems.map((item) => {
          const isActive = isHomePath
            ? activeSection === item.section
            : item.section === 'top' && pathName === '/'

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>#</span>
              {item.text}
            </Link>
          )
        })}
      </nav>

      <button
        type="button"
        className="menuButton"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      >
        <span />
        <span />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobileNavigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.section

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>#</span>
                  {item.text}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderContainer>
  )
}
