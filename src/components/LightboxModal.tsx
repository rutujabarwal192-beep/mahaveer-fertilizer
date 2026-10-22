import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { GalleryPhoto, SHOP_DATA } from "../data/shopData";

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasMultiple?: boolean;
}

export function LightboxModal({
  photo,
  onClose,
  onNext,
  onPrev,
  hasMultiple = true,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  const inquiryUrl = `https://wa.me/919423780210?text=${encodeURIComponent(
    `नमस्कार, मी महावीर फर्टिलायझरच्या वेबसाईटवर "${photo.title}" हा फोटो पाहिला. यातील उपलब्धतेबद्दल मला माहिती हवी आहे.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors cursor-pointer"
        aria-label="बंद करा"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      {hasMultiple && onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-4 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="मागील फोटो"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasMultiple && onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-4 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="पुढील फोटो"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Dialog Content */}
      <div
        className="relative z-20 max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full photo display */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
          <img
            src={photo.src}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[65vh]"
          />
        </div>

        {/* Caption & Quick WhatsApp/Call Bar */}
        <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs text-emerald-400 font-semibold">
              {photo.categoryMarathi}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {photo.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              {photo.description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>याबाबत WhatsApp वर विचारा</span>
            </a>

            <a
              href={`tel:${SHOP_DATA.phone}`}
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 transition-colors"
              title="कॉल करा"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
