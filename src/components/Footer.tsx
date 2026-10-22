import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "मुख्यपृष्ठ", href: "#hero" },
    { label: "आमच्याबद्दल", href: "#about" },
    { label: "उत्पादने", href: "#products" },
    { label: "कृषी उपकरणे", href: "#equipment" },
    { label: "गॅलरी", href: "#gallery" },
    { label: "संपर्क", href: "#contact" },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-24 sm:pb-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xl">
                म
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {SHOP_DATA.name}
                </h3>
                <p className="text-xs text-stone-400 font-english">
                  {SHOP_DATA.englishName}
                </p>
              </div>
            </div>

            <p className="text-base text-stone-300 font-medium">
              शेतीसाठी आवश्यक उत्पादने आणि कृषी साहित्य
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              छत्रपती संभाजीनगर व परिसरातील शेतकरी बांधवांना दर्जेदार खते, बियाणे, कीटकनाशके आणि आधुनिक फवारणी साधनांची खात्रीशीर उपलब्धता.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-english">
              महत्त्वाचे दुवे (Links)
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-emerald-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-english">
              संपर्क माहिती (Contact)
            </h4>
            
            <div className="space-y-2.5 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <a
                    href={`tel:${SHOP_DATA.phone}`}
                    className="hover:text-white font-english font-semibold"
                  >
                    {SHOP_DATA.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                <div>
                  <a
                    href={getWhatsAppGeneralUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: <span className="font-english font-semibold">{SHOP_DATA.displayPhone}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <a
                    href={`mailto:${SHOP_DATA.email}`}
                    className="hover:text-white font-english text-xs sm:text-sm break-all"
                  >
                    {SHOP_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-stone-300 leading-snug">
                  {SHOP_DATA.fullAddress}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 {SHOP_DATA.name}. सर्व हक्क राखीव.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>वर जा</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
