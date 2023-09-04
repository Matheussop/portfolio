import styled, { keyframes } from "styled-components";

const reactLoadingSkeleton = keyframes`
  100% {
    transform: translateX(100%);
  }

`;

export const SkeletonContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.gray};
  width: 330px;
  min-height: 200px;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  
  .react-loading-skeleton {
    --base-color: #afafaf;
    --highlight-color: #cacaca;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block; /* Enable animation */

    background-color: var(--base-color);

    width: 100%;
    border-radius: 0.25rem;
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
  padding: 1rem;
  text-align: left;
  gap: 0.5rem;
  z-index: 3;
`;

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  padding: 1rem 2rem;

`;

export const LinkContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  padding: 0.4rem 0;
  width: 60%;
`;


