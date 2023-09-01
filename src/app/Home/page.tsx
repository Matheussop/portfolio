'use client'

import  Image  from "next/image"
import { Block, HomeContainer, ImageContainer, InfoContainer, InfosText, RepositoriesContainer } from "./styles"
import profilePicture from "../../assets/profilePicture_1.png"
import {Dots } from "../utils/Dots"
import { api } from '../lib/axios'
import apiData from './repositories._api.json'
import { useEffect, useState } from "react"
import { RepositoryCard } from "./components/RepositoryCard"
import Link from "next/link"
import { TitleSection } from "./components/TitleSection"

const username = 'matheussop'


export interface ListRepositories{
  id: number;
  name: string;
  description: string;
  html_url: string;
  language?: string;
}

export default function Home() {
  const [repositories, setRepositories] = useState<ListRepositories[]>([])
  useEffect(() => {
    getRepositories();
    // setRepositories(apiData)
    // console.log(apiData)
  }, [])

  async function  getRepositories(){
    await api.get("https://api.github.com/users/"+username+"/repos", {
      params: {
        per_page: 9,
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
            Olá! Sou o Matheus, um profissional dedicado e entusiasta na área 
            de TI. Estou no mercado desde 2020, atuando mais focado na 
            área de front-end. Meu entusiasmo pelo mundo da tecnologia me levou a 
            me formar em Ciência da Computação, uma jornada que me proporcionou uma base sólida de conhecimento e habilidades. 
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
            <Dots />
          </ImageContainer>

        </InfoContainer>
        <TitleSection id="Projects" title="Projetos" redirectTitle="Veja Mais"/>
        <RepositoriesContainer>
          {repositories.map(repository => (
            <RepositoryCard key={repository.id} {...repository} />
          ))}
        </RepositoriesContainer>
      </HomeContainer>
    </main>
  )
}
