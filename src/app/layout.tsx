import './globals.css'

export const metadata = {
  title: 'NFT Marketplace',
  description: 'Buy and view your Marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-quicksand bg-gradient-bg">{children}</body>
    </html>
  )
}
