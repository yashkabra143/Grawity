import { Link } from "wouter";
import { Utensils, Facebook, Instagram, Twitter, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/menu", label: "Our Menu" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 gradient-saffron-turmeric rounded-full flex items-center justify-center">
                <Utensils className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-2xl">Grawity</h3>
                <p className="text-sm text-gray-400 font-medium">
                  The Taste of Indore
                </p>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience the authentic flavors of Indore with our handcrafted
              vegetable momos. Made with love, served with pride, bringing the
              taste of our heritage to your plate.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-saffron hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.a
                      className="text-gray-300 hover:text-saffron transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-saffron transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Order Online
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-saffron transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Catering
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="text-saffron mt-1" size={16} />
                <p className="text-sm">
                  123 Sarafa Bazaar
                  <br />
                  Indore, MP 452001
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-saffron" size={16} />
                <p className="text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-saffron" size={16} />
                <p className="text-sm">hello@grawity.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-saffron" size={16} />
                <p className="text-sm">10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Grawity. All rights reserved. Made with ❤️ in Indore.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-saffron transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-saffron transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-saffron transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
