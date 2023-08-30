import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 10rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
    background-color: ${(props) => props.theme.colors.background};
  }
  
  .dots {
    position: absolute;
    top: 20%;
    width: 12vmin;
    left: 75%;
    z-index: -1;
    color:'red';
  }
`;

export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 1rem;
  width: 1rem;

`;