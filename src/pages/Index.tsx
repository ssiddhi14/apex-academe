import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, BookOpen, Star, ChevronRight, Clock, CheckCircle, ArrowRight, ArrowLeft, Phone, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const slides = [
  { src: slider1, alt: "Modern classrooms at Pinnacle CMA Academy", headline: "Best CMA Coaching Institute", sub: "Expert faculty, proven results, and personalized attention to crack CMA exams." },
  { src: slider2, alt: "Students celebrating CMA exam success", headline: "95% Success Rate", sub: "Join thousands of successful CMA professionals trained by Pinnacle Academy." },
  { src: slider3, alt: "Expert faculty teaching CMA courses", headline: "Learn from the Best", sub: "Industry-experienced CMA faculty with 14+ years of proven teaching excellence." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { icon: Users, value: "15,000+", label: "Students Trained" },
  { icon: Trophy, value: "95%", label: "Success Rate" },
  { icon: BookOpen, value: "14+", label: "Years Experience" },
  { icon: Star, value: "50+", label: "All India Rankers" },
];

const courses = [
  { title: "CMA Foundation", duration: "8 Months", desc: "Start your CMA journey with a strong foundation in management accounting fundamentals.", color: "bg-accent/10 text-accent", path: "/cma-foundation" },
  { title: "CMA Intermediate", duration: "12 Months", desc: "Deepen your expertise in cost management, financial analysis, and strategic planning.", color: "bg-secondary/20 text-secondary-foreground", path: "/cma-intermediate" },
  { title: "CMA Final", duration: "12 Months", desc: "Master advanced concepts and prepare for the ultimate CMA qualification.", color: "bg-primary/10 text-primary", path: "/cma-final" },
];

const testimonials = [
  { name: "Priya Sharma", rank: "AIR 3, CMA Final", text: "Pinnacle Academy transformed my preparation. The faculty's dedication and structured approach helped me secure All India Rank 3.", avatar: "PS" },
  { name: "Anita Desai", rank: "AIR 1, CMA Inter", text: "I owe my success to Pinnacle Academy. The personalized attention and rigorous practice tests made all the difference.", avatar: "AD" },
  { name: "Arjun Nair", rank: "AIR 10, CMA Foundation", text: "The comprehensive study material and regular tests kept me on track throughout my preparation.", avatar: "AN" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
      ))}

      <div className="relative container-main px-4 py-20 md:py-32">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-secondary/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-foreground/90 mb-6 border border-secondary/30">
            <Star className="h-4 w-4 text-secondary" />
            Rated #1 CMA Coaching Institute
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
            {slides[current].headline}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
            {slides[current].sub}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-base px-8" asChild>
              <Link to="/contact">Enroll Now <ArrowRight className="h-5 w-5 ml-1" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8" asChild>
              <Link to="/contact">Book Free Demo</Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-secondary" /> Free Counselling</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-secondary" /> Flexible Batches</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-secondary" /> Online + Offline</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/60 transition-colors z-10" aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5 text-primary-foreground" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/60 transition-colors z-10" aria-label="Next slide">
        <ChevronRight className="h-5 w-5 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-secondary" : "w-2.5 bg-primary-foreground/40"}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />

      {/* Stats */}
      <section className="relative -mt-16 z-10 px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="container-main grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl p-6 shadow-lg text-center card-hover border border-border">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-heading font-extrabold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Courses */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              <BookOpen className="h-4 w-4" /> Our Courses
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              CMA Coaching Programs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive CMA courses designed by industry experts to maximize your exam success with structured learning, practice tests, and personal mentorship.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl border border-border p-6 card-hover group">
                <div className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold mb-4 ${course.color}`}>
                  <GraduationCap className="h-3.5 w-3.5 mr-1.5" />
                  {course.title}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                  <Link to={course.path} className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/courses">View All Courses <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Pinnacle Academy?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Discover what makes us the preferred choice for CMA aspirants across India.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Expert Faculty", desc: "Learn from CMA qualified professionals with 15+ years of teaching experience." },
                { title: "Proven Track Record", desc: "95% success rate with 50+ All India Rankers in the last 5 years." },
                { title: "Comprehensive Material", desc: "Well-structured study notes, practice papers, and mock tests aligned with exam patterns." },
                { title: "Flexible Learning", desc: "Choose from offline, online live, or recorded classes to suit your schedule." },
                { title: "Personal Mentorship", desc: "Dedicated mentors for doubt solving, strategy planning, and motivation." },
                { title: "Affordable Fees", desc: "Quality education at competitive fees with EMI options and scholarships." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Student Success Stories</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">Hear from our achievers who cracked CMA exams with top ranks.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">{t.avatar}</div>
                    <div>
                      <div className="font-semibold text-primary-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-secondary">{t.rank}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Ready to Start Your CMA Journey?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Join thousands of successful students. Get free counselling and book your demo class today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="text-base px-8" asChild>
                <Link to="/contact">Enroll Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8" asChild>
                <a href="tel:+919876543210"><Phone className="h-4 w-4 mr-2" /> Call Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
