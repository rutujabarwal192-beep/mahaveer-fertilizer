import { useState } from "react";
import { Maximize2, MessageCircle } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto, getWhatsAppGeneralUrl } from "../data/shopData";

interface GallerySectionProps {
  onOpenLightbox: (photo: GalleryPhoto, index: number) => void;
}

export function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "सर्व फोटो (१३)" },
    { id: "storefront", label: "दुकान व परिसर" },
    { id: "seeds", label: "बियाणे व खते" },
    { id: "medicines", label: "कृषी औषधे" },
    { id: "equipment", label: "उपकरणे व स्प्रेअर्स" },
    { id: "team", label: "दुकान टीम" },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === "all") return true;
    return photo.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
              Real Shop Photographs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              आमच्या दुकानाची झलक
            </h2>
            <p className="mt-2 text-base sm:text-lg text-stone-600 max-w-2xl">
              महावीर फर्टिलायझर, जाधवाडी मार्केटयार्ड येथील प्रत्यक्ष दुकानाचे आणि उपलब्ध उत्पादनांचे मूळ छायाचित्रे.
            </p>
          </div>

          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-800 text-white" />
            <span>उत्पादनांचा फोटो पाठवून चौकशी करा</span>
          </a>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-emerald-800 text-white shadow-2xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid with natural aspect ratios and hover zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(photo, index)}
              className="group relative bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200">
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/90 text-stone-900 shadow-sm backdrop-blur-xs">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Badge for category */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[11px] font-medium bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-md">
                    {photo.categoryMarathi}
                  </span>
                </div>
              </div>

              {/* Title and description */}
              <div className="p-3.5 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 line-clamp-1 group-hover:text-emerald-800 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="mt-1 text-xs text-stone-500 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-emerald-800 font-medium">
                  <span>मोठा फोटो पहा</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
