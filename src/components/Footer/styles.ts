import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  left: 20;
  bottom: 0;
  text-align: center;
  border-top: 1px solid;
  padding: 1rem 0  2rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Infos = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1rem;

    span {
      font-weight: 600;
    }
  }

`;
export const Media = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  div{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: flex-end;
  }
  svg{
    color: ${(props) => props.theme.colors.white};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const About = styled.div`

`;