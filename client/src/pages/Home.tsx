import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Utensils, Play } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-bold text-5xl md:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text gradient-saffron-turmeric bg-gradient-to-r from-orange-500 to-yellow-500">
              Grawity
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-medium">
              The Taste of Indore
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Experience the authentic flavors of Indore with our handcrafted vegetable momos, 
            made with love and the finest local ingredients.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/menu">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gradient-saffron-turmeric text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 animate-bounce-subtle">
                  <Utensils className="mr-2" size={20} />
                  Explore Menu
                </Button>
              </motion.div>
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-charcoal transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2" size={20} />
                Watch Story
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 gradient-cilantro-cardamom rounded-full opacity-20 hidden lg:block"
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 gradient-paprika-garam-masala rounded-full opacity-20 hidden lg:block"
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2
        }}
      />
    </section>
  );
}
