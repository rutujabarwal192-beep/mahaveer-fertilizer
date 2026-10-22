import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, MapPin, Share2 } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

interface HeaderProps {
  activeSection?: string;
  onOpenShare?: () => void;
}

export function Header({ activeSection = "hero", onOpenShare }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "मुख्यपृष्ठ", href: "#hero", id: "hero" },
    { label: "आमच्याबद्दल", href: "#about", id: "about" },
    { label: "उत्पादने", href: "#products", id: "products" },
    { label: "कृषी उपकरणे", href: "#equipment", id: "equipment" },
    { label: "फोटो गॅलरी", href: "#gallery", id: "gallery" },
    { label: "संपर्क", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200"
          : "bg-white border-b border-stone-200/80"
      }`}
    >
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 text-emerald-950 hover:text-emerald-800 transition-colors shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xl shadow-xs">
              म
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-950 whitespace-nowrap">
                {SHOP_DATA.name}
              </span>
              <span className="text-xs text-stone-500 font-english -mt-1 tracking-wide">
                {SHOP_DATA.englishName}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors whitespace-nowrap relative py-1 hover:text-emerald-800 ${
                  activeSection === link.id
                    ? "text-emerald-800 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-800"
                    : "text-stone-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {onOpenShare && (
              <button
                type="button"
                onClick={onOpenShare}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-emerald-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                title="वेबसाईट लिंक व QR कोड शेअर करा"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>शेअर करा</span>
              </button>
            )}

            <a
              href={`tel:${SHOP_DATA.phone}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
              title="थेट कॉल करा"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span className="font-english font-semibold">{SHOP_DATA.displayPhone}</span>
            </a>

            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp चौकशी</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenShare && (
              <button
                type="button"
                onClick={onOpenShare}
                aria-label="वेबसाईट शेअर करा"
                className="p-2 text-stone-700 hover:bg-stone-100 rounded-lg"
              >
                <Share2 className="w-5 h-5" />
              </button>
            )}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg"
            >
              <MessageCircle className="w-6 h-6 fill-emerald-100" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-emerald-900 hover:bg-stone-100"
              aria-expanded={mobileMenuOpen}
              aria-label="मेनू उघडा"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-3 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={`tel:${SHOP_DATA.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-stone-100 text-stone-800 font-semibold text-sm hover:bg-stone-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>कॉल करा: <span className="font-english">{SHOP_DATA.displayPhone}</span></span>
            </a>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp वर थेट बोला</span>
            </a>
            <a
              href={SHOP_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg text-stone-600 text-xs hover:text-stone-900 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>{SHOP_DATA.marketYard}, {SHOP_DATA.city}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
