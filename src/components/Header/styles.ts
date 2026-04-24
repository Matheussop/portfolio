import styled from 'styled-components'


export const HeaderContainer = styled.header`
  position: sticky;
  top: 1rem;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: rgba(10, 13, 19, 0.78);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 45px -30px ${({ theme }) => theme.colors.shadow};

  .brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.8rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    p {
      font-size: 1rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
  }
  
  a { 
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    position: relative;
    padding: 0.7rem 0.95rem;
    color: ${({ theme }) => theme.colors.gray};
    border-radius: 999px;
    transition: color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 0.78rem;
      font-family: var(--font-mono), monospace;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(255, 255, 255, 0.04);
      transform: translateY(-1px);
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primaryMuted};
  }

  .menuButton {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;
    width: 3rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    color: ${({ theme }) => theme.colors.text};

    span {
      width: 1rem;
      height: 1px;
      background: currentColor;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }
  }

  .mobileNavigation {
    display: none;
  }

  @media (max-width: 980px) {
    border-radius: 1.5rem;

    nav {
      display: none;
    }

    .menuButton {
      display: inline-flex;
    }

    .mobileNavigation {
      display: flex;
      position: absolute;
      top: calc(100% + 0.75rem);
      right: 0;
      width: min(22rem, 100%);
      padding: 0.8rem;
      flex-direction: column;
      gap: 0.25rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 1.5rem;
      background: rgba(10, 13, 19, 0.94);
      backdrop-filter: blur(18px);
      box-shadow: 0 18px 45px -30px ${({ theme }) => theme.colors.shadow};
      transform-origin: top right;
      animation: menuIn 0.22s ease;

      a {
        width: 100%;
        justify-content: flex-start;
      }
    }
  }

  @keyframes menuIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 640px) {
    margin-bottom: 1.5rem;
    padding: 0.85rem 1rem;

    .brand p {
      font-size: 0.92rem;
    }
  }
`;
