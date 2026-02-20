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

export function HomePage() {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-16">
          <HeroSection />
          <AuthorizationSection />
          <ProblemsSection />
          <SpecsTable />
          <FilmGuideSection />
          <PPFSection />
          <StandardsSection />
          <StoreEnvironmentSection />
          <TeamSection />
          <CasesSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
