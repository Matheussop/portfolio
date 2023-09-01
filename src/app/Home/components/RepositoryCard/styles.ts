import styled from "styled-components";

export const RepositoryContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.white};
  width: 330px;
  min-height: 230px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  
  div p {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
  gap: 0.5rem;
  h1{
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: 500;
  }
  
`;

export const LinkContainer = styled.div`
  display: flex;
  margin: 1rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.primary};

  a {
    width: 100%;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    padding: 0.5rem;

  }
`;


export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  padding: 0.4rem 0;
`;
