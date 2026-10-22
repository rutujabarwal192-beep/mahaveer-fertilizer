import { ArrowDown, MessageCircle, Navigation, ShieldCheck, MapPin, Store } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function Hero() {
  const handleScrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-stone-100 via-stone-50 to-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Supporting Text, and Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Location & Trust marker (clean editorial text, no pills) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-800">
              <span className="flex items-center gap-1.5 font-semibold">
                <Store className="w-4 h-4 text-emerald-700" />
                {SHOP_DATA.name}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-600 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                {SHOP_DATA.marketYard}, {SHOP_DATA.city}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-stone-900 tracking-tight leading-[1.2] text-balance">
              शेतकऱ्यांच्या विश्वासाचे <span className="text-emerald-800">कृषी सेवा केंद्र</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed font-normal max-w-2xl">
              खते, बियाणे, कीटकनाशके, कृषी औषधे आणि विविध आधुनिक कृषी उपकरणांसाठी महावीर फर्टिलायझरला भेट द्या.
            </p>

            {/* Store Address Banner (clean surface card) */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3 text-stone-700 text-sm">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-stone-900">
                  {SHOP_DATA.fullAddress}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  सर्व प्रकारची अस्सल कृषी उत्पादने व तातडीची उपलब्धता चौकशी
                </p>
              </div>
            </div>

            {/* Three Mandatory CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={handleScrollToProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>उत्पादने पहा</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 font-semibold text-base border border-emerald-200 transition-all duration-150 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700 fill-emerald-200" />
                <span>WhatsApp वर चौकशी करा</span>
              </a>

              {/* Third CTA: Directions */}
              <a
                href={SHOP_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-200/70 text-base font-medium transition-all duration-150 whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-emerald-700" />
                <span>दिशा मिळवा</span>
              </a>
            </div>

            {/* Quick trust metrics: simple editorial text, no pills */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-stone-600">
              <span className="flex items-center gap-1.5 font-medium text-stone-800">
                ✓ प्रत्यक्ष दुकानात उपलब्धता
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-800">
                ✓ दर्जेदार ब्रँडेड औषधे व बियाणे
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 font-medium text-stone-800">
                ✓ शेतीसाठी आधुनिक फवारणी पंप
              </span>
            </div>

          </div>

          {/* Right Column: Hero Image with actual storefront photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/90 bg-stone-100 group">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM__1__46ae8e3c.jpeg"
                alt="महावीर फर्टिलायझर मुख्य दुकान फलक व दर्शनी भाग जाधवाडी मार्केटयार्ड"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              {/* Subtle scrim for bottom caption readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold font-english">
                    Actual Storefront Photograph
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-snug">
                    महावीर फर्टिलायझर्स — जाधवाडी मार्केटयार्ड
                  </h3>
                  <p className="text-xs text-stone-200">
                    गाळा नं. ४६, ४७, ४८, छत्रपती संभाजीनगर
                  </p>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-white py-2.5 px-4 rounded-xl shadow-md border border-stone-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
                म
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-stone-900">अधिकृत कृषी सेवा केंद्र</p>
                <p className="text-[11px] text-stone-500 font-english">Call: {SHOP_DATA.phone}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
