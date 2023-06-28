import './styles.css'

export const metadata = {
  title: 'Vanilla Fwrk App'
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
