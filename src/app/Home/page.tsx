'use client'
import { EnvelopeFill, Linkedin } from "@styled-icons/bootstrap";
import  Image  from "next/image"
import { AboutContainer, Block, ContactsContainer, HomeContainer,
  ImageContainer, InfoContainer, InfosText,
  RepositoriesContainer, Separator, SkillsContainer,
  SkillsFigures, SkillsInfo, WorksContainer } from "./styles"
import profilePicture from "../../assets/profileImage_3.png"
import { Dots } from "../utils/Dots"
import { api } from '../lib/axios'
import { useEffect, useState } from "react"
import { RepositoryCard } from "./components/RepositoryCard"
import Link from "next/link"
import { TitleSection } from "./components/TitleSection"
import { SkillCard, SkillProps } from "./components/SkillCard"
import { SkeletonCard } from "./components/SkeletonCard";
import { WorksCard, WorksCardProps } from "./components/WorksCard";

export interface ListRepositories{
  id: number;
  name: string;
  description: string;
  html_url: string;
  language?: string;
}

type skillsProps = Omit<SkillProps, 'id'>

const skillsData: skillsProps[] = [
  {name: 'Languages', description: ['JavaScript', 'TypeScript', 'Java', 'C#', 'Python']},	
  {name: 'Libs/Frameworks', description: ['React', 'React Native', 'Next', 'Expo', 'Angular', 'Angular.Js', 'PyQt']},		
  {name: 'Testes Automatizados', description: ['Selenium (Python/Java)', 'Jest(JS/TS)', 'Cypress']},		
  {name: 'Databases', description: ['Mongo', 'PostgresSQL', 'MYSQL']},
  {name: 'Ferramentas', description: ['VSCode', 'Eclipse', 'Figma', 'Adobe XD', 'Photoshop', 'Git','Linux','Notion','Vim', 'GitHub', 'GitLab']},
  {name: 'Metodologias', description: ['Scrum', 'Kanban', 'Trello', 'SMART' ]},
  {name: 'Other', description: ['HTML', 'CSS', 'SCSS', 'Rest']}
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
    date: 'Outubro de 2021 - Março de 2022 ',
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
  }
]

export default function Home() {
  const [repositories, setRepositories] = useState<ListRepositories[]>()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // const data:ListRepositories[] = apiData as ListRepositories[];
    setTimeout(() => {
      getRepositories();
      // setRepositories(data)
    }, 1000)
  }, [])

  async function  getRepositories(){
    await api.get("https://api.github.com/users/matheussop/repos", {
      params: {
        per_page: 6,
        sort : 'updated',
      }
    }).then(response => {
      setRepositories(response.data)
    })
  }

  return (
    <main >
      <HomeContainer >
        <InfoContainer>
          <InfosText>
            <h1>Eu sou um desenvolvedor 
              <span> front-end </span>
            </h1>
            <h1>
              e 
              <span> mobile</span>
            </h1>
            <p>
              Olá! Sou o Matheus. Tenho paixão por solucionar desafios tecnológicos.
              Estou sempre em busca de oportunidades para aprender e crescer na 
              minha carreira de desenvolvedor.
            </p>
          </InfosText>
          <ImageContainer>
            <div className="blockImage">
              <Image src={profilePicture} alt="Imagem de Matheus Spindula"
                height={350} priority
              />
            </div>
            <div>
              <Block/>
              <p>Atualmente trabalhando no  
                <Link href="https://www.bb.com.br/site/pra-voce/capitalizacao/"
                  target="_blank">
                  Banco do Brasil
                </Link>
              </p>
            </div>
            <Dots/>
          </ImageContainer>

        </InfoContainer>
        <TitleSection id="Projects" title="Últimos Projetos"/>
        <RepositoriesContainer>
          
          {repositories ? repositories.map(repository => (
            <RepositoryCard key={repository.id} {...repository} />
          )) : [...Array(6).keys()].map(index => (
            <SkeletonCard key={index}/>
          ))
          }
        </RepositoriesContainer>
        <TitleSection id="About" title="Sobre-Mim"/>
        <AboutContainer>
          <div>
            <p>Ola, sou o Matheus Spindula</p>
            <p>
              Um profissional dedicado e entusiasta na área 
              de TI. Estou no mercado desde 2020, atuando mais focado na 
              área de front-end. Meu entusiasmo pelo mundo da tecnologia me levou a 
              me formar em Ciência da Computação, uma jornada que me proporcionou uma base sólida de conhecimento e habilidades.
            </p>
            <p>
              Atualmente trabalhando no  
              <Link href="https://www.bb.com.br/site/pra-voce/capitalizacao/"
                target="_blank">
                 Banco do Brasil
              </Link> como desenvolvedor front-end (angular) e mobile. Tendo também algumas atuações em back-end utilizando Java

            </p>
          </div>
        </AboutContainer>
        <TitleSection id="Works" title="Trabalhos"/>
        <WorksContainer>
          {worksData.map(work => (
            <div  key={work.title}>
              <WorksCard {...work} />
              <Separator/>
            </div>
          ))}
        </WorksContainer>
        <TitleSection id="Skills" title="Habilidades"/>
        <SkillsContainer>
          <SkillsInfo>
            {skillsData.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </SkillsInfo>
          <SkillsFigures>
            <Dots className="dots1"/>
            <Dots className="dots2"/>
            <div className="square1"/>
            <div className="square2"/>
            <div className="line"/>
            <div className="line2"/>
          </SkillsFigures>
        </SkillsContainer>
        <TitleSection id="Contact" title="Contatos"/>
        <ContactsContainer>
          <div>
            <p>
              Estou interessado em oportunidades para aprender e crescer na minha carreira de desenvolvedor.
              Atualmente tenho preferencia para a utilização de React, React Native, Next, Expo. Caso tenha alguma dúvida ou convite,
              não deixe de contactar-me.
            </p>
          </div>
          <div>
            <h3>Envie mensagem em: </h3>
            <a href="mailto:<EMAIL>">
              <EnvelopeFill size="1.5rem"/>
              matheussopluiz@outlook.com</a>
            <a href="https://www.linkedin.com/in/matheus-spindula/">
              <Linkedin size="1.5rem"/>
              matheus-spindula</a>
          </div>
        </ContactsContainer>
      </HomeContainer>
    </main>
  )
}
