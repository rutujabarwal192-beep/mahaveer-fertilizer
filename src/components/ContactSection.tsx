import { useState, FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SHOP_DATA, getWhatsAppGeneralUrl } from "../data/shopData";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [productNeeded, setProductNeeded] = useState("");
  const [village, setVillage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let msg = `नमस्कार, मी ${name || "शेतकरी बांधव"}`;
    if (village.trim()) {
      msg += ` (${village.trim()} येथून)`;
    }
    msg += ` बोलत आहे. `;
    if (productNeeded.trim()) {
      msg += `मला महावीर फर्टिलायझर येथे उपलब्ध असलेल्या "${productNeeded.trim()}" बद्दल चौकशी करायची आहे. `;
    } else {
      msg += `मला कृषी उत्पादनांबद्दल माहिती हवी आहे. `;
    }
    if (phone.trim()) {
      msg += `माझा संपर्क क्रमांक: ${phone.trim()}. `;
    }
    msg += `कृपया मार्गदर्शन करा.`;

    const url = `https://wa.me/919423780210?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
            Direct Communication & Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            संपर्क करा
          </h2>
          <p className="mt-2 text-base sm:text-lg text-stone-600">
            कोणत्याही कृषी उत्पादनाची चौकशी, साठा माहिती किंवा प्रत्यक्ष दुकानाला भेट देण्यासाठी खालील पर्यायांद्वारे थेट संपर्क साधा.
          </p>
        </div>

        {/* 4 Large Action Buttons (Mandatory) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Call Button */}
          <a
            href={`tel:${SHOP_DATA.phone}`}
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>📞 कॉल करा</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>💬 WhatsApp करा</span>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${SHOP_DATA.email}`}
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
          >
            <Mail className="w-5 h-5" />
            <span>📧 ई-मेल करा</span>
          </a>

          {/* Directions Button */}
          <a
            href={SHOP_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-base shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
          >
            <MapPin className="w-5 h-5" />
            <span>📍 दिशा मिळवा</span>
          </a>

        </div>

        {/* 2-Column Details and Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-stone-900">
                  {SHOP_DATA.name}
                </h3>
                <p className="text-sm text-stone-500 font-english">
                  {SHOP_DATA.englishName}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm text-stone-700">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">फोन नंबर:</span>
                    <a
                      href={`tel:${SHOP_DATA.phone}`}
                      className="text-base font-bold text-stone-900 font-english hover:text-emerald-800"
                    >
                      {SHOP_DATA.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 fill-green-800 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">WhatsApp:</span>
                    <a
                      href={getWhatsAppGeneralUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-stone-900 font-english hover:text-green-700"
                    >
                      {SHOP_DATA.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-stone-500 block">ई-मेल पत्ता:</span>
                    <a
                      href={`mailto:${SHOP_DATA.email}`}
                      className="text-sm font-semibold text-stone-900 font-english hover:text-blue-800 break-all"
                    >
                      {SHOP_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">दुकान पत्ता:</span>
                    <p className="text-sm font-semibold text-stone-900 leading-snug">
                      गाळा नं. ४६, ४७, ४८,
                      <br />
                      जाधवाडी मार्केटयार्ड,
                      <br />
                      छत्रपती संभाजीनगर
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600">
              <span className="font-bold text-stone-900">सूचना:</span> दुकानातील उत्पादने प्रत्यक्ष पाहण्यासाठी सकाळी ९:०० ते रात्री ८:०० वाजेपर्यंत भेट देऊ शकता.
            </div>
          </div>

          {/* Right Column: Direct Message Sender */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-900">
                थेट संदेश किंवा चौकशी पाठवा
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                खालील माहिती भरून WhatsApp द्वारे एका क्लिकवर त्वरित संदेश पाठवा:
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">WhatsApp संदेश विंडो उघडली आहे!</p>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    आम्ही लवकरच आपल्या चौकशीला उत्तर देऊ.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    आपले नाव <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="उदा. ज्ञानेश्वर पाटील"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    मोबाईल क्रमांक (ऐच्छिक)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="उदा. 98xxxxxxxx"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 bg-white font-english"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    गावाचे नाव / तालुका
                  </label>
                  <input
                    type="text"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    placeholder="उदा. फुलंब्री / सिल्लोड / वैजापूर"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    हवे असलेले उत्पादन / औषध
                  </label>
                  <input
                    type="text"
                    value={productNeeded}
                    onChange={(e) => setProductNeeded(e.target.value)}
                    placeholder="उदा. कांदा बियाणे, फवारणी पंप, खत"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 bg-white"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-xs transition-colors active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp वर संदेश पाठवा</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center">
                हा संदेश थेट महावीर फर्टिलायझरच्या अधिकृत WhatsApp (9423780210) वर उघडेल.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
