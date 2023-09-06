import styled, { keyframes } from "styled-components";

const typing  = keyframes`
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid #EC6452;
  }
  100% {
    opacity: 1;
    border: none;
  }

`;

const typing2  = keyframes`
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid #EC6452;
  }
  100% {
    opacity: 1;
    border: none;
  }
`;

const typingMenuSession  = keyframes`
  0% {
    width: 0;
    z-index: 1;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid #EC6452;
  }
  100% {
    opacity: 1;
    border: none;
  }
`;

const lineAnimation  = keyframes`
  0% {
    opacity: 0;
    left: -350px;
    z-index: -1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    left:0;
  }
`;

const cardsAnimation = keyframes`
  to {
    top: 0;
  }

  from {
    top: 350px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 4rem;

  h2 {
    white-space: nowrap;
    overflow: hidden;
    border-right: .15em solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    animation: ${typingMenuSession} 2s steps(40, end);
    animation-fill-mode: forwards;
    background-color: ${({theme}) => theme.colors.background};
  }

  .line{
    position: relative;
    animation: ${lineAnimation} 1s;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfosText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 60%;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    white-space: nowrap;
    overflow: hidden;
    border-right: .15em solid ${({ theme }) => theme.colors.primary};
    letter-spacing: .10em;
  }

  h1:nth-child(1) {
    width: 24em;
    animation: ${typing} 3s steps(40, end);
    -webkit-animation: ${typing} 3s steps(40, end);
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;

  }

  h1:nth-child(2) {
    width: 6em;
    opacity: 0;
    animation: ${typing2} 1.5s steps(20, end);
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }

`;

const easeInLeft = keyframes`
  0%   {left:500px; top:0px;}
  100% {left:0px; top:0px;}
`;

const easeInBottom = keyframes`
  0%   {left:0px; top:100px;}
  100% {left:0px; top:0px;}
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  Img { 
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

  .blockImage{
    animation: ${easeInLeft} 1s linear;
    position: relative;
  }

  div:not(:first-child) {
    display: flex;
    position: relative;
    animation: ${easeInBottom} 1s linear;
    margin-top: -0.5rem;
    background-color: ${({theme}) => theme.colors.background};
  }
  
  .dots {
    position: absolute;
    top: 0%;
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
  position: relative;
  animation: ${cardsAnimation} 2s ;
  z-index: 4;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SkillsContainer = styled.div`
  gap: 2rem;
  width: 100%;    
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const SkillsInfo = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem ;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
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

    @media (max-width: 1024px) {
      top: 10rem;
    }
  }

  .dots2 {
    position: relative;
    top: -2%;
    left: -20%;
    width: 10vmin;
    z-index: -1;

    @media (max-width: 1024px) {
      top: 2%;
      left: 0%;
    }
  }

  .square1 {
    position: relative;
    top: -20%;
    left: 60%;
    width: 10vmin;
    z-index: -1;

    @media (max-width: 1024px) {
      left: 60%;
      top: -6rem;
    }
  }

  .square2 {
    position: relative;
    top: 0%;
    left: 0%;
    width: 10vmin;
    z-index: -1;

    @media (max-width: 1024px) {
      left: 15%;
      top: 23%;
      position: sticky;
    }
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
    animation: none;

    @media (max-width: 1024px) {
      top: -10rem;
      left: 35%;
    }
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

    @media (max-width: 1024px) {
      top: -10rem;
      left: 35%;
    }
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

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  div{ 
    display: flex;
    flex-direction: column;
  }

  div p {
    color: ${(props) => props.theme.colors.gray};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
  }

  div:first-child {
    max-width: 50%;
  }

  div:not(:first-child) {
    display: flex;
    align-items: "center";
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.white};

    h3 {
      color: ${(props) => props.theme.colors.white};
      font-size: 1.2rem;
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.gray};

      svg {
        margin-right: 0.4rem;
      }
    }
  }
`;

export const WorksContainer = styled.div`
  padding: 0rem 3rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  align-content: space-evenly;

  div {
    margin-bottom: 1rem;
  }
`;

export const Separator = styled.div`
  width: 70%;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;