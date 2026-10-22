import { useState } from "react";
import { MessageCircle, Phone, HelpCircle, Send } from "lucide-react";
import { SHOP_DATA } from "../data/shopData";

export function EnquiryCtaSection() {
  const [selectedProduct, setSelectedProduct] = useState<string>("सामान्य चौकशी");
  const [customQuery, setCustomQuery] = useState<string>("");

  const quickOptions = [
    "कांदा बियाणे",
    "भाजीपाला बियाणे",
    "फवारणी पंप व बॅटरी",
    "कीटकनाशक / बुरशीनाशक",
    "तणनाशक",
    "विद्राव्य खते व टॉनिक",
  ];

  const handleSendCustomWhatsApp = () => {
    let msg = `नमस्कार, मला महावीर फर्टिलायझर येथे उपलब्ध असलेल्या `;
    if (customQuery.trim()) {
      msg += `"${customQuery.trim()}" `;
    } else if (selectedProduct !== "सामान्य चौकशी") {
      msg += `"${selectedProduct}" `;
    } else {
      msg += `उत्पादनाबद्दल `;
    }
    msg += `माहिती हवी आहे. कृपया मार्गदर्शन करा.`;

    const url = `https://wa.me/919423780210?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const defaultWhatsAppUrl = `https://wa.me/919423780210?text=${encodeURIComponent(
    "नमस्कार, मला महावीर फर्टिलायझर येथे उपलब्ध असलेल्या उत्पादनाबद्दल माहिती हवी आहे. कृपया मार्गदर्शन करा."
  )}`;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 text-white relative overflow-hidden">
      {/* Subtle backdrop shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-semibold tracking-wide uppercase font-english border border-emerald-700/50">
            <HelpCircle className="w-3.5 h-3.5" />
            Product Availability Check
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            तुम्हाला एखादे विशिष्ट उत्पादन हवे आहे का?
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
            उत्पादनाची उपलब्धता, प्रकार किंवा इतर माहितीसाठी आम्हाला थेट WhatsApp किंवा फोनवर संपर्क करा.
          </p>
        </div>

        {/* Interactive Quick Helper for Farmers */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 max-w-2xl mx-auto shadow-lg space-y-5">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-emerald-200 mb-2">
              कोणत्या उत्पादनाबद्दल माहिती हवी आहे? निवडा किंवा नाव लिहा:
            </label>

            {/* Quick Pill buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {quickOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setSelectedProduct(opt);
                    setCustomQuery(opt);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    customQuery === opt
                      ? "bg-white text-emerald-950 font-bold shadow-xs"
                      : "bg-white/15 text-stone-100 hover:bg-white/25"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Input field */}
            <div className="relative">
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                placeholder="उदा. पंचगंगा कांदा बियाणे, कोराजन, २० लिटर स्प्रेअर पंप..."
                className="w-full px-4 py-3 rounded-xl bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* Action Buttons: WhatsApp वर विचारा & आता कॉल करा */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={handleSendCustomWhatsApp}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-green-500 hover:bg-green-600 text-emerald-950 font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950" />
              <span>WhatsApp वर विचारा</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </button>

            <a
              href={`tel:${SHOP_DATA.phone}`}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>आता कॉल करा</span>
            </a>
          </div>

          {/* Default message preview */}
          <div className="pt-2 text-center text-xs text-emerald-200/80 font-english">
            Direct WhatsApp: +91 9423780210 · Quick response on shop hours
          </div>
        </div>

      </div>
    </section>
  );
}
