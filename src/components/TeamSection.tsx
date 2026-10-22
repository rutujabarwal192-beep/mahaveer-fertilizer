import { Phone, MessageCircle, HeartHandshake, ShieldCheck } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

interface TeamSectionProps {
  onSelectImage?: (src: string, title: string) => void;
}

export function TeamSection({ onSelectImage }: TeamSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Photos of team & shop owner */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Team Photo at Counter */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 group bg-stone-100 cursor-pointer sm:col-span-2"
              onClick={() =>
                onSelectImage?.(
                  "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.06_PM_67880df5.jpeg",
                  "महावीर फर्टिलायझर संचालक व टीम"
                )
              }
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.06_PM_67880df5.jpeg"
                alt="महावीर फर्टिलायझर टीम — आपल्या सेवेत"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-3 bg-white border-t border-stone-200 flex items-center justify-between text-xs text-stone-700">
                <span className="font-bold">महावीर फर्टिलायझर — आपल्या सेवेत</span>
                <span className="text-emerald-800 font-medium">प्रत्यक्ष छायाचित्र</span>
              </div>
            </div>

            {/* Photo 2: Counter & Store Entrance */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 group bg-stone-100 cursor-pointer hidden sm:block"
              onClick={() =>
                onSelectImage?.(
                  "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.28_PM_4cd7b0af.jpeg",
                  "दुकान प्रवेशद्वार व कृषी उपकरणे"
                )
              }
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.28_PM_4cd7b0af.jpeg"
                alt="दुकान दर्शनी भाग व फवारणी पंप"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-stone-200 text-[11px] font-medium text-stone-700 truncate">
                दुकान प्रवेशद्वार व कृषी उपकरणे
              </div>
            </div>

            {/* Photo 3: Shop Presence */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 group bg-stone-100 cursor-pointer hidden sm:block"
              onClick={() =>
                onSelectImage?.(
                  "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.33_PM_3d2f0a9c.jpeg",
                  "दुकान व्यवस्थापक व सल्लागार"
                )
              }
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.33_PM_3d2f0a9c.jpeg"
                alt="दुकान व्यवस्थापक"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-2.5 bg-white border-t border-stone-200 text-[11px] font-medium text-stone-700 truncate">
                शेतकऱ्यांसाठी प्रत्यक्ष मार्गदर्शन
              </div>
            </div>

          </div>

          {/* Right Column: Verbatim Marathi Copy and Welcome message */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
                Dedicated Service To Farmers
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
                महावीर फर्टिलायझर — आपल्या सेवेत
              </h2>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
                शेतीसाठी आवश्यक उत्पादने आणि साहित्य शोधताना आमच्या दुकानाला भेट द्या. उपलब्ध उत्पादनांबद्दल अधिक माहितीसाठी आम्हाला थेट कॉल किंवा WhatsApp करा.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                शेतकरी बांधवांना योग्य वेळी, योग्य दर्जाचे आणि खात्रीशीर खत, बियाणे व औषधे मिळावीत यासाठी आम्ही नेहमी कटिबद्ध आहोत. दुकानात प्रत्यक्ष येऊन वाण व कंपन्यांची माहिती घेऊ शकता.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">आपुलकीचे मार्गदर्शन</h4>
                  <p className="text-xs text-stone-500">स्थानिक शेतकऱ्यांशी थेट संवाद</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">विश्वसनीय उत्पादने</h4>
                  <p className="text-xs text-stone-500">प्रमाणित कृषी साहित्य</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp वर थेट बोला</span>
              </a>

              <a
                href={`tel:${SHOP_DATA.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>फोन करा: <span className="font-english">{SHOP_DATA.displayPhone}</span></span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
