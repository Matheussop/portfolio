import { Github, Linkedin } from "@styled-icons/bootstrap";
import Link from "next/link";
import { Line, MediasContainer } from "./styled";

export function Medias(){
  return (
    <MediasContainer>
      <Line/>
      <Link href="https://github.com/Matheussop" target="_blank" rel="noopener noreferrer">
        <Github size="2rem"/>
      </Link>
      <Link href="https://www.linkedin.com/in/matheus-spindula/" target="_blank" rel="noopener noreferrer">
        <Linkedin size="2rem"/>
      </Link>
    </MediasContainer>
  )
}