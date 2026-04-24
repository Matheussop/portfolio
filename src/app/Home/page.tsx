'use client'

import { EnvelopeFill, Linkedin } from '@styled-icons/bootstrap'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import profilePicture from '../../assets/profileImage_3.png'
import { api } from '../lib/axios'
import { Dots } from '../utils/Dots'
import {
  AboutCopy,
  AboutGrid,
  AboutLead,
  ContactCard,
  ContactGrid,
  ContactLinkList,
  EmptyStateCard,
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroSection,
  HeroTitle,
  HeroVisual,
  HomeContainer,
  PortraitBadge,
  PortraitFrame,
  PrimaryLink,
  ProjectsGrid,
  Section,
  SecondaryLink,
  SkillsGrid,
  WorksList,
} from './styles'
import { RepositoryCard } from './components/RepositoryCard'
import { SkeletonCard } from './components/SkeletonCard'
import { SkillCard, SkillProps } from './components/SkillCard'
import { TitleSection } from './components/TitleSection'
import { WorksCard, WorksCardProps } from './components/WorksCard'

const transitionEase = [0.22, 1, 0.36, 1] as const

export interface ListRepositories {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language?: string;
}

const skillsData: SkillProps[] = [
  { name: 'Languages', description: ['JavaScript', 'TypeScript', 'Java', 'C#', 'Python'] },
  { name: 'Libs/Frameworks', description: ['React', 'React Native', 'Next', 'Expo', 'Angular', 'Angular.Js', 'PyQt'] },
  { name: 'Testes Automatizados', description: ['Selenium (Python/Java)', 'Jest (JS/TS)', 'Cypress'] },
  { name: 'Databases', description: ['Mongo', 'PostgresSQL', 'MYSQL'] },
  { name: 'Ferramentas', description: ['VSCode', 'Eclipse', 'Figma', 'Adobe XD', 'Photoshop', 'Git', 'Linux', 'Notion', 'Vim', 'GitHub', 'GitLab'] },
  { name: 'Metodologias', description: ['Scrum', 'Kanban', 'Trello', 'SMART'] },
  { name: 'Other', description: ['HTML', 'CSS', 'SCSS', 'Rest'] },
]

const worksData: WorksCardProps[] = [
  {
    title: 'Desenvolvedor Mobile e Web - Banco do Brasil',
    companyName: 'Capgemini',
    date: 'Março de 2022 - Até o momento',
    locale: 'Belo Horizonte, Minas Gerais, Brasil',
    period: 'Tempo integral',
  },
  {
    title: 'Desenvolvedor',
    companyName: 'Tribunal de Contas do Estado de Minas Gerais',
    date: 'Outubro de 2021 - Março de 2022',
    locale: 'Belo Horizonte, Minas Gerais, Brasil',
    period: 'Tempo integral',
  },
  {
    title: 'Desenvolvedor de front-end',
    companyName: 'Inova Tecnologia',
    date: 'Fevereiro de 2021 - Outubro de 2021',
    locale: 'Belo Horizonte, Minas Gerais, Brasil',
    period: 'Meio período',
  },
  {
    title: 'Estagiário',
    companyName: 'Grupo Otimiza',
    date: 'Janeiro de 2020 - Fevereiro de 2021',
    locale: 'Belo Horizonte, Minas Gerais, Brasil',
    period: 'Estágio',
  },
  {
    title: 'Desenvolvedor Web com WordPress',
    companyName: 'Grupo Escalar',
    date: 'Fevereiro de 2019 - Janeiro de 2020',
    locale: 'Belo Horizonte, Minas Gerais, Brasil',
    period: 'Meio período',
  },
]

