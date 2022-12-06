import Navbar from "../src/elements/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
