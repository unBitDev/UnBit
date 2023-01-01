import Container from "../src/components/Container";
import Footer from "../src/elements/Footer";
import Navbar from "../src/elements/Navbar";
import '../styles/build.css'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="container flex justify-center items-center h-[65vh]">
          <h2 className="text-5xl p-2 bg-error text-white mr-2">404</h2>
          <h2 className="text-4xl">Not found Page!</h2>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default NotFound;
