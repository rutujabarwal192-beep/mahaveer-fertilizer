import { CheckCircle2, MapPin, Store, MessageCircle, Phone } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function AboutSection() {
  const genuinePoints = [
    "खते, पोषक उत्पादने व विद्राव्य खतांची उपलब्धता",
    "भाजीपाला, कांदा व इतर सर्व मुख्य पिकांची दर्जेदार बियाणे",
    "पिकांच्या सुरक्षिततेसाठी मान्यताप्राप्त कीटकनाशके व बुरशीनाशके",
    "बॅटरी व मॅन्युअल फवारणी पंप आणि कृषी साधने",
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
            About Our Business
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            महावीर फर्टिलायझरबद्दल
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-bold text-emerald-800">
            शेतीसाठी आवश्यक उत्पादने — एकाच ठिकाणी
          </p>
        </div>

        {/* 2-Column Split: Text Content & Actual Shop Interior Photographs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Marathi Copy & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-base sm:text-lg text-stone-700 leading-relaxed space-y-4">
              <p className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 text-stone-800 font-medium">
                महावीर फर्टिलायझर हे छत्रपती संभाजीनगर येथील कृषी उत्पादनांचे आणि शेतीसाठी आवश्यक साहित्याचे दुकान आहे. येथे शेतकऱ्यांच्या विविध गरजा लक्षात घेऊन खते, बियाणे, कीटकनाशके, कृषी औषधे, फवारणीसाठी उपकरणे आणि विविध कृषी साधनांची उपलब्धता आहे.
              </p>
              
              <p className="text-stone-600">
                आमच्या दुकानामध्ये स्थानिक परिसरातील आणि जिल्ह्यातील शेतकरी बांधवांना लागणारी सर्व नामांकित कंपन्यांची उत्पादने उपलब्ध असतात. योग्य खत, योग्य बियाणे आणि पीक संरक्षणासाठी लागणारी औषधे एकाच ठिकाणी उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे.
              </p>
            </div>

            {/* Genuine Point List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-stone-900">
                दुकानात उपलब्ध मुख्य उत्पादने:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {genuinePoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-stone-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shop location card & direct CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp वर संपर्क साधा</span>
              </a>

              <a
                href={`tel:${SHOP_DATA.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>कॉल करा: <span className="font-english">{SHOP_DATA.displayPhone}</span></span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1 font-english">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>Gala No. 46, 47, 48, Jadhavwadi Market Yard, Chhatrapati Sambhajinagar</span>
            </div>
          </div>

          {/* Right Column: Interior Shelves & Storage Photographs */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Photo 1: Interior Aisle & High-Capacity Storage */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 group bg-stone-100">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.29_PM__1__00996246.jpeg"
                alt="महावीर फर्टिलायझर दुकानातील अंतर्गत साठा व शेल्फ्स्"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-3 bg-white border-t border-stone-200">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span className="font-semibold text-stone-800">दुकान अंतरंग व साठा व्यवस्था</span>
                  <span className="text-emerald-700 font-medium">प्रत्यक्ष फोटो</span>
                </div>
              </div>
            </div>

            {/* Photo 2: Nutrients, Seed Packs & Crop Care Racks */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 group bg-stone-100">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.31_PM_ac5dbca7.jpeg"
                alt="महावीर फर्टिलायझर खते, टॉनिक्स व औषधे विभाग"
                referrerPolicy="no-referrer"
                className="w-full h-52 sm:h-60 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-3 bg-white border-t border-stone-200">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span className="font-semibold text-stone-800">विविध पोषक उत्पादने व खते शेल्फ</span>
                  <span className="text-emerald-700 font-medium">प्रत्यक्ष फोटो</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
