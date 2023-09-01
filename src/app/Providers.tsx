'use client';

import StyledComponentsRegistry from './lib/registry'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { Container } from './layout.styles'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Container>
        <Header />
          {props.children} 
        <Footer />
        </Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers