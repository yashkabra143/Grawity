import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Leaf, Pizza, Sprout, Flame, Coffee, Droplets, Eye, X, Package, Zap } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "all" | "momos" | "appetizers" | "beverages";
  tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  calories: number;
  packaging: string;
  ingredients: string[];
  nutritionFacts: {
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<"all" | "momos" | "appetizers" | "beverages">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Signature Vegetable Momos",
      price: 120,
      description: "Our classic steamed momos filled with fresh cabbage, carrots, onions, and aromatic Indore spices.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&h=400",
      category: "momos",
      tags: ["Vegan", "Spicy"],
      icon: Leaf,
      calories: 180,
      packaging: "Eco-friendly bamboo steamer box (8 pieces)",
      ingredients: ["Fresh cabbage", "Carrots", "Onions", "Ginger-garlic paste", "Green chilies", "Indore special masala", "Wheat flour"],
      nutritionFacts: {
        protein: "6g",
        carbs: "32g",
        fat: "4g",
        fiber: "3g"
      }
    },
    {
      id: "2",
      name: "Paneer Momos",
      price: 150,
      description: "Delicious momos stuffed with fresh paneer, herbs, and traditional spices for a rich flavor.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&h=400",
      category: "momos",
      tags: ["Vegetarian", "Medium"],
      icon: Pizza,
      calories: 220,
      packaging: "Insulated food-grade container (8 pieces)",
      ingredients: ["Fresh paneer", "Mixed herbs", "Bell peppers", "Onions", "Traditional spices", "Whole wheat flour"],
      nutritionFacts: {
        protein: "12g",
        carbs: "28g",
        fat: "8g",
        fiber: "2g"
      }
    },
    {
      id: "3",
      name: "Corn & Mushroom Momos",
      price: 140,
      description: "A delightful combination of sweet corn and fresh mushrooms with exotic Indian spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d071?auto=format&fit=crop&w=800&h=400",
      category: "momos",
      tags: ["Vegan", "Mild"],
      icon: Sprout,
      calories: 190,
      packaging: "Biodegradable paper box (8 pieces)",
      ingredients: ["Sweet corn kernels", "Button mushrooms", "Shiitake mushrooms", "Spring onions", "Mild spices", "Organic flour"],
      nutritionFacts: {
        protein: "7g",
        carbs: "35g",
        fat: "3g",
        fiber: "4g"
      }
    },
    {
      id: "4",
      name: "Indore Special Chutney",
      price: 30,
      description: "Our signature spicy chutney made with tomatoes, garlic, and secret Indore spices.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&h=400",
      category: "appetizers",
      tags: ["Very Spicy", "Sauce"],
      icon: Flame,
      calories: 45,
      packaging: "Glass jar with secure lid (100ml)",
      ingredients: ["Fresh tomatoes", "Garlic", "Red chilies", "Cumin seeds", "Coriander seeds", "Secret Indore masala"],
      nutritionFacts: {
        protein: "2g",
        carbs: "8g",
        fat: "1g",
        fiber: "2g"
      }
    },
    {
      id: "5",
      name: "Indore Masala Chai",
      price: 25,
      description: "Authentic Indore-style masala chai brewed with cardamom, ginger, and special spices.",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&h=400",
      category: "beverages",
      tags: ["Hot", "Traditional"],
      icon: Coffee,
      calories: 80,
      packaging: "Thermal paper cup with lid (250ml)",
      ingredients: ["Assam tea leaves", "Fresh milk", "Cardamom", "Ginger", "Cinnamon", "Cloves", "Jaggery"],
      nutritionFacts: {
        protein: "3g",
        carbs: "12g",
        fat: "3g",
        fiber: "0g"
      }
    },
    {
      id: "6",
      name: "Fresh Lime Water",
      price: 35,
      description: "Refreshing lime water with fresh mint, perfect complement to our spicy momos.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&h=400",
      category: "beverages",
      tags: ["Refreshing", "Cold"],
      icon: Droplets,
      calories: 25,
      packaging: "Recyclable plastic bottle with straw (300ml)",
      ingredients: ["Fresh lime juice", "Mint leaves", "Rock salt", "Black salt", "Chilled water", "Natural sweetener"],
      nutritionFacts: {
        protein: "0g",
        carbs: "6g",
        fat: "0g",
        fiber: "0g"
      }
    }
  ];

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const categories = [
    { id: "all", label: "All Items" },
    { id: "momos", label: "Momos" },
    { id: "appetizers", label: "Appetizers" },
    { id: "beverages", label: "Beverages" }
  ] as const;

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="pt-24 py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-5xl mb-6">Our Menu</h2>
          <div className="w-24 h-1 gradient-saffron-turmeric mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our signature vegetable momos and other delicious offerings, 
            each prepared with authentic Indore spices and fresh ingredients.
          </p>
        </motion.div>

        {/* Menu Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "gradient-saffron-turmeric text-white"
                  : "bg-transparent border-2 border-gray-500 text-gray-300 hover:border-orange-500 hover:text-orange-500"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div className="overflow-hidden">
                  <motion.img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-xl text-white">{item.name}</h4>
                    <span className="text-orange-500 font-bold text-lg">₹{item.price}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <item.icon className="text-orange-500" size={16} />
                      <div className="flex gap-1">
                        {item.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs bg-gray-700 text-gray-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={() => openModal(item)}
                        className="gradient-saffron-turmeric text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg"
                      >
                        <Eye size={16} className="mr-1" />
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Product Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-charcoal mb-4">
                    {selectedItem.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="space-y-4">
                    <motion.img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Price and Tags */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-saffron">₹{selectedItem.price}</span>
                      <div className="flex gap-2">
                        {selectedItem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal mb-2">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center space-x-2">
                      <Zap className="text-orange-500" size={20} />
                      <span className="font-medium text-charcoal">Calories: </span>
                      <span className="text-orange-600 font-semibold">{selectedItem.calories} kcal</span>
                    </div>

                    {/* Packaging */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="text-cilantro" size={20} />
                        <h3 className="font-semibold text-lg text-charcoal">Packaging</h3>
                      </div>
                      <p className="text-gray-600">{selectedItem.packaging}</p>
                    </div>

                    {/* Ingredients */}
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal mb-3">Ingredients</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.ingredients.map((ingredient, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Nutrition Facts */}
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal mb-3">Nutrition Facts</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span className="text-gray-600">Protein</span>
                          <span className="font-semibold text-charcoal">{selectedItem.nutritionFacts.protein}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-gray-600">Carbs</span>
                          <span className="font-semibold text-charcoal">{selectedItem.nutritionFacts.carbs}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-gray-600">Fat</span>
                          <span className="font-semibold text-charcoal">{selectedItem.nutritionFacts.fat}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                          <span className="text-gray-600">Fiber</span>
                          <span className="font-semibold text-charcoal">{selectedItem.nutritionFacts.fiber}</span>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={closeModal}
                        className="w-full gradient-saffron-turmeric text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg"
                      >
                        <X className="mr-2" size={20} />
                        Close
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
