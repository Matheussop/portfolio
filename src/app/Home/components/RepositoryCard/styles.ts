import styled from "styled-components";

export const RepositoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
  padding: 1.35rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 24px 55px -42px ${(props) => props.theme.colors.shadow};
  transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
  }
    
  div p {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.8rem;
  flex: 1;

  h1{
    color: ${(props) => props.theme.colors.text};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.1;
  }

  p {
    line-height: 1.75;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: auto;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.8rem 1rem;
    border: 1px solid ${(props) => props.theme.colors.borderStrong};
    border-radius: 999px;
    color: ${(props) => props.theme.colors.text};
    transition: border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;

    &:hover {
      border-color: ${(props) => props.theme.colors.primary};
      background: ${(props) => props.theme.colors.primaryMuted};
      color: ${(props) => props.theme.colors.primaryStrong};
    }
  }
`;


export const LanguageContainer = styled.div`
  display: flex;
  align-items: flex-start;

  p {
    width: fit-content;
    padding: 0.42rem 0.7rem;
    border-radius: 999px;
    background: ${(props) => props.theme.colors.primaryMuted};
    color: ${(props) => props.theme.colors.primaryStrong};
    font-family: var(--font-mono), monospace;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;
