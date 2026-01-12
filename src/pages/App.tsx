import "./App.css";
import NavBar from "../components/ui/NavBar";
import HeroSection from "../components/ui/HeroSection";
import Footer from "../components/ui/Footer.tsx";
import ArticleSection from "../components/ui/ArticleSection.tsx";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection/>
      <Footer/>
    </>
  );
}

export default App;



