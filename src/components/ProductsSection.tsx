import { useState } from "react";
import { MessageCircle, Phone, ArrowUpRight, Search, Check } from "lucide-react";
import { PRODUCT_CATEGORIES, ProductCategory, getWhatsAppProductUrl, SHOP_DATA } from "../data/shopData";

interface ProductsSectionProps {
  onSelectImage?: (src: string, title: string) => void;
}

export function ProductsSection({ onSelectImage }: ProductsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterTabs = [
    { id: "all", label: "सर्व उत्पादने" },
    { id: "fertilizers", label: "खते व पोषण" },
    { id: "seeds", label: "बियाणे" },
    { id: "crop-care", label: "पीक संरक्षण व औषधे" },
    { id: "equipment", label: "कृषी उपकरणे व साधने" },
  ];

  const filteredCategories = PRODUCT_CATEGORIES.filter((category) => {
    // Filter tab logic
    if (selectedFilter === "fertilizers" && category.id !== "fertilizers") return false;
    if (selectedFilter === "seeds" && category.id !== "seeds") return false;
    if (
      selectedFilter === "crop-care" &&
      !["insecticides", "fungicides", "weedicides", "crop-medicines"].includes(category.id)
    )
      return false;
    if (
      selectedFilter === "equipment" &&
      !["equipment", "sprayers", "other-supplies"].includes(category.id)
    )
      return false;

    // Search query logic
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = category.title.toLowerCase().includes(q);
      const matchDesc = category.description.toLowerCase().includes(q);
      const matchEnglish = category.englishTitle.toLowerCase().includes(q);
      const matchHighlights = category.highlights.some((h) => h.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchEnglish || matchHighlights;
    }

    return true;
  });

  return (
    <section id="products" className="py-14 sm:py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-emerald-800 tracking-wider uppercase font-english mb-2">
              Our Product Categories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              आमची उत्पादने
            </h2>
            <p className="mt-2 text-base sm:text-lg text-stone-600 max-w-2xl">
              शेतीसाठी आवश्यक विविध उत्पादने आणि साहित्य एकाच ठिकाणी.
            </p>
          </div>

          {/* Quick Notice: No fake prices */}
          <div className="text-xs sm:text-sm text-stone-500 bg-white p-3 rounded-xl border border-stone-200 shadow-2xs max-w-md">
            <span className="font-semibold text-stone-800">सूचना:</span> उपलब्ध साठा, चालू बाजारभाव व वाणांबद्दल थेट दुकानातून किंवा खालील WhatsApp बटनाद्वारे खात्री करा.
          </div>
        </div>

        {/* Search & Interactive Filter Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          
          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? "bg-emerald-800 text-white shadow-xs"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="उत्पादन किंवा औषध शोधा..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                रद्द
              </button>
            )}
          </div>

        </div>

        {/* 9 Product Category Cards in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Category Image using client's actual photograph */}
              <div
                className="relative h-48 sm:h-52 bg-stone-100 overflow-hidden cursor-pointer"
                onClick={() => onSelectImage?.(category.image, `${category.title} - महावीर फर्टिलायझर`)}
                title="फोटो मोठा करून पहा"
              >
                <img
                  src={category.image}
                  alt={`${category.title} - महावीर फर्टिलायझर दुकान प्रत्यक्ष फोटो`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md font-english font-medium">
                    {category.englishTitle}
                  </span>
                  <span className="text-[11px] bg-emerald-950/80 px-2 py-0.5 rounded text-emerald-200">
                    प्रत्यक्ष दुकान फोटो
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                    {category.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mandatory CTA: उत्पादन उपलब्धतेसाठी चौकशी करा */}
                <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                  <a
                    href={getWhatsAppProductUrl(category.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>उत्पादन उपलब्धतेसाठी चौकशी करा</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <a
                    href={`tel:${SHOP_DATA.phone}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs text-stone-600 hover:text-emerald-800 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>थेट फोन करा: <span className="font-english font-semibold">{SHOP_DATA.displayPhone}</span></span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-6">
            <p className="text-stone-700 font-medium">कोणतेही उत्पादन सापडले नाही.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter("all");
                setSearchQuery("");
              }}
              className="mt-3 text-sm text-emerald-800 font-semibold underline cursor-pointer"
            >
              सर्व उत्पादने पहा
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
