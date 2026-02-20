import { ScrollProgress } from '../components/ScrollProgress';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AuthorizationSection } from '../components/AuthorizationSection';
import { ProblemsSection } from '../components/ProblemsSection';
import { SpecsTable } from '../components/SpecsTable';
import { FilmGuideSection } from '../components/FilmGuideSection';
import { PPFSection } from '../components/PPFSection';
import { StandardsSection } from '../components/StandardsSection';
import { StoreEnvironmentSection } from '../components/StoreEnvironmentSection';
import { TeamSection } from '../components/TeamSection';
import { CasesSection } from '../components/CasesSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';

export function HomePage() {
  return (
    <>
      <a href="#authorization" className="skip-link">
        跳到主内容
      </a>
      <ScrollProgress />
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <Navbar />
        <div className="pt-16">
          <HeroSection />
          <hr className="section-divider border-0" />
          <AuthorizationSection />
          <hr className="section-divider border-0" />
          <ProblemsSection />
          <hr className="section-divider border-0" />
          <SpecsTable />
          <FilmGuideSection />
          <PPFSection />
          <StandardsSection />
          <TeamSection />
          <StoreEnvironmentSection />
          <CasesSection />
          <hr className="section-divider border-0" />
          <FAQSection />
          <hr className="section-divider border-0" />
          <ContactSection />
          <Footer />
          <FloatingCTA />
        </div>
      </div>
    </>
  );
}
