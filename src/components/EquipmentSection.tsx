import { MessageCircle, Phone, CheckCircle, Wrench, Zap, Sparkles } from "lucide-react";
import { EQUIPMENT_LIST, getWhatsAppEquipmentUrl, SHOP_DATA } from "../data/shopData";

interface EquipmentSectionProps {
  onSelectImage?: (src: string, title: string) => void;
}

export function EquipmentSection({ onSelectImage }: EquipmentSectionProps) {
  return (
    <section id="equipment" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
            Modern Farming Equipment & Tools
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            आधुनिक कृषी उपकरणे
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            शेतीची कामे अधिक सोपी आणि कार्यक्षम करण्यासाठी विविध प्रकारची कृषी उपकरणे आणि फवारणी साहित्य येथे उपलब्ध आहे.
          </p>
        </div>

        {/* Featured Bento/Grid Layout for Equipment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EQUIPMENT_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Real Photo */}
                <div
                  className="relative h-56 sm:h-64 bg-stone-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectImage?.(item.photo, item.name)}
                  title="फोटो मोठा करून पहा"
                >
                  <img
                    src={item.photo}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs bg-emerald-900/90 text-white px-2.5 py-1 rounded-md font-semibold">
                      {item.marathiCategory}
                    </span>
                    <span className="text-[11px] text-stone-300 bg-black/40 px-2 py-0.5 rounded">
                      प्रत्यक्ष दुकान फोटो
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2 pt-3 border-t border-stone-200/80">
                    <p className="text-xs font-bold text-stone-800 uppercase tracking-wider font-english">
                      Key Highlights:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {item.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: उपकरणांबद्दल चौकशी करा */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppEquipmentUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-xs transition-colors active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>उपकरणांबद्दल चौकशी करा</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Consultation banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-950 text-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-200 uppercase font-english">
              <Wrench className="w-4 h-4" />
              Spare Parts & Accessories
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              स्प्रेअरचे नोजल, बॅटरी किंवा इतर सुटे भाग हवे आहेत का?
            </h4>
            <p className="text-stone-300 text-sm max-w-xl">
              फवारणी पंपाचे पाईप, हँडल, चार्जर्स व विविध प्रकारची नोजल्स महावीर फर्टिलायझरमध्ये उपलब्ध आहेत. थेट संपर्क करून खात्री करा.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${SHOP_DATA.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 font-bold text-sm hover:bg-stone-100 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-800" />
              <span>कॉल करा: <span className="font-english">{SHOP_DATA.displayPhone}</span></span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
