"use client"

import { useState } from "react"

const menuData = {
  "salad-majedar": [
    {
      name_en: "Green Salad",
      name_hi: "ग्रीन सलाद",
      price: 50,
    },
    {
      name_en: "Papad fry",
      name_hi: "पापड़ फ्राय",
      price: 25,
    },
    {
      name_en: "Masala Papad Fry",
      name_hi: "पापड़ फ्राय मसाला",
      price: 30,
    },
  ],
  "dal-ka-jayka": [
    {
      name_en: "Dal Fry",
      name_hi: "दाल फ्राई",
      price: 100,
    },
    {
      name_en: "Dal Tadka",
      name_hi: "दाल तड़का",
      price: 120,
    },
  ],
  "chawal-lajizav": [
    {
      name_en: "Jeera Rice",
      name_hi: "जीरा चावल",
      price: 120,
    },
    {
      name_en: "Veg Pulao",
      name_hi: "वेज पुलाव",
      price: 150,
    },
  ],
  "paneer-rajasthani-special": [
    {
      name_en: "Paneer Angaara",
      name_hi: "पनीर अंगारा",
      price: 240,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/paneer-tikka-500x500.jpg",
    },
    {
      name_en: "Paneer Maharaja",
      name_hi: "पनीर महाराजा",
      price: 230,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/07/shahi-paneer-recipe.jpg",
    },
    {
      name_en: "Paneer Matka",
      name_hi: "पनीर मटका",
      price: 220,
      image_url: "https://www.tarladalal.com/images/shared/Picture15000.jpg",
    },
    {
      name_en: "Paneer Lavabdar",
      name_hi: "पनीर लवाबदार",
      price: 200,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-lababdar.webp",
    },
    {
      name_en: "Paneer Malaai",
      name_hi: "पनीर मलाई",
      price: 210,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/malai-kofta-500x500.jpg",
    },
    {
      name_en: "Paneer Marwari",
      name_hi: "पनीर मारवाड़ी",
      price: 230,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/paneer-makhani.jpg",
    },
    {
      name_en: "Paneer Hyderabadi",
      name_hi: "पनीर हैदराबादी",
      price: 200,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/matar-paneer-500x500.jpg",
    },
    {
      name_en: "Paneer patyala",
      name_hi: "पनीर पटयाला",
      price: 200,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/04/shahi-paneer-recipe.jpg",
    },
    {
      name_en: "Paneer Tikka Masala",
      name_hi: "पनीर टिक्का मसाला",
      price: 230,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/paneer-tikka-masala-500x500.jpg",
    },
    {
      name_en: "Paneer Punjabi",
      name_hi: "पनीर पंजाबी",
      price: 200,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
    },
    {
      name_en: "Paneer Do Pyaza",
      name_hi: "पनीर दो प्याजा",
      price: 200,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/paneer-do-pyaza-500x500.jpg",
    },
    {
      name_en: "Paneer Butter Masala",
      name_hi: "पनीर बटर मसाला",
      price: 190,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
    },
    {
      name_en: "Paneer Handi",
      name_hi: "पनीर हांडी",
      price: 210,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/paneer-handi.jpg",
    },
    {
      name_en: "Shahi Paneer (Sweet)",
      name_hi: "शाही पनीर (स्वीट)",
      price: 200,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/shahi-paneer-500x500.jpg",
    },
    {
      name_en: "Paneer Bhurji",
      name_hi: "पनीर भूर्जी",
      price: 240,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/paneer-bhurji-500x500.jpg",
    },
    {
      name_en: "Paneer Chatpata",
      name_hi: "पनीर चटपटा",
      price: 220,
      image_url: "https://www.tarladalal.com/images/shared/Picture12450.jpg",
    },
    {
      name_en: "Matar Paneer",
      name_hi: "मटर पनीर",
      price: 180,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
    },
    {
      name_en: "Palak Paneer",
      name_hi: "पालक पनीर",
      price: 170,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/palak-paneer-recipe-500x500.jpg",
    },
    {
      name_en: "Kadhai Paneer",
      name_hi: "कढ़ाई पनीर",
      price: 220,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/kadai-paneer-500x500.jpg",
    },
    {
      name_en: "Paneer tuphani",
      name_hi: "पनीर तुफानी",
      price: 250,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-khurchan-500x500.jpg",
    },
    {
      name_en: "Kaju Kari",
      name_hi: "काजू करी",
      price: 200,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/06/kaju-curry-recipe.jpg",
    },
    {
      name_en: "Kaju Masala",
      name_hi: "काजू मसाला",
      price: 220,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/kaju-masala-500x500.jpg",
    },
    {
      name_en: "Kaju Paneer",
      name_hi: "काजू पनीर",
      price: 240,
      image_url: "https://www.tarladalal.com/images/shared/Picture13500.jpg",
    },
    {
      name_en: "paneer Banjara",
      name_hi: "पनीर बंजारा",
      price: 200,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/kaju-masala-gravy.jpg",
    },
    {
      name_en: "Kaju Kofta",
      name_hi: "काजू कोफ्ता",
      price: 250,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/malai-kofta-500x500.jpg",
    },
    {
      name_en: "Veg Jaipuri",
      name_hi: "वेज जयपुरी",
      price: 190,
      image_url:
        "https://hebbarskitchen.com/wp-content/uploads/2025/06/Veg-Jaipuri-Recipe-Jaipuri-Vegetable-Curry-Hotel-Style-1-scaled.jpeg",
    },
    {
      name_en: "Veg Kolhapuri",
      name_hi: "वेज कोल्हापुरी",
      price: 190,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/kolhapuri-veg-500x500.jpg",
    },
    {
      name_en: "Paneer 65",
      name_hi: "पनीर 65",
      price: 220,
      image_url: "https://www.yummyindiankitchen.com/wp-content/uploads/2020/07/Paneer-65.jpg",
    },
  ],
  "sabji-ki-bahar": [
    {
      name_en: "Kadhi Pakoda",
      name_hi: "कड़ी पकोड़ा",
      price: 120,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/kadhi-pakora-500x500.jpg",
    },
    {
      name_en: "Sev Masala",
      name_hi: "सेव मसाला",
      price: 130,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/06/sev-tamatar-ki-sabzi.jpg",
    },
    {
      name_en: "Sev Tomato",
      name_hi: "सेव टमाटर",
      price: 130,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/sev-tamatar-sabzi-500x500.jpg",
    },
    {
      name_en: "Sev Doodh",
      name_hi: "सेव दुध",
      price: 130,
      image_url: "https://www.tarladalal.com/images/shared/Picture12000.jpg",
    },
    {
      name_en: "Sev Mawa",
      name_hi: "सेव मावा",
      price: 150,
      image_url: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/sev-mawa-sabzi.jpg",
    },
    {
      name_en: "Bhindi Masala",
      name_hi: "भिंडी मसाला",
      price: 140,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/bhindi-masala-recipe.jpg",
    },
    {
      name_en: "Bhindi Fry",
      name_hi: "भिंडी फ्राय",
      price: 140,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/bhindi-fry-500x500.jpg",
    },
    {
      name_en: "Aloo Gobi",
      name_hi: "आलू गोभी",
      price: 140,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/aloo-gobi-500x500.jpg",
    },
    {
      name_en: "Aloo Palak",
      name_hi: "आलू पालक",
      price: 140,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/aloo-palak-500x500.jpg",
    },
    {
      name_en: "Aloo Methi",
      name_hi: "आलू मेथी",
      price: 150,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/aloo-methi-500x500.jpg",
    },
    {
      name_en: "Aloo Matar",
      name_hi: "आलू मटर",
      price: 140,
      image_url: "https://www.cookwithmanali.com/wp-content/uploads/2016/08/Easy-Aloo-Matar.jpg",
    },
    {
      name_en: "Dum Aloo",
      name_hi: "दम आलू",
      price: 140,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/dum-aloo-500x500.jpg",
    },
    {
      name_en: "Chana Masala",
      name_hi: "चना मसाला",
      price: 140,
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala.webp",
    },
    {
      name_en: "Mix Veg",
      name_hi: "मिक्स वेज",
      price: 150,
      image_url: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg",
    },
  ],
}

