import { motion } from "framer-motion";
import { Leaf, Heart, Award, Users, Sprout } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Sprout,
      title: "Fresh Ingredients",
      description: "We use only the freshest vegetables sourced daily from local farmers to ensure every bite is packed with authentic flavors.",
      gradient: "gradient-cilantro-cardamom"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local farmers and serving our community with the same warmth and hospitality that Indore is famous for.",
      gradient: "gradient-saffron-turmeric"
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "Every momo is handcrafted with traditional techniques and modern hygiene standards to deliver consistent quality.",
      gradient: "gradient-paprika-garam-masala"
    }
  ];

  return (
    <section className="pt-24 py-20 bg-gradient-to-b from-warm-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-charcoal">Our Story</h2>
          <div className="w-24 h-1 gradient-saffron-turmeric mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born in the heart of Indore, Grawity brings you the authentic taste of traditional vegetable momos 
            with a modern twist that celebrates our rich culinary heritage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-3xl text-charcoal mb-4">
              From Indore Streets to Your Plate
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              What started as a small street food stall in the bustling markets of Indore has grown into 
              a beloved brand that represents the authentic taste of our city. Each momo is crafted with 
              the same passion and traditional recipes that have been passed down through generations.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We source our vegetables from local farmers and use only the finest spices to create 
              the perfect blend of flavors that define the taste of Indore.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Leaf className="text-cilantro text-2xl mr-2" />
                <span className="font-medium">100% Vegetarian</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="text-paprika text-2xl mr-2" />
                <span className="font-medium">Made with Love</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Traditional kitchen preparing momos" 
              className="rounded-2xl shadow-2xl hover-lift w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-saffron-turmeric rounded-2xl opacity-20"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className={`w-20 h-20 ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="text-white text-2xl" />
              </motion.div>
              <h4 className="font-semibold text-xl mb-4 text-charcoal">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
