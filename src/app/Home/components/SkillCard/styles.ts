import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.white};
  width: 250px;
  text-align: center;
  flex-direction: column;
  
  div p {
    color: ${(props) => props.theme.colors.gray};
  }
  
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
  text-align: left;
  gap: 0.5rem;
  flex-wrap: wrap;

`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  padding: 0.4rem 0;

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
  }
`;



