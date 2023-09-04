import { InfosContainer, LanguageContainer, LinkContainer, SkeletonContainer } from "./styles";

export function SkeletonCard(){
  return (
    <SkeletonContainer>
      <LanguageContainer>
        <span className='react-loading-skeleton'>
          &zwnj;
        </span>
      </LanguageContainer>
      <InfosContainer>
        <span className='react-loading-skeleton' style={{height: 25}}>&zwnj;</span>
        <span className='react-loading-skeleton'>&zwnj;</span>
        <span className='react-loading-skeleton'>&zwnj;</span>
      </InfosContainer>
      <LinkContainer>
        <span className='react-loading-skeleton'>&zwnj;</span>
      </LinkContainer>
    </SkeletonContainer>
  )
}