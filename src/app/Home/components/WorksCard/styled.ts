import styled from "styled-components";

export const WorksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.35rem 1.4rem 1.35rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 24px 55px -42px ${({ theme }) => theme.colors.shadow};

  .meta {
    display: flex;
    position: relative;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -0.7rem;
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 999px;
      background: ${({ theme }) => theme.colors.primary};
      transform: translateY(-50%);
    }
  }

  .meta p,
  .meta span {
    color: ${({ theme }) => theme.colors.gray};
    font-family: var(--font-mono), monospace;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }

  h1 {
    font-size: clamp(1.25rem, 2.5vw, 1.55rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.15;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryStrong};
    font-size: 1rem;
    font-weight: 600;
  }

  .locale {
    font-size: 0.98rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
`;
