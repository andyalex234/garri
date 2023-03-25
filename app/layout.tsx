import './globals.css'

export const metadata = {
  title: 'Garri',
  description: 'Created in love by Andenet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