export default function Home() {
  const [repositories, setRepositories] = useState<ListRepositories[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasRepositoryError, setHasRepositoryError] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    let isMounted = true

    async function getRepositories() {
      try {
        const response = await api.get<ListRepositories[]>('https://api.github.com/users/matheussop/repos', {
          params: {
            per_page: 6,
            sort: 'updated',
          },
        })

        if (isMounted) {
          setRepositories(response.data)
        }
      } catch {
        if (isMounted) {
          setHasRepositoryError(true)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    getRepositories()

    return () => {
      isMounted = false
    }
  }, [])

  const getReveal = (delay = 0) => {
    if (shouldReduceMotion) {
      return {}
    }

    return {
      initial: { opacity: 0, y: 28 },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: transitionEase,
        },
      },
      viewport: { once: true, amount: 0.2 },
    }
  }

  const staggerGroup = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.15 },
        variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
      }

  const staggerItem = shouldReduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 22 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: transitionEase,
            },
          },
        },
      }

  return (
    <main>
      <HomeContainer>
        <HeroSection id="top">
          <motion.div {...getReveal()}>
            <HeroContent>
              <HeroEyebrow>Front-end • Mobile • Next.js</HeroEyebrow>

              <HeroTitle>
                Eu sou um
                <br />
                desenvolvedor <span>front-end</span>
                <br />
                e <span>mobile</span>
              </HeroTitle>

              <HeroDescription>
                Olá! Sou o Matheus. Tenho paixão por solucionar desafios tecnológicos.
                Estou sempre em busca de oportunidades para aprender e crescer na minha
                carreira de desenvolvedor.
              </HeroDescription>

              <HeroActions>
                <PrimaryLink href="/#Projects">Ver projetos</PrimaryLink>
                <SecondaryLink href="/#Contact">Entrar em contato</SecondaryLink>
              </HeroActions>
            </HeroContent>
          </motion.div>

          <motion.div {...getReveal(0.12)}>
            <HeroVisual>
              <PortraitFrame>
                <Dots className="dots" width={4} height={4} color="rgba(211, 161, 108, 0.7)" />

                <div className="imageWrap">
                  <Image
                    src={profilePicture}
                    alt="Imagem de Matheus Spindula"
                    priority
                    sizes="(max-width: 980px) 100vw, 480px"
                    className="portraitImage"
                  />
                </div>
              </PortraitFrame>

              <PortraitBadge>
                <div className="status">
                  <div className="dot" />
                  <div>
                    <strong>Atualmente trabalhando</strong>
                    <p>
                      no{' '}
                      <Link
                        href="https://www.bb.com.br/site/pra-voce/capitalizacao/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Banco do Brasil
                      </Link>
                    </p>
                  </div>
                </div>
              </PortraitBadge>
            </HeroVisual>
          </motion.div>
        </HeroSection>

        <Section id="Projects">
          <motion.div {...getReveal()}>
            <TitleSection title="Últimos Projetos" />
          </motion.div>

          <ProjectsGrid as={motion.div} {...staggerGroup}>
            {isLoading &&
              [...Array(6).keys()].map((index) => (
                <motion.div key={index} {...staggerItem}>
                  <SkeletonCard />
                </motion.div>
              ))}

            {!isLoading &&
              repositories.map((repository) => (
                <motion.div key={repository.id} {...staggerItem}>
                  <RepositoryCard {...repository} />
                </motion.div>
              ))}

            {!isLoading && hasRepositoryError && (
              <EmptyStateCard as={motion.div} {...getReveal(0.08)}>
                <p>
                  Não foi possível carregar os repositórios agora. Ainda assim, a seção
                  continua pronta para destacar os últimos projetos publicados no GitHub.
                </p>
              </EmptyStateCard>
            )}
          </ProjectsGrid>
        </Section>

        <Section id="About">
          <motion.div {...getReveal()}>
            <TitleSection title="Sobre mim" />
          </motion.div>

          <AboutGrid>
            <AboutLead as={motion.div} {...getReveal(0.05)}>
              <span>perfil</span>
              <h3>Olá, sou o Matheus Spindula.</h3>
              <p>
                Um profissional dedicado e entusiasta na área de TI, com foco em criar
                experiências digitais claras, sólidas e bem executadas.
              </p>
            </AboutLead>

            <AboutCopy as={motion.div} {...getReveal(0.12)}>
              <p>
                Um profissional dedicado e entusiasta na área de TI. Estou no mercado
                desde 2020, atuando mais focado na área de front-end. Meu entusiasmo pelo
                mundo da tecnologia me levou a me formar em Ciência da Computação, uma
                jornada que me proporcionou uma base sólida de conhecimento e habilidades.
              </p>
              <p>
                Atualmente trabalhando no{' '}
                <Link
                  href="https://www.bb.com.br/site/pra-voce/capitalizacao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Banco do Brasil
                </Link>{' '}
                como desenvolvedor front-end (angular) e mobile. Tendo também algumas
                atuações em back-end utilizando Java.
              </p>
            </AboutCopy>
          </AboutGrid>
        </Section>

        <Section id="Works">
          <motion.div {...getReveal()}>
            <TitleSection title="Trabalhos" />
          </motion.div>

          <WorksList as={motion.div} {...staggerGroup}>
            {worksData.map((work) => (
              <motion.div key={work.title} {...staggerItem}>
                <WorksCard {...work} />
              </motion.div>
            ))}
          </WorksList>
        </Section>

        <Section id="Skills">
          <motion.div {...getReveal()}>
            <TitleSection title="Habilidades" />
          </motion.div>

          <SkillsGrid as={motion.div} {...staggerGroup}>
            {skillsData.map((skill) => (
              <motion.div key={skill.name} {...staggerItem}>
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </SkillsGrid>
        </Section>

        <Section id="Contact">
          <motion.div {...getReveal()}>
            <TitleSection title="Contatos" />
          </motion.div>

          <ContactGrid>
            <ContactCard as={motion.div} {...getReveal(0.05)}>
              <h3>Vamos construir algo relevante.</h3>
              <p>
                Estou interessado em oportunidades para aprender e crescer na minha
                carreira de desenvolvedor. Atualmente tenho preferência para a utilização
                de React, React Native, Next e Expo. Caso tenha alguma dúvida ou convite,
                não deixe de contactar-me.
              </p>
            </ContactCard>

            <ContactCard as={motion.div} {...getReveal(0.12)}>
              <h3>Envie mensagem em</h3>

              <ContactLinkList>
                <a href="mailto:matheussopluiz@outlook.com">
                  <EnvelopeFill size="1.35rem" />
                  matheussopluiz@outlook.com
                </a>

                <a
                  href="https://www.linkedin.com/in/matheus-spindula/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size="1.35rem" />
                  matheus-spindula
                </a>
              </ContactLinkList>
            </ContactCard>
          </ContactGrid>
        </Section>
      </HomeContainer>
    </main>
  )
}
