import { Phone, MessageCircle, MapPin, Store, ChevronRight } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function QuickContactBar() {
  const quickActions = [
    {
      icon: Phone,
      title: "कॉल करा",
      subtitle: SHOP_DATA.displayPhone,
      href: `tel:${SHOP_DATA.phone}`,
      isExternal: false,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
      iconBg: "bg-emerald-700 text-white",
      highlight: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp करा",
      subtitle: "उत्पादनांची चौकशी करा",
      href: getWhatsAppGeneralUrl(),
      isExternal: true,
      color: "bg-green-50 text-green-900 border-green-200 hover:bg-green-100",
      iconBg: "bg-green-600 text-white",
      highlight: true,
    },
    {
      icon: MapPin,
      title: "दिशा मिळवा",
      subtitle: "दुकानापर्यंत पोहोचा",
      href: SHOP_DATA.mapsUrl,
      isExternal: true,
      color: "bg-amber-50/70 text-amber-900 border-amber-200 hover:bg-amber-100/70",
      iconBg: "bg-amber-700 text-white",
      highlight: false,
    },
    {
      icon: Store,
      title: "दुकानाला भेट द्या",
      subtitle: SHOP_DATA.marketYard,
      href: "#about",
      isExternal: false,
      color: "bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100",
      iconBg: "bg-stone-800 text-white",
      highlight: false,
    },
  ];

  return (
    <section className="relative z-10 -mt-4 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-2 sm:p-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {quickActions.map((action, idx) => (
            <a
              key={idx}
              href={action.href}
              target={action.isExternal ? "_blank" : undefined}
              rel={action.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (action.href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(action.href)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all duration-150 active:scale-[0.98] ${action.color}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${action.iconBg}`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 truncate">
                    {action.title}
                  </h4>
                  <p className="text-xs text-stone-600 truncate font-english">
                    {action.subtitle}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 ml-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
