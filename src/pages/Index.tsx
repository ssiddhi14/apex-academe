import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star, ChevronRight, Clock, CheckCircle, ArrowRight, ChevronLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { slides } from "@/data/sliderData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const courses = [
  { title: "CMA Foundation", desc: "Start your CMA journey with a strong foundation in management accounting fundamentals.", color: "bg-accent/10 text-accent", path: "/cma-foundation" },
  { title: "CMA Intermediate", desc: "Deepen your expertise in cost management, financial analysis, and strategic planning.", color: "bg-secondary/20 text-secondary-foreground", path: "/cma-intermediate" },
  { title: "CMA Final", desc: "Master advanced concepts and prepare for the ultimate CMA qualification.", color: "bg-primary/10 text-primary", path: "/cma-final" },
];

const aboutFeatures = [
  { title: "100% Recorded Lectures", desc: "Learn anytime, anywhere" },
  { title: "Unlimited Revision", desc: "Watch lectures multiple times" },
  { title: "Concept Clarity Focus", desc: "No rote learning, only understanding" },
  { title: "Exam-Oriented Preparation", desc: "Targeted for scoring marks" },
  {
    title: "Expert Faculty Guidance",
    faculty: ["CA Akhilesh Maheshwari", "CS Disha Lohana"],
  },
  { title: "Practice Questions & Notes", desc: "Structured study material" },
  { title: "Doubt Support", desc: "Quick resolution via WhatsApp/Telegram" },
  { title: "Flexible Learning", desc: "Perfect for self-paced study" },
];

const testimonials = [
  { name: "Kunal Chamoli",    rank: "AIR 26",        avatar: "KC", text: "Commerce Educators is one of the best platforms for CMA Intermediate and CMA Final preparation. The faculty focuses on conceptual clarity, exam-oriented teaching, and practical understanding of subjects. The study material, regular guidance, and doubt-solving support make the learning process smooth and effective. I highly recommend Commerce Educators to CMA students looking for quality professional coaching." },
  { name: "Kanika Dangayech",     rank: "AIR 3", avatar: "KD", text: "CA Akhilesh Maheshwari Sir is an exceptional faculty for Financial Management, Accounts, CFR, and SFM. His teaching style makes complex concepts easy to understand through practical examples and exam-focused discussions. The way he explains numerical problems has significantly improved my confidence in CMA examinations." },
  { name: "Deshna Jain",      rank: "AIR 5",  avatar: "DJ", text: "CS Disha Lohana Ma'am is an excellent teacher for Law and Audit. She simplifies difficult theoretical concepts and helps students understand provisions in a practical and memorable manner. Her teaching approach, revision guidance, and exam-writing strategies make theory subjects much easier to score in." },
  { name: "Madhav Sarda",     rank: "",        avatar: "MS", text: "I am currently preparing for CMA Intermediate with Commerce Educators, and my experience has been outstanding. The classes are highly interactive, concept-driven, and focused on examination requirements. The faculty ensures that every student understands the fundamentals before moving to advanced topics. I strongly recommend Commerce Educators for CMA Inter preparation." },
  { name: "Kajal Agarwal",     rank: "",   avatar: "KA", text: "Commerce Educators provides excellent coaching for CMA Final students. The classes are well-structured, and the faculty covers every topic in detail with a strong focus on conceptual understanding and exam preparation. The guidance provided for subjects like SFM, CFR, Audit, and Law has been extremely valuable for my studies." },
  { name: "shiv Tailor",  rank: "",       avatar: "ST", text: "The online learning experience at Commerce Educators is excellent. The recorded lectures, regular revisions, and doubt-solving support help students learn at their own pace. Even complex CMA subjects become manageable because of the faculty's clear explanations and practical teaching methods." },
  { name: "Shavika Mangal",      rank: "",       avatar: "SM", text: "What makes Commerce Educators stand out is its exam-oriented teaching approach. The faculty not only teaches concepts but also guides students on presentation techniques, revision strategies, and question-solving methods. This has helped me prepare more effectively for CMA Intermediate and CMA Final examinations." },
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
    <section className="relative h-[420px] md:h-[560px] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover object-center" width={1920} height={380} />
        </div>
      ))}

     

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

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Show 3 cards at a time on desktop, 1 on mobile
  const getVisible = () => {
    return [0, 1, 2].map((offset) => testimonials[(current + offset) % total]);
  };

  return (
    <div className="relative">
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 overflow-hidden">
        {getVisible().map((t, i) => (
          <motion.div
            key={`${current}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground shrink-0">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-primary-foreground text-sm">{t.name}</div>
                <div className="text-xs text-secondary">{t.rank}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-secondary/80 flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-primary-foreground" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-secondary" : "w-2 bg-primary-foreground/30"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-secondary/80 flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />

      {/* About */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                <Info className="h-4 w-4" /> About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
                Best Online CMA Coaching in India – Commerce Educators
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Commerce Educators, we provide high-quality online recorded CMA classes designed for students who want flexibility, conceptual clarity, and exam-focused preparation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you are preparing for CMA Intermediate or CMA Final, our courses help you study smarter, revise better, and perform confidently in exams.
              </p>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Key Features of Commerce Educators</h3>
              <ul className="space-y-3">
                {aboutFeatures.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">{feature.title}</span>
                      {feature.desc && (
                        <span className="text-muted-foreground"> – {feature.desc}</span>
                      )}
                      {feature.faculty && (
                        <ul className="mt-1.5 space-y-1 text-muted-foreground">
                          {feature.faculty.map((name) => (
                            <li key={name} className="pl-1">• {name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
                <iframe
                  src="https://www.youtube.com/embed/QLU6j_he-pQ"
                  title="Commerce Educators - Online CMA Coaching"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
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
                  {/* <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span> */}
                  <Link to={course.path} className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="https://www.commerceeducators.com/courses">Explore Now <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Commerce Educators?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Discover what makes us the preferred choice for CMA aspirants across India.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Premium Study Resources", desc: "High Quality Content, Comprehensive Notes and Study Materials." },
                { title: "Expert Faculty Guidance", desc: "Expert Guidance from experienced Educators." },
                { title: "Result-Focused Learning", desc: "Result-Oriented Approach." },
                { title: "Flexible Learning", desc: "Watch anytime , anywhere." },
                { title: "Personal Mentorship", desc: "Dedicated mentors for doubt solving, strategy planning, and motivation." },
                { title: "24/7 Student Support", desc: "Personalized Guidance and 24/7 Support." },
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

      {/* Testimonials — auto-scroll carousel */}
      <section className="section-padding bg-primary overflow-hidden">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Student Success Stories</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">Hear from our achievers who cracked CMA exams with top ranks.</p>
            </motion.div>
          </motion.div>

          <TestimonialCarousel />
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
                <a href="https://www.commerceeducators.com/courses" target="_blank" rel="noopener noreferrer">Enroll Now</a>
              </Button>
              {/* <Button variant="outline" size="lg" className="text-base px-8" asChild>
                <a href="tel:+919876543210"><Phone className="h-4 w-4 mr-2" /> Call Us</a>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
