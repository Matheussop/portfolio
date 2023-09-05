import styled from "styled-components";

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    animation: none;
    border: none;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    animation: none;
    border: none;
    white-space: normal;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    animation: none;
  }
`;