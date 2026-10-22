import { MapPin, Navigation, Phone, MessageCircle, Mail, Clock, Store, ExternalLink } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

interface VisitShopSectionProps {
  onSelectImage?: (src: string, title: string) => void;
}

export function VisitShopSection({ onSelectImage }: VisitShopSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
            Physical Store Location
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            आमच्या दुकानाला भेट द्या
          </h2>
          <p className="mt-2 text-base sm:text-lg text-stone-600">
            छत्रपती संभाजीनगरच्या मध्यवर्ती जाधवाडी मार्केटयार्ड येथे प्रत्यक्ष भेट देऊन खात्रीशीर कृषी साहित्याची खरेदी करा.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Prominent Address & Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <div className="space-y-6">
              
              {/* Prominent Address Block */}
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Store className="w-5 h-5 text-emerald-700" />
                  <span>दुकान पत्ता</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                  गाळा नं. ४६, ४७, ४८,
                  <br />
                  जाधवाडी मार्केटयार्ड,
                  <br />
                  छत्रपती संभाजीनगर
                </div>
                <p className="text-xs text-stone-500 font-english pt-1">
                  Gala No. 46, 47, 48, Jadhavwadi Market Yard, Chhatrapati Sambhajinagar
                </p>
              </div>

              {/* Four Display Requirements */}
              <div className="space-y-3.5">
                
                {/* Phone */}
                <a
                  href={`tel:${SHOP_DATA.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500">📞 फोन नंबर</div>
                    <div className="text-base font-bold text-stone-900 font-english">
                      {SHOP_DATA.displayPhone}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500">💬 WhatsApp</div>
                    <div className="text-base font-bold text-stone-900">
                      WhatsApp वर चौकशी करा
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SHOP_DATA.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-stone-500">✉️ ई-मेल</div>
                    <div className="text-sm sm:text-base font-bold text-stone-900 font-english truncate">
                      {SHOP_DATA.email}
                    </div>
                  </div>
                </a>

                {/* Visit */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl border border-stone-100">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500">🏪 दुकानाची वेळ</div>
                    <div className="text-sm sm:text-base font-semibold text-stone-900">
                      सोमवार ते शनिवार (सकाळी ९:०० ते संध्याकाळी ८:००)
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Google Maps Direction Button */}
            <div className="pt-2">
              <a
                href={SHOP_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base shadow-xs transition-colors active:scale-[0.98]"
              >
                <Navigation className="w-5 h-5" />
                <span>Google Maps वर दिशा मिळवा</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>

          </div>

          {/* Right Column: Actual Store Facade Photo & Market Yard Context */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Real Storefront Photo */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100 flex-1 group cursor-pointer"
              onClick={() =>
                onSelectImage?.(
                  "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM_d7cba38d.jpeg",
                  "महावीर फर्टिलायझर दुकान फलक — जाधवाडी मार्केटयार्ड"
                )
              }
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM_d7cba38d.jpeg"
                alt="महावीर फर्टिलायझर जाधवाडी मार्केटयार्ड फलक व प्रवेश"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs text-emerald-300 font-semibold uppercase font-english">
                  Official Shop Front Signboard
                </span>
                <h4 className="text-base sm:text-lg font-bold">
                  गाळा नं. ४६, ४७, ४८, जाधवाडी मार्केटयार्ड
                </h4>
                <p className="text-xs text-stone-200 mt-0.5">
                  छत्रपती संभाजीनगर येथील कृषी बाजार आवारातील सहज ओळखता येणारे दुकान
                </p>
              </div>
            </div>

            {/* Travel Guidance Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 text-stone-700 text-xs sm:text-sm space-y-1.5">
              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>मार्केटयार्डात कसे पोहोचावे?</span>
              </div>
              <p className="text-stone-600">
                जाधवाडी कृषी उत्पन्न बाजार समिती (APMC Market Yard) परिसरात मुख्य व्यापारी रांगेत गाळा नं. ४६, ४७, ४८ येथे आमचे दुकान आहे. शेतकरी बांधवांसाठी वाहनांची सुलभ पार्किंग व मालाची चढ-उतार सोय उपलब्ध आहे.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
