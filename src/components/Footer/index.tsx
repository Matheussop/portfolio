import { Github, Linkedin } from "@styled-icons/bootstrap";
import { About, FooterContainer, FooterContent, Infos, Media } from "./styles";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <Infos>
          <div>
            <span>Matheus Spindula</span>
            <p>matheussopluiz@outlook.com</p>
          </div>
          <About>
            Desenvolvedor Web e Mobile | Capgemini (Banco do Brasil)
          </About>
        </Infos>

        <Media>
          <p>Social</p>
          <div>
            <Link href="https://github.com/Matheussop" target="_blank" rel="noopener noreferrer">
              <Github size="1.8rem"/>
            </Link>
            <Link href="https://www.linkedin.com/in/matheus-spindula/" target="_blank" rel="noopener noreferrer">
              <Linkedin size="1.8rem"/>
            </Link>
          </div>
        </Media>
      </FooterContent>
      <p className="copyright">© {currentYear} Matheus Spindula</p>
    </FooterContainer>
  )
}
