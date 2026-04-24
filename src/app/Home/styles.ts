import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-14px);
  }
`

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(211, 161, 108, 0.35);
  }

  50% {
    transform: scale(1.12);
    box-shadow: 0 0 0 12px rgba(211, 161, 108, 0);
  }
`

const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-width: 10rem;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease,
    color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const panelStyle = css`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.75rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 24px 60px -42px ${({ theme }) => theme.colors.shadow};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 45%);
    pointer-events: none;
  }
`

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 7vw, 7rem);
  padding: clamp(1rem, 4vw, 3rem) 0 5rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(90px);
    opacity: 0.4;
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    width: 18rem;
    height: 18rem;
    top: 3rem;
    right: 2rem;
    background: rgba(211, 161, 108, 0.18);
  }

  &::after {
    width: 14rem;
    height: 14rem;
    left: -2rem;
    top: 30rem;
    background: rgba(85, 115, 184, 0.14);
  }
`

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  scroll-margin-top: 8rem;
  z-index: 1;
`

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
  min-height: calc(100vh - 13rem);
  z-index: 1;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 44rem;
`

export const HeroEyebrow = styled.p`
  width: fit-content;
  padding: 0.45rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.primaryStrong};
  font-family: var(--font-mono), monospace;
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(3.1rem, 7vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const HeroDescription = styled.p`
  max-width: 38rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1rem, 1.45vw, 1.16rem);
  line-height: 1.9;
`

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

export const PrimaryLink = styled(Link)`
  ${buttonStyle}
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 22px 50px -30px rgba(211, 161, 108, 0.9);

  &:hover {
    background: ${({ theme }) => theme.colors.primaryStrong};
  }
`

export const SecondaryLink = styled(Link)`
  ${buttonStyle}
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: rgba(255, 255, 255, 0.03);

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryMuted};
  }
`

export const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 34rem;

  @media (max-width: 980px) {
    min-height: auto;
  }
`

export const PortraitFrame = styled.div`
  ${panelStyle}
  width: min(100%, 30rem);
  padding: clamp(1rem, 3vw, 1.5rem);

  .imageWrap {
    position: relative;
    z-index: 1;
    border-radius: 1.4rem;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(17, 23, 32, 0.6), rgba(17, 23, 32, 0.15));
  }

  .portraitImage {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: grayscale(10%) saturate(0.92) contrast(1.04);
  }

  .dots {
    position: absolute;
    right: -1.5rem;
    top: 2rem;
    width: 8rem;
    opacity: 0.45;
    animation: ${float} 7s ease-in-out infinite;
    z-index: 2;
  }
`

export const PortraitBadge = styled.div`
  position: absolute;
  right: -1rem;
  bottom: 1.25rem;
  z-index: 3;
  max-width: 18rem;
  padding: 1rem 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 1.3rem;
  background: rgba(10, 13, 19, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 24px 50px -35px ${({ theme }) => theme.colors.shadow};

  .status {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .dot {
    width: 0.68rem;
    height: 0.68rem;
    margin-top: 0.35rem;
    flex-shrink: 0;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${pulse} 3.2s ease-in-out infinite;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.92rem;
    line-height: 1.6;
  }

  strong {
    display: block;
    margin-bottom: 0.2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryStrong};
  }

  @media (max-width: 980px) {
    position: relative;
    right: auto;
    bottom: auto;
    max-width: 100%;
    margin-top: 1rem;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  align-items: stretch;
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(0, 1fr);
  gap: 1.25rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const AboutLead = styled.div`
  ${panelStyle}
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;

  span {
    width: fit-content;
    color: ${({ theme }) => theme.colors.primaryStrong};
    font-family: var(--font-mono), monospace;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: clamp(1.7rem, 4vw, 2.4rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.8;
  }
`

export const AboutCopy = styled.div`
  ${panelStyle}
  padding: 1.8rem;

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.9;
  }

  p + p {
    margin-top: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryStrong};
  }
`

export const WorksList = styled.div`
  display: grid;
  gap: 1rem;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
  gap: 1.25rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`

export const ContactCard = styled.div`
  ${panelStyle}
  padding: 1.75rem;

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    margin-bottom: 0.85rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.9;
  }
`

export const ContactLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.9rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.text};
    background: rgba(255, 255, 255, 0.02);
    transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      flex-shrink: 0;
    }

    &:hover {
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primaryMuted};
    }
  }
`

export const EmptyStateCard = styled.div`
  ${panelStyle}
  grid-column: 1 / -1;
  padding: 1.6rem;

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.8;
  }
`
