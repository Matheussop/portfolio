import styled from "styled-components";

export const TitleSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 100%;

    h2 {
      color: ${({ theme }) => theme.colors.text};
      font-size: clamp(1.9rem, 4vw, 3rem);
      letter-spacing: -0.05em;
      line-height: 1;
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.82rem;
      font-family: var(--font-mono), monospace;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.gray};
    white-space: nowrap;
    transition: color 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryStrong};
    }
  }

  @media (max-width: 700px) {
    align-items: flex-start;

    div {
      flex-wrap: wrap;
    }
  }
`;

export const Line = styled.div`
  flex: 1;
  min-width: 6rem;
  max-width: 18rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  height: 1px;
`;
