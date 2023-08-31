import Link from "next/link";
import { ListRepositories } from "../../page";
import { InfosContainer, LanguageContainer, LinkContainer, RepositoryContainer } from "./styles";

interface RepositoryProps extends ListRepositories{
  image?: string;
}

export function RepositoryCard(props: RepositoryProps){
  const { name, description, language, html_url } = props
  return (
    <RepositoryContainer>
      { language && (
        <LanguageContainer>
          <p>{language}</p>
        </LanguageContainer>
      )}
      <InfosContainer>
        <h1>{name}</h1>
        {description && <p>{description}</p>}
      </InfosContainer>
      <LinkContainer>
        <Link href={html_url} target="_blank"> GitHub </Link>
      </LinkContainer>
    </RepositoryContainer>
  )
}