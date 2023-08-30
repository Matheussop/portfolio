import { Github, Linkedin } from "@styled-icons/bootstrap";
import { About, FooterContainer, FooterContent, Infos, Media } from "./styles";
import Link from "next/link";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
      <Infos>
        <div>
          <span> Matheus Spindula </span>
          <p>matheussopluiz@outlook.com</p>
        </div>
        <About>
          Desenvolvedor Web e Mobile | Capgemini (Banco do Brasil)
        </About>
      </Infos>
      <Media>
        <h3>Social</h3>
        <div>
          <Link href="https://github.com/Matheussop" target="_blank" rel="noopener noreferrer">
            <Github size="2rem"/>
          </Link>
          <Link href="https://www.linkedin.com/in/matheus-spindula/" target="_blank" rel="noopener noreferrer">
            <Linkedin size="2rem"/>
          </Link>
        </div>
      </Media>
      </FooterContent>
      © Copyright 2023. Made by Matheus Spindula
    </FooterContainer>
  )
}