import styled, { keyframes } from "styled-components";

const reactLoadingSkeleton = keyframes`
  100% {
    transform: translateX(100%);
  }

`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
  padding: 1.35rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  
  .react-loading-skeleton {
    --base-color: rgba(255, 255, 255, 0.06);
    --highlight-color: rgba(255, 255, 255, 0.12);
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block; /* Enable animation */

    background-color: var(--base-color);

    width: 100%;
    border-radius: 0.65rem;
    display: inline-flex;
    line-height: 1;

    position: relative;
    user-select: none;
    overflow: hidden;
    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */
  }

  .react-loading-skeleton::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      var(--base-color),
      var(--highlight-color),
      var(--base-color)
    );
    transform: translateX(-100%);

    animation-name: ${reactLoadingSkeleton};
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
  z-index: 3;
`;

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

