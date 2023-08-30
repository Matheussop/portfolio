import styled from 'styled-components'


export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
  }

  a { 
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};
  }

  .active {
    color: ${(props) => props.theme.colors.white};
  }
`;