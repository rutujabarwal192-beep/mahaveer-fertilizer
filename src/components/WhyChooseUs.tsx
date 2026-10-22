import { Check, ShieldCheck, MapPin, Store, Package, PhoneCall, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US, SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function WhyChooseUs() {
  const icons = [Package, ShieldCheck, Sparkles, MapPin, PhoneCall, Store];

  return (
    <section className="py-14 sm:py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
            Trust & Reliability
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            महावीर फर्टिलायझर का?
          </h2>
          <p className="mt-2 text-base sm:text-lg text-stone-600">
            शेतकरी बांधवांसाठी अस्सल कृषी उत्पादने आणि खात्रीशीर सेवा.
          </p>
        </div>

        {/* 6 Genuine Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <span className="text-emerald-700">✓</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>महावीर फर्टिलायझर</span>
                  <span className="text-emerald-700 font-medium">अस्सल सेवा</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local presence banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-stone-900 text-base">
                जाधवाडी मार्केटयार्ड, छत्रपती संभाजीनगर येथे प्रत्यक्ष भेट द्या
              </p>
              <p className="text-xs text-stone-500 font-english mt-0.5">
                Gala No. 46, 47, 48 · Direct farmer assistance and stock availability
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-colors shrink-0 shadow-2xs"
          >
            WhatsApp वर संपर्क करा
          </a>
        </div>

      </div>
    </section>
  );
}
