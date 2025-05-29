import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, Twitter, Send } from "lucide-react";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Sarafa Bazaar, Near Rajwada Palace\nIndore, Madhya Pradesh 452001",
      gradient: "gradient-saffron-turmeric"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210\n+91 87654 32109",
      gradient: "gradient-cilantro-cardamom"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@grawity.com\norders@grawity.com",
      gradient: "gradient-paprika-garam-masala"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Sun: 10:00 AM - 10:00 PM\nPublic Holidays: 12:00 PM - 8:00 PM",
      gradient: "gradient-saffron-turmeric"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", gradient: "gradient-saffron-turmeric" },
    { icon: Instagram, href: "#", gradient: "gradient-paprika-garam-masala" },
    { icon: MessageCircle, href: "#", gradient: "gradient-cilantro-cardamom" },
    { icon: Twitter, href: "#", gradient: "gradient-saffron-turmeric" }
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
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-charcoal">Get In Touch</h2>
          <div className="w-24 h-1 gradient-saffron-turmeric mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our momos? Want to place a bulk order? We'd love to hear from you! 
            Reach out to experience the authentic taste of Indore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold text-2xl text-charcoal mb-6">Visit Our Store</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`w-12 h-12 ${info.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="text-white" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg text-charcoal mb-1">{info.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-xl text-charcoal mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 ${social.gradient} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <h3 className="font-semibold text-2xl text-charcoal mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-charcoal font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Your first name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-charcoal font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Your last name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-charcoal font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-charcoal font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-charcoal font-medium">
                      Subject *
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-orange-500">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="order">Bulk Order</SelectItem>
                        <SelectItem value="catering">Catering Services</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className="transition-all duration-300 focus:ring-2 focus:ring-orange-500 resize-none"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full gradient-saffron-turmeric text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Send className="mr-2" size={20} />
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
