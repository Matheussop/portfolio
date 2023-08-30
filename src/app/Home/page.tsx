'use client'

import  Image  from "next/image"
import { Block, HomeContainer, ImageContainer, InfoContainer, InfosText } from "./styles"
import profilePicture from "../../assets/profilePicture_1.png"
import {Dots } from "../utils/Dots"
import Icon from "../icon.svg"
export default function Home() {
  console.log("Dots", Dots)
  console.log("Icon", Icon)

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
                height={300}
              />
            </div>
            <div>
              <Block/>
              <p>Atualmente trabalhando no  
                <a href="https://www.bb.com.br/site/pra-voce/capitalizacao/">
                  Banco do Brasil
                </a>
              </p>
            </div>
            <Dots />
          </ImageContainer>

        </InfoContainer>
      </HomeContainer>
    </main>
  )
}
