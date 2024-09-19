import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import { GlobalStyle } from '../styles/global'
import { Analytics } from "@vercel/analytics/react"

import Providers from './Providers'


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
        <Providers>
          <Analytics/>
          <GlobalStyle />
          {children}
        </Providers>
      </body>
    </html>
  )
}
