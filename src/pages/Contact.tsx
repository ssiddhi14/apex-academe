import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Submitted!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions about our CMA courses? Get in touch and we'll help you find the right path.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
              {[
                { icon: Phone, title: "Phone", info: "+91 98765 43210", sub: "+91 98765 43211", href: "tel:+919876543210" },
                { icon: Mail, title: "Email", info: "info@cmacacoaching.com", sub: "admissions@cmacacoaching.com", href: "mailto:info@cmacacoaching.com" },
                { icon: MapPin, title: "Address", info: "123 Education Lane", sub: "Knowledge Park, New Delhi - 110001" },
                { icon: Clock, title: "Office Hours", info: "Mon-Sat: 8 AM - 8 PM", sub: "Sunday: 9 AM - 2 PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-card rounded-xl border border-border p-5 card-hover">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{item.info}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.info}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <Input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-muted-foreground"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    >
                      <option value="">Select Course</option>
                      <option>CMA Foundation</option>
                      <option>CMA Intermediate</option>
                      <option>CMA Final</option>
                    </select>
                  </div>
                  <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  <Button variant="gold" size="lg" type="submit" className="w-full sm:w-auto">
                    <Send className="h-4 w-4 mr-2" /> Submit Inquiry
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pinnacle Academy Location"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
