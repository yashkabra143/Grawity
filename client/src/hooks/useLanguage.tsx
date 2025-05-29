import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.menu": "Menu",
    "nav.contact": "Contact",
    
    // Home Page
    "home.title": "Grawity",
    "home.subtitle": "The Taste of Indore",
    "home.description": "Experience the authentic flavors of Indore with our handcrafted vegetable momos, made with love and the finest local ingredients.",
    "home.explore": "Explore Menu",
    "home.watch": "Watch Story",
    "home.reviews.title": "What Our Customers Say",
    "home.reviews.subtitle": "Don't just take our word for it - hear from our satisfied customers who love the authentic taste of Grawity momos.",
    
    // About Page
    "about.title": "Our Story",
    "about.subtitle": "Born in the heart of Indore, Grawity brings you the authentic taste of traditional vegetable momos with a modern twist that celebrates our rich culinary heritage.",
    "about.story.title": "From Indore Streets to Your Plate",
    "about.fresh": "Fresh Ingredients",
    "about.community": "Community First",
    "about.quality": "Quality Promise",
    "about.vegetarian": "100% Vegetarian",
    "about.love": "Made with Love",
    
    // Menu Page
    "menu.title": "Our Menu",
    "menu.subtitle": "Discover our signature vegetable momos and other delicious offerings, each prepared with authentic Indore spices and fresh ingredients.",
    "menu.all": "All Items",
    "menu.momos": "Momos",
    "menu.appetizers": "Appetizers",
    "menu.beverages": "Beverages",
    "menu.view": "View Details",
    "menu.calories": "Calories",
    "menu.packaging": "Packaging",
    "menu.ingredients": "Ingredients",
    "menu.nutrition": "Nutrition Facts",
    "menu.close": "Close",
    
    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have questions about our momos? Want to place a bulk order? We'd love to hear from you! Reach out to experience the authentic taste of Indore.",
    "contact.visit": "Visit Our Store",
    "contact.follow": "Follow Us",
    "contact.message": "Send us a Message",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject",
    "contact.messageText": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    
    // Common
    "common.address": "Address",
    "common.phone": "Phone",
    "common.email": "Email",
    "common.hours": "Hours"
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.menu": "मेन्यू",
    "nav.contact": "संपर्क",
    
    // Home Page
    "home.title": "ग्रैविटी",
    "home.subtitle": "इंदौर का स्वाद",
    "home.description": "हमारे हाथ से बने सब्जी मोमोज़ के साथ इंदौर के प्रामाणिक स्वाद का अनुभव करें, जो प्रेम और बेहतरीन स्थानीय सामग्री के साथ बनाए गए हैं।",
    "home.explore": "मेन्यू देखें",
    "home.watch": "कहानी देखें",
    "home.reviews.title": "हमारे ग्राहक क्या कहते हैं",
    "home.reviews.subtitle": "केवल हमारी बात न मानें - हमारे संतुष्ट ग्राहकों से सुनें जो ग्रैविटी मोमोज़ के प्रामाणिक स्वाद से प्यार करते हैं।",
    
    // About Page
    "about.title": "हमारी कहानी",
    "about.subtitle": "इंदौर के दिल में जन्मे, ग्रैविटी आपको पारंपरिक सब्जी मोमोज़ का प्रामाणिक स्वाद लाता है जो हमारी समृद्ध पाक विरासत का जश्न मनाता है।",
    "about.story.title": "इंदौर की गलियों से आपकी थाली तक",
    "about.fresh": "ताज़ी सामग्री",
    "about.community": "समुदाय पहले",
    "about.quality": "गुणवत्ता का वादा",
    "about.vegetarian": "100% शाकाहारी",
    "about.love": "प्रेम से बनाया गया",
    
    // Menu Page
    "menu.title": "हमारा मेन्यू",
    "menu.subtitle": "हमारे विशेष सब्जी मोमोज़ और अन्य स्वादिष्ट व्यंजनों की खोज करें, जो प्रामाणिक इंदौरी मसालों और ताज़ी सामग्री के साथ तैयार किए गए हैं।",
    "menu.all": "सभी आइटम",
    "menu.momos": "मोमोज़",
    "menu.appetizers": "स्नैक्स",
    "menu.beverages": "पेय पदार्थ",
    "menu.view": "विवरण देखें",
    "menu.calories": "कैलोरी",
    "menu.packaging": "पैकेजिंग",
    "menu.ingredients": "सामग्री",
    "menu.nutrition": "पोषण तथ्य",
    "menu.close": "बंद करें",
    
    // Contact Page
    "contact.title": "संपर्क में रहें",
    "contact.subtitle": "हमारे मोमोज़ के बारे में सवाल हैं? बल्क ऑर्डर करना चाहते हैं? हम आपसे सुनना पसंद करेंगे! इंदौर के प्रामाणिक स्वाद का अनुभव करने के लिए संपर्क करें।",
    "contact.visit": "हमारे स्टोर पर आएं",
    "contact.follow": "हमें फॉलो करें",
    "contact.message": "हमें संदेश भेजें",
    "contact.firstName": "पहला नाम",
    "contact.lastName": "अंतिम नाम",
    "contact.email": "ईमेल पता",
    "contact.phone": "फोन नंबर",
    "contact.subject": "विषय",
    "contact.messageText": "संदेश",
    "contact.send": "संदेश भेजें",
    "contact.sending": "भेजा जा रहा है...",
    
    // Common
    "common.address": "पता",
    "common.phone": "फोन",
    "common.email": "ईमेल",
    "common.hours": "समय"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}