const categoryNames: { [key: string]: string } = {
  "salad-majedar": "Salads",
  "dal-ka-jayka": "Dal Specialties",
  "chawal-lajizav": "Rice Dishes",
  "paneer-rajasthani-special": "Paneer Specials",
  "sabji-ki-bahar": "Vegetable Dishes",
}

export default function Cuisine() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const displayItems = selectedCategory
    ? menuData[selectedCategory as keyof typeof menuData] || []
    : Object.values(menuData).flat()

  return (
    <section id="menu" className="py-24 bg-slate-900 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Complete Menu
          </h2>
          <p className="text-amber-200/70 text-lg">Authentic Rajasthani recipes, premium ingredients</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? "bg-amber-600 text-white"
                : "bg-slate-800 text-amber-400 border border-amber-600/30 hover:bg-slate-700"
            }`}
          >
            All Items
          </button>
          {Object.entries(categoryNames).map(([key, name]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? "bg-amber-600 text-white"
                  : "bg-slate-800 text-amber-400 border border-amber-600/30 hover:bg-slate-700"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((dish: any, i: number) => (
            <div
              key={i}
              className="group bg-slate-800/50 border border-amber-900/30 hover:border-amber-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/10 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${(i % 6) * 100}ms` }}
            >
              {dish.image_url && (
                <div className="h-40 overflow-hidden bg-slate-700">
                  <img
                    src={dish.image_url || "/placeholder.svg"}
                    alt={dish.name_en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-amber-400 text-sm font-semibold mb-1">{dish.name_hi}</p>
                <h3 className="text-lg font-bold text-white mb-2">{dish.name_en}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-400">₹{dish.price}</span>
                  <button
                    onClick={() => (window.location.href = "tel:9461783107")}
                    className="px-4 py-2 bg-amber-600/20 text-amber-400 border border-amber-600/30 rounded hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm font-semibold"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
