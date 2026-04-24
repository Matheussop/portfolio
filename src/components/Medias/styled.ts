import styled from "styled-components";

export const MediasContainer = styled.div`
  display: flex;
  position: fixed;
  left: clamp(1rem, 2vw, 2rem);
  bottom: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  z-index: 8;
  padding: 1rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: rgba(10, 13, 19, 0.75);
  backdrop-filter: blur(12px);

  svg{
    color: ${(props) => props.theme.colors.white};
    transition: color 0.25s ease, transform 0.25s ease;
  }

  a:hover svg {
    color: ${({ theme }) => theme.colors.primaryStrong};
    transform: translateY(-2px);
  }

  span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    font-family: var(--font-mono), monospace;
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const Line = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderStrong};
  height: 72px;
  width: 1px;
`;
