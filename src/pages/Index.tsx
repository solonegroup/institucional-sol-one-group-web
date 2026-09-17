import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Grupo from "@/components/Grupo";
import { InvestorRelationsBand } from "@/components/InvestorRelations";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const SITE_URL = "https://solone-launchpad.lovable.app";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="S.O.L ONE | Systems. Operations. Leadership."
      description="S.O.L ONE integra estratégia e operação para construir estruturas de alto desempenho em Systems, Operations e Leadership."
      path="/"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "S.O.L ONE",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.webp`,
          slogan: "Above the Rest. ONE.",
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "S.O.L ONE",
          url: SITE_URL,
        },
      ]}
    />
    <div className="grain-overlay" />
    <Navbar />
    <main>
      <Hero />
      <Manifesto />
      <Grupo />
      <InvestorRelationsBand />
    </main>
    <Footer />
  </div>
);

export default Index;
