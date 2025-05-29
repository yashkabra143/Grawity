import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Play, Star, Quote } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const customerReviews = [
    {
      name: "Priya Sharma",
      location: "Indore",
      review: "The best momos in the city! Authentic taste that reminds me of my childhood in Indore.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b06c?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Rajesh Patel",
      location: "Mumbai",
      review: "Amazing flavors and fresh ingredients. The spice blend is perfect!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Anita Singh",
      location: "Delhi",
      review: "Grawity brings the true taste of Indore to your plate. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <>
      {/* Hero Section */}
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
              <span className="text-white text-shadow-lg drop-shadow-2xl">
                Grawity
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-orange-300 drop-shadow-lg">
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

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-charcoal">What Our Customers Say</h2>
            <div className="w-24 h-1 gradient-saffron-turmeric mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers who love the authentic taste of Grawity momos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover-lift bg-white">
                  <CardContent className="p-8 text-center">
                    <Quote className="text-saffron mx-auto mb-4" size={32} />
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{review.review}"
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-charcoal">{review.name}</h4>
                        <p className="text-gray-500 text-sm">{review.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
