import '@styles/globals.css';

import Nav from "@components/Nav"
import Footer from "@components/Footer"

export const metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/assets/icons/logo.png',
      media: '(prefers-color-scheme: light)'
    },
    {
        rel: 'icon',
        type: 'image/png',
        url: '/assets/icons/logo-white-outline.png',
        media: '(prefers-color-scheme: dark)'
      }
  ],
  title: "Pato a Jato"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}