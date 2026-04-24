import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem clamp(1rem, 3vw, 2rem) 2rem;
  width: 100%;
  position: relative;
 
  > header,
  > main,
  > footer {
    width: min(1120px, 100%);
    position: relative;
    z-index: 1;
  }
`
