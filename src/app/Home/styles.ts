import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 4rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;
`;

export const InfosText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 60%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  Img { 
    transform: scaleX(-1);
    z-index: 1;

  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.gray};
    padding: 0.5rem;
    font-weight: 500;

    a { 
      padding-left: 0.5rem;
      color: #F9DD16;
      font-weight: 600;
      text-decoration: none;
    }
  }
  
  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;


  }

  div:not(:first-child) {
    margin-top: -2rem;
    background-color: ${({theme}) => theme.colors.background};
  }
  
  .dots {
    position: absolute;
    top: 20%;
    width: 12vmin;
    left: 75%;
    z-index: -1;
  }
`;

export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 1rem;
  width: 1rem;
`;

export const RepositoriesContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 2rem;
  width: 100%;  
`;

export const SkillsContainer = styled.div`
  gap: 2rem;
  width: 100%;    
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const SkillsInfo = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem ;
`;
export const SkillsFigures = styled.div`
  min-width: 400px;

  div{
    width: 100px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    height: 100px;
    border-color: ${(props) => props.theme.colors.primary};
  }

  .dots1 {
    position: relative;
    top: 60%;
    width: 10vmin;
    left: 65%;
    z-index: -1;
  }

  .dots2 {
    position: relative;
    top: -2%;
    left: -20%;
    width: 10vmin;
    z-index: -1;
  }

  .square1 {
    position: relative;
    top: -20%;
    left: 60%;
    width: 10vmin;
    z-index: -1;
  }

  .square2 {
    position: relative;
    top: 0%;
    left: 0%;
    width: 10vmin;
    z-index: -1;
  }

  .line{
    width: 8rem !important;
    height: 1px;
    position: relative;
    top: -30%;
    left: 30%;
    width: 10vmin;
    z-index: -1;
    transform: rotate(50deg);
    border-color: ${(props) => props.theme.colors.white};
  }

  .line2{
    width: 8rem!important;
    height: 1px;
    position: relative;
    top: -30%;
    left: 30%;
    width: 10vmin;
    z-index: -1;
    transform: rotate(-35deg);
    border-color: ${(props) => props.theme.colors.white};

  }

`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  div{ 
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  div p {
    color: ${(props) => props.theme.colors.gray};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;

    a {
      padding-left: 0.5rem;
      color: #F9DD16;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

