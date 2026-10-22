import { Phone, MessageCircle, Navigation } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function MobileBottomBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] py-1.5 px-3">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${SHOP_DATA.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5 text-emerald-800" />
          <span className="text-[11px] font-bold mt-0.5">📞 कॉल</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 transition-colors active:scale-95 shadow-2xs"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-[11px] font-bold mt-0.5">💬 WhatsApp</span>
        </a>

        {/* Directions button */}
        <a
          href={SHOP_DATA.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 transition-colors active:scale-95"
        >
          <Navigation className="w-5 h-5 text-amber-700" />
          <span className="text-[11px] font-bold mt-0.5">📍 दिशा</span>
        </a>
      </div>
    </div>
  );
}
