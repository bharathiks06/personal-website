import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Films from "./components/Films";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Films />
      <Footer />
    </div>
  );
}
