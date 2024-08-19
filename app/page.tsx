import PslNavbar from "@/components/psl/PslNavbar";
import PslFooter from "@/components/psl/PslFooter";
import AdDisclaimer from "@/components/global/AdDisclaimer";
import Hero from "@/components/psl/Hero";

const Home = () => {
  return (
    <main>
      <PslNavbar />
      <AdDisclaimer />
      <Hero />
      <PslFooter />
    </main>
  );
};

export default Home;
