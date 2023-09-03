'use client'

import  Image  from "next/image"
import { AboutContainer, Block, HomeContainer, ImageContainer, 
  InfoContainer, InfosText,
  RepositoriesContainer, SkillsContainer,
   SkillsFigures, SkillsInfo } from "./styles"
import profilePicture from "../../assets/profilePicture_1.png"
import { Dots } from "../utils/Dots"
import { api } from '../lib/axios'
import apiData from './repositories._api.json'
import { useEffect, useState } from "react"
import { RepositoryCard } from "./components/RepositoryCard"
import Link from "next/link"
import { TitleSection } from "./components/TitleSection"
import { SkillCard, SkillProps } from "./components/SkillCard"

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

export default function Home() {
  const [repositories, setRepositories] = useState<ListRepositories[]>([])
  useEffect(() => {
    // getRepositories();
    setRepositories(apiData)
    console.log(apiData)
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
            <div>
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
          {repositories.map(repository => (
            <RepositoryCard key={repository.id} {...repository} />
          ))}
        </RepositoriesContainer>
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
      </HomeContainer>
    </main>
  )
}
