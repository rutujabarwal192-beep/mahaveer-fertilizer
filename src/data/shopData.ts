export interface ShopInfo {
  name: string;
  englishName: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: string;
  marketYard: string;
  city: string;
  fullAddress: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  mapsUrl: string;
}

export const SHOP_DATA: ShopInfo = {
  name: "महावीर फर्टिलायझर",
  englishName: "Mahaveer Fertilizer",
  tagline: "शेतकऱ्यांच्या विश्वासाचे कृषी सेवा केंद्र",
  phone: "9423780210",
  displayPhone: "9423780210",
  email: "mahaveerfertillizer@gmail.com",
  address: "गाळा नं. ४६, ४७, ४८",
  marketYard: "जाधवाडी मार्केटयार्ड",
  city: "छत्रपती संभाजीनगर",
  fullAddress: "गाळा नं. ४६, ४७, ४८, जाधवाडी मार्केटयार्ड, छत्रपती संभाजीनगर",
  whatsappNumber: "919423780210",
  whatsappDefaultMessage: "नमस्कार, मला महावीर फर्टिलायझर येथे उपलब्ध असलेल्या उत्पादनाबद्दल माहिती हवी आहे. कृपया मार्गदर्शन करा.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("महावीर फर्टिलायझर, गाळा नं ४६, ४७, ४८, जाधवाडी मार्केटयार्ड, छत्रपती संभाजीनगर"),
};

export interface ProductCategory {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "fertilizers",
    title: "खते",
    englishTitle: "Fertilizers & Nutrients",
    description: "पिकांच्या पोषणासाठी विविध प्रकारची खते आणि पोषक उत्पादने.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.31_PM_ac5dbca7.jpeg",
    highlights: ["विविध रासायनिक व सेंद्रिय खते", "मायक्रोन्युट्रिएंट्स व टॉनिक्स", "विद्राव्य खते (Water Soluble)", "जमीन सुधारक व पोषण उत्पादने"],
  },
  {
    id: "seeds",
    title: "बियाणे",
    englishTitle: "Crop & Vegetable Seeds",
    description: "भाजीपाला, कांदा आणि विविध पिकांसाठी उपलब्ध बियाण्यांचे प्रकार.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.34_PM_e4081e72.jpeg",
    highlights: ["कांदा बियाणे (एलोरा, पंचगंगा, विशाल, अंबर)", "भाजीपाला बियाणे (मिरची, भेंडी, टोमॅटो)", "मका व धान्य पिकांचे बियाणे", "प्रमाणित व दर्जेदार वाण"],
  },
  {
    id: "insecticides",
    title: "कीटकनाशके",
    englishTitle: "Insecticides",
    description: "पिकांच्या संरक्षणासाठी विविध प्रकारची कीटकनाशके.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.31_PM__1__49b0ab22.jpeg",
    highlights: ["अळी, कीड व मावा नियंत्रणासाठी औषधे", "रसशोषक किडींचे नियंत्रण", "प्रभावी ब्रँडेड कीटकनाशके", "पीकनिहाय योग्य सल्ला"],
  },
  {
    id: "fungicides",
    title: "बुरशीनाशके",
    englishTitle: "Fungicides",
    description: "पिकांच्या संरक्षणासाठी विविध बुरशीनाशक उत्पादने.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.32_PM_b77586a7.jpeg",
    highlights: ["करपा, भुरी व डाऊनी नियंत्रक", "स्पर्शजन्य व आंतरप्रवाही बुरशीनाशके", "फळबागा व भाजीपाल्यासाठी योग्य", "पीक संजीवनी उत्पादने"],
  },
  {
    id: "weedicides",
    title: "तणनाशके",
    englishTitle: "Herbicides / Weedicides",
    description: "तण व्यवस्थापनासाठी उपलब्ध विविध उत्पादने.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.29_PM__1__00996246.jpeg",
    highlights: ["उगवणीपूर्व व उगवणीनंतरची तणनाशके", "कांदा, सोयाबीन व कापूस तण नियंत्रण", "गवत व रुंद पानांचे तण निवारण", "योग्य प्रमाण व वापर मार्गदर्शन"],
  },
  {
    id: "crop-medicines",
    title: "कृषी औषधे",
    englishTitle: "Plant Health & Tonics",
    description: "पिकांच्या विविध गरजांसाठी कृषी उपयोगी उत्पादने.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.29_PM_634a72dc.jpeg",
    highlights: ["फुलगळ रोखणारी औषधे", "फळांची फुगवण व चकाकी वाढवणारी औषधे", "ह्युमिक, अमिनो व सीवीड अर्क", "रोगप्रतिकारक संजीवक"],
  },
  {
    id: "equipment",
    title: "कृषी उपकरणे",
    englishTitle: "Agricultural Tools",
    description: "शेतीच्या विविध कामांसाठी आवश्यक उपकरणे आणि साधने.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.28_PM_4cd7b0af.jpeg",
    highlights: ["शेतीची प्राथमिक व दुय्यम साधने", "कटर, कात्री व छाटणी साधने", "पाईप्स, नोजल्स व फिटिंग्स", "मजबूत व टिकाऊ साहित्य"],
  },
  {
    id: "sprayers",
    title: "फवारणी उपकरणे",
    englishTitle: "Sprayers & Accessories",
    description: "प्रेशर स्प्रेअर, बॅटरी स्प्रेअर आणि विविध फवारणी साहित्य.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.32_PM_b77586a7.jpeg",
    highlights: ["१२V / १६L / २०L बॅटरी ऑपरेटेड स्प्रेअर्स", "मॅन्युअल प्रेशर स्प्रेअर्स व हँड पंप", "पॉवर शक्ती व नॅपसॅक स्प्रेअर्स", "स्प्रे गन, लेन्स व स्पेअर पार्ट्स"],
  },
  {
    id: "other-supplies",
    title: "इतर कृषी साहित्य",
    englishTitle: "General Farm Supplies",
    description: "शेतीसाठी आवश्यक विविध उपकरणे, साधने आणि साहित्य.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM__1__46ae8e3c.jpeg",
    highlights: ["फवारणीसाठी लागणारे सुरक्षा साहित्य", "मोजमाप कप व बाटल्या", "रोपवाटिका व शेत साहित्य", "दैनिक शेती गरजेच्या वस्तू"],
  },
];

