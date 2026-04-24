import type { Metadata } from 'next'
import { Fira_Code, Manrope } from 'next/font/google'
import { GlobalStyle } from '../styles/global'
import { Analytics } from "@vercel/analytics/react"

import Providers from './Providers'


const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const firaCode = Fira_Code({
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Matheus Spindula | Portfolio',
  description: 'Portfolio criado por Matheus Spindula'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${manrope.variable} ${firaCode.variable}`}>
        <Providers>
          <Analytics/>
          <GlobalStyle />
          {children}
        </Providers>
      </body>
    </html>
  )
}
