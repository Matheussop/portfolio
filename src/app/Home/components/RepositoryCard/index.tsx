import Link from "next/link";
import { ListRepositories } from "../../page";
import { InfosContainer, LanguageContainer, LinkContainer, RepositoryContainer } from "./styles";

interface RepositoryProps extends ListRepositories{
  image?: string;
}

export function RepositoryCard(props: RepositoryProps){
  const { name, description, language, html_url, pushed_at } = props
  const lastPublished = pushed_at
    ? new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(pushed_at))
    : null

  return (
    <RepositoryContainer>
      { language && (
        <LanguageContainer>
          <p>{language}</p>
        </LanguageContainer>
      )}
      <InfosContainer>
        <h3>{name}</h3>
        {description && <p>{description}</p>}
        {lastPublished && <p className="published">Atualizado em {lastPublished}</p>}
      </InfosContainer>
      <LinkContainer>
        <Link href={html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</Link>
      </LinkContainer>
    </RepositoryContainer>
  )
}
