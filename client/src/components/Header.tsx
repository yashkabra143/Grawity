import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Utensils } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/10 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 gradient-saffron-turmeric rounded-full flex items-center justify-center">
                <Utensils className="text-white text-xl" />
              </div>
              <div>
                <h1 className="font-bold text-2xl text-charcoal">Grawity</h1>
                <p className="text-xs text-gray-600 font-medium">
                  The Taste of Indore
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.a
                  className={`font-medium transition-colors duration-300 ${
                    location === link.href
                      ? "text-saffron"
                      : "text-charcoal hover:text-saffron"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gradient-saffron-turmeric text-white px-6 py-2 rounded-full font-medium hover:shadow-lg">
                Order Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <motion.a
                      className={`font-medium transition-colors duration-300 block ${
                        location === link.href
                          ? "text-saffron"
                          : "text-charcoal hover:text-saffron"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                ))}
                <Button className="gradient-saffron-turmeric text-white px-6 py-2 rounded-full font-medium hover:shadow-lg w-full">
                  Order Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
