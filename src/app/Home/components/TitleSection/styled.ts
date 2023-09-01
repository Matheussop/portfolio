import styled from "styled-components";

export const TitleSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    h2 {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 2rem;
    }

    span {
      font-size: 2rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
   }
`;

export const Line = styled.div`
  min-width: 25rem;
  margin-left: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 1px;
`;