import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { AboutUsSection } from "@/components/about-us-section"
import { RatingSystemSection } from "@/components/rating-system-section"
import { TopSitesPortugalSection } from "@/components/top-sites-portugal-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopCasinoPopup } from "@/components/top-casino-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/page-bg.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="pt-20">
          <HeroSection />
          <div id="rankings">
            <RankingsSection />
          </div>
          <AboutUsSection />
          <RatingSystemSection />
          <TopSitesPortugalSection />
          <div id="faq">
            <FAQSection />
          </div>
          <Footer />
        </div>
      </div>

      {/* Interactive Elements */}
      <CookieBanner />
      <TopCasinoPopup />
    </div>
  )
}
