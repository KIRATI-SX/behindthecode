import HeroSection from "@/components/ui/HeroSection";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer.tsx";
import ArticleSection from "@/components/ui/ArticleSection.tsx";
function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default HomePage;
