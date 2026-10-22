/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuickContactBar } from "./components/QuickContactBar";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { EquipmentSection } from "./components/EquipmentSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GallerySection } from "./components/GallerySection";
import { TeamSection } from "./components/TeamSection";
import { EnquiryCtaSection } from "./components/EnquiryCtaSection";
import { VisitShopSection } from "./components/VisitShopSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { LightboxModal } from "./components/LightboxModal";
import { ShareWebsiteModal } from "./components/ShareWebsiteModal";
import { GALLERY_PHOTOS, GalleryPhoto } from "./data/shopData";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const sectionIds = ["hero", "about", "products", "equipment", "gallery", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenLightbox = (photo: GalleryPhoto, index: number) => {
    setLightboxPhoto(photo);
    setLightboxIndex(index);
  };

  const handleCustomImageOpen = (src: string, title: string) => {
    const existingIndex = GALLERY_PHOTOS.findIndex((p) => p.src === src);
    if (existingIndex !== -1) {
      setLightboxPhoto(GALLERY_PHOTOS[existingIndex]);
      setLightboxIndex(existingIndex);
    } else {
      setLightboxPhoto({
        id: "custom",
        src,
        title,
        category: "storefront",
        categoryMarathi: "दुकान व उत्पादने",
        description: "महावीर फर्टिलायझर, जाधवाडी मार्केटयार्ड, छत्रपती संभाजीनगर.",
      });
      setLightboxIndex(0);
    }
  };

  const handleNextPhoto = () => {
    const nextIdx = (lightboxIndex + 1) % GALLERY_PHOTOS.length;
    setLightboxIndex(nextIdx);
    setLightboxPhoto(GALLERY_PHOTOS[nextIdx]);
  };

  const handlePrevPhoto = () => {
    const prevIdx = (lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setLightboxIndex(prevIdx);
    setLightboxPhoto(GALLERY_PHOTOS[prevIdx]);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-['Mukta',sans-serif]">
      {/* Sticky Header Navigation */}
      <Header
        activeSection={activeSection}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Contact Action Bar */}
        <QuickContactBar />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Product Categories Section */}
        <ProductsSection onSelectImage={handleCustomImageOpen} />

        {/* 5. Agricultural Equipment Section */}
        <EquipmentSection onSelectImage={handleCustomImageOpen} />

        {/* 6. Why Choose Mahaveer Fertilizer */}
        <WhyChooseUs />

        {/* 7. Real Shop Photo Gallery */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* 8. Shop / Team Section */}
        <TeamSection onSelectImage={handleCustomImageOpen} />

        {/* 9. Product Availability Enquiry CTA */}
        <EnquiryCtaSection />

        {/* 10. Visit Our Shop Location & Details */}
        <VisitShopSection onSelectImage={handleCustomImageOpen} />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-First Fixed Bottom Action Bar */}
      <MobileBottomBar />

      {/* Photo Lightbox Modal */}
      <LightboxModal
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        hasMultiple={GALLERY_PHOTOS.length > 1}
      />

      {/* Share Website Modal with QR Code */}
      <ShareWebsiteModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
