import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
 
  > * {
    width: 70%;

    @media (max-width: 1540px) {
      width: 95%;
    }
  }
`