export interface EquipmentItem {
  id: string;
  name: string;
  marathiCategory: string;
  description: string;
  photo: string;
  features: string[];
}

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: "battery-sprayers",
    name: "बॅटरी ऑपरेटेड फवारणी पंप (Battery Sprayers)",
    marathiCategory: "फवारणी पंप",
    description: "शेतातील जलद, श्रमविरहित आणि एकसमान फवारणीसाठी बॅटरीवर चालणारे आधुनिक स्प्रेअर्स उपलब्ध आहेत.",
    photo: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.28_PM_4cd7b0af.jpeg",
    features: ["१६ ते २० लिटर क्षमता", "दीर्घकाळ टिकणारी चार्जिंग बॅटरी", "अ‍ॅडजस्टेबल प्रेशर कंट्रोलर", "मजबूत बॉडी व सुटसुटीत खांदा पट्टा"],
  },
  {
    id: "pressure-sprayers",
    name: "प्रेशर स्प्रेअर्स आणि हँड स्प्रेअर (Pressure Sprayers)",
    marathiCategory: "प्रेशर स्प्रेअर",
    description: "भाजीपाला, रोपवाटिका आणि फळबागांसाठी मॅन्युअल व कॉम्पॅक्ट प्रेशर फवारणी उपकरणे.",
    photo: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.32_PM_b77586a7.jpeg",
    features: ["१ लिटर, २ लिटर व ५ लिटर घरगुती व शेती स्प्रेअर", "ब्रास व हेवी ड्युटी नोजल्स", "सहज हँडलिंग व हलके वजन", "पिकांच्या अचूक फवारणीसाठी सोयीचे"],
  },
  {
    id: "knapsack-sprayers",
    name: "नॅपसॅक स्प्रेअर आणि स्पेअर पार्ट्स (Knapsack Sprayers)",
    marathiCategory: "नॅपसॅक स्प्रेअर",
    description: "रॉयल्टी नॅपसॅक व पॉवर शक्ती कृषी स्प्रेअर व त्याचे सर्व अत्यावश्यक सुटे भाग.",
    photo: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.28_PM_4cd7b0af.jpeg",
    features: ["२० लिटर हेवी ड्युटी टाकी", "फिल्टर व लांब डंडी (Lance)", "विविध प्रकारची फवारणी नोजल्स", "बदली वॉशर व पंप पार्ट्स"],
  },
  {
    id: "agricultural-tools",
    name: "शेतीची साधने व इतर उपकरणे (Agricultural Tools)",
    marathiCategory: "शेती साधने",
    description: "दैनिक मशागत, छाटणी, बांधबंदिस्ती आणि पीक देखभालीसाठी लागणारी सर्व कृषी साधने.",
    photo: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM_d7cba38d.jpeg",
    features: ["छाटणी कात्री व कटर", "फवारणी होस पाईप्स", "मोजमाप साहित्य", "शेतीसाठी लागणारे आवश्यक साहित्य"],
  },
];

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "storefront" | "seeds" | "medicines" | "equipment" | "team";
  categoryMarathi: string;
  description: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM__1__46ae8e3c.jpeg",
    title: "महावीर फर्टिलायझर — मुख्य दुकान दर्शनी भाग",
    category: "storefront",
    categoryMarathi: "दुकान दर्शनी भाग",
    description: "जाधवाडी मार्केटयार्ड येथील महावीर फर्टिलायझरचे मुख्य दुकान (गाळा नं. ४६, ४७, ४८).",
  },
  {
    id: "g2",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.28_PM_4cd7b0af.jpeg",
    title: "दुकान प्रवेशद्वार व फवारणी उपकरणे",
    category: "equipment",
    categoryMarathi: "उपकरणे व दुकान",
    description: "दुकानाच्या समोर उपलब्ध असलेले विविध ब्रँड्सचे बॅटरी व नॅपसॅक फवारणी पंप आणि कृषी साहित्य.",
  },
  {
    id: "g3",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.06_PM_67880df5.jpeg",
    title: "महावीर फर्टिलायझर टीम — आपल्या सेवेत",
    category: "team",
    categoryMarathi: "आमची टीम",
    description: "शेतकरी बांधवांना योग्य सल्ला आणि अस्सल उत्पादने देण्यासाठी सज्ज असलेले महावीर फर्टिलायझरचे संचालक व सहकारी.",
  },
  {
    id: "g4",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.34_PM_e4081e72.jpeg",
    title: "कांदा व भाजीपाला बियाणे रॅक",
    category: "seeds",
    categoryMarathi: "बियाणे विभाग",
    description: "एलोरा, पंचगंगा, विशाल, अंबर, शुद्ध गुलाबी, जिंदाल इत्यादी नामांकित कंपन्यांचे कांदा व भाजीपाला बियाणे.",
  },
  {
    id: "g5",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.33_PM__1__780d972a.jpeg",
    title: "भाजीपाला बियाणे पॅकेट्स व पोषण उत्पादने",
    category: "seeds",
    categoryMarathi: "बियाणे व खते",
    description: "मका, भेंडी, मिरची, गवार, वांगी व इतर भाजीपाल्याची दर्जेदार बियाणे आणि वरच्या रॅकवर पोषण उत्पादने.",
  },
  {
    id: "g6",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.32_PM_b77586a7.jpeg",
    title: "प्रेशर स्प्रेअर्स व पीक संरक्षण औषधे",
    category: "equipment",
    categoryMarathi: "उपकरणे व औषधे",
    description: "हँड स्प्रेअर्स, प्रेशर स्प्रेअर्स, कोराजन, उलला आणि विविध कीटकनाशक व बुरशीनाशक उत्पादने.",
  },
  {
    id: "g7",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.31_PM__1__49b0ab22.jpeg",
    title: "कृषी औषधे व कीटकनाशके रॅक",
    category: "medicines",
    categoryMarathi: "कृषी औषधे",
    description: "पिकांच्या विविध किडी, रोग व तण व्यवस्थापनासाठी आवश्यक असलेली सर्व प्रकारची मान्यताप्राप्त कृषी औषधे.",
  },
  {
    id: "g8",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.31_PM_ac5dbca7.jpeg",
    title: "खते, टॉनिक्स व मायक्रोन्युट्रिएंट्स",
    category: "medicines",
    categoryMarathi: "खते व टॉनिक",
    description: "पिकांची जलद वाढ, फुटवे व उत्पादकता वाढवणारी विद्राव्य खते, टॉनिक्स व अन्नद्रव्ये.",
  },
  {
    id: "g9",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.29_PM__1__00996246.jpeg",
    title: "दुकानातील अंतर्गत साठा व व्यवस्था",
    category: "storefront",
    categoryMarathi: "दुकान अंतरंग",
    description: "सर्व प्रकारची खते, औषधे, बियाणे व कृषी साधनांचा सुव्यवस्थित आणि मोठा साठा.",
  },
  {
    id: "g10",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.30_PM_d7cba38d.jpeg",
    title: "मार्केटयार्ड परिसरातील दुकान फलक व प्रवेश",
    category: "storefront",
    categoryMarathi: "दुकान परिसर",
    description: "जाधवाडी मार्केटयार्डमधील गाळा क्रमांक ४६, ४७, ४८ येथील महावीर फर्टिलायझरचे अधिकृत केंद्र.",
  },
  {
    id: "g11",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.33_PM_3d2f0a9c.jpeg",
    title: "दुकान व्यवस्थापक व सल्लागार",
    category: "team",
    categoryMarathi: "आमची टीम",
    description: "शेतकऱ्यांना पीक संरक्षण आणि योग्य औषधोपचारासाठी प्रत्यक्ष मार्गदर्शन देणारे महावीर फर्टिलायझरचे संचालक.",
  },
  {
    id: "g12",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.32_PM__1__555fcf36.jpeg",
    title: "बियाण्यांचे विविध प्रकार व पॅकिंग",
    category: "seeds",
    categoryMarathi: "बियाणे साठा",
    description: "विविध हंगामातील नगदी पिकांसाठी आणि भाजीपाल्यासाठी उपलब्ध उच्च उगवणक्षमता असलेली बियाणे.",
  },
  {
    id: "g13",
    src: "/assets/aistudio/WhatsApp_Image_2026-10-22_at_10.14.29_PM_634a72dc.jpeg",
    title: "पीक संजीवके व कृषी रसायने",
    category: "medicines",
    categoryMarathi: "कृषी औषधे",
    description: "पिकांचे पोषण व सुरक्षितता राखण्यासाठी विविध कंपन्यांची शेती उपयोगी उत्पादने.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "विविध कृषी उत्पादने",
    description: "शेतीसाठी आवश्यक असणाऱ्या सर्व लहान-मोठ्या उत्पादनांचा मोठा व ताजा साठा एकाच छताखाली उपलब्ध.",
  },
  {
    title: "खते, बियाणे आणि पीक संरक्षण उत्पादने",
    description: "दर्जेदार बियाणे, नामांकित कंपन्यांची रासायनिक व जैविक खते आणि प्रभावी कीटकनाशके.",
  },
  {
    title: "विविध कृषी उपकरणांची उपलब्धता",
    description: "आधुनिक बॅटरी स्प्रेअर, प्रेशर पंप, पाईप्स, नोजल्स आणि शेती मशागतीची सर्व साधने उपलब्ध.",
  },
  {
    title: "स्थानिक शेतकऱ्यांसाठी सोयीचे ठिकाण",
    description: "छत्रपती संभाजीनगरमधील मध्यवर्ती जाधवाडी मार्केटयार्ड येथे वाहतुकीसाठी अत्यंत सुलभ गाळा.",
  },
  {
    title: "उत्पादन उपलब्धतेसाठी थेट संपर्क",
    description: "दुकानात येण्यापूर्वी फोन किंवा WhatsApp वर एका क्लिकवर साठा व उपलब्धतेची खात्री करण्याची सोय.",
  },
  {
    title: "दुकानाला प्रत्यक्ष भेट देण्याची सुविधा",
    description: "स्वतः दुकानात येऊन उत्पादने प्रत्यक्ष पाहून व पारखून खरेदी करण्याचा विश्वास.",
  },
];

export function getWhatsAppProductUrl(productTitle: string): string {
  const message = `नमस्कार, मला महावीर फर्टिलायझर येथे उपलब्ध असलेल्या "${productTitle}" बाबत माहिती आणि उपलब्धतेची चौकशी करायची आहे. कृपया मार्गदर्शन करा.`;
  return `https://wa.me/919423780210?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppEquipmentUrl(equipmentName: string): string {
  const message = `नमस्कार, मला महावीर फर्टिलायझर येथील "${equipmentName}" या कृषी उपकरणाबद्दल माहिती आणि उपलब्धतेबाबत चौकशी करायची आहे.`;
  return `https://wa.me/919423780210?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(): string {
  return `https://wa.me/919423780210?text=${encodeURIComponent(SHOP_DATA.whatsappDefaultMessage)}`;
}
