import { useState } from "react";
import { X, Share2, Copy, Check, MessageCircle, QrCode, Smartphone, Globe } from "lucide-react";
import { SHOP_DATA } from "../data/shopData";

interface ShareWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareWebsiteModal({ isOpen, onClose }: ShareWebsiteModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://mahaveerfertilizer.in";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shareText = `महावीर फर्टिलायझर (Mahaveer Fertilizer), जाधवाडी मार्केटयार्ड, छत्रपती संभाजीनगर — खते, बियाणे, कीटकनाशके व कृषी उपकरणांसाठी आमची अधिकृत वेबसाईट पहा: ${currentUrl}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  // Quick QR Code using SVG or quick data URL API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    currentUrl
  )}&color=14532d`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-xs">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">
                वेबसाईट शेअर करा
              </h3>
              <p className="text-xs text-stone-500 font-english">
                Share Mahaveer Fertilizer Website
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            aria-label="बंद करा"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 text-sm">
          {/* QR Code Container */}
          <div className="flex flex-col items-center justify-center p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center">
            <div className="w-40 h-40 bg-white p-2.5 rounded-xl shadow-xs border border-stone-200 flex items-center justify-center">
              <img
                src={qrCodeUrl}
                alt="महावीर फर्टिलायझर वेबसाईट QR कोड"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-3 text-xs font-bold text-stone-800 flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-emerald-800" />
              <span>कॅमेराने स्कॅन करून वेबसाईट उघडा</span>
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              शेतकरी बांधव हा QR कोड स्कॅन करून थेट मोबाईलवर वेबसाईट उघडू शकतात.
            </p>
          </div>

          {/* Quick WhatsApp Share Button */}
          <div>
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp वर शेतकरी मित्रांना पाठवा</span>
            </a>
          </div>

          {/* Copy Link Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-700 block">
              वेबसाईट लिंक (Website URL):
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 px-3 py-2 bg-stone-100 rounded-xl text-xs font-english text-stone-700 border border-stone-200 truncate select-all">
                {currentUrl}
              </div>
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3.5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>कॉपी झाली!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>कॉपी करा</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* How to use info */}
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-emerald-800" />
              <span>मोबाईल स्क्रीनवर सेव्ह कसे करावे?</span>
            </div>
            <p className="text-stone-700">
              मोबाईल ब्राउझरमधील मेनू (⋮ किंवा Share) वर क्लिक करून <strong>"Add to Home Screen"</strong> निवडा. यामुळे महावीर फर्टिलायझरचे आयकॉन थेट मोबाईल स्क्रीनवर अ‍ॅपप्रमाणे दिसेल!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
