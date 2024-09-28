
import NavBar from "../components/NavBar";
import Functionality from "../components/Functionality";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero"
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Functionality />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;