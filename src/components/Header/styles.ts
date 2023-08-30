import styled from 'styled-components'


export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  
  a { 
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};
  }

  .active {
    color: ${(props) => props.theme.colors.white};
  }
`;