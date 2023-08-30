"use client"
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { Container } from './layout.styles'


const firaCode = Fira_Code({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display:'swap'
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Criado por Matheus Spindula'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={firaCode.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
              {children}
            </Container>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
