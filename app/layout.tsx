import Footer from "../src/elements/Footer"
import Navbar from "../src/elements/Navbar"
import '../styles/build.css'

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
        <Footer />
      </body>
    </html>
  )
}
