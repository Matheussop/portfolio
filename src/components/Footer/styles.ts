import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  margin-top: clamp(4rem, 8vw, 7rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 0 2rem;
  background-color: transparent;

  .copyright {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.92rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 1rem;

    span {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;
    }

    p {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-family: var(--font-mono), monospace;
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  
  div{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
  }

  svg{
    color: ${(props) => props.theme.colors.white};
    transition: color 0.25s ease, transform 0.25s ease;
  }

  a:hover svg {
    color: ${({ theme }) => theme.colors.primaryStrong};
    transform: translateY(-2px);
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.25rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const About = styled.div`
  max-width: 40rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.7;
`;
