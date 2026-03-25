import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Target, Heart, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const milestones = [
  { year: "2010", event: "Founded with a vision to democratize CMA education" },
  { year: "2013", event: "First batch of students achieved 100% pass rate" },
  { year: "2016", event: "Expanded to online classes reaching students pan-India" },
  { year: "2019", event: "Produced first All India Rank 1 in CMA examinations" },
  { year: "2022", event: "15,000+ students trained milestone achieved" },
  { year: "2025", event: "Launched advanced AI-powered learning platform" },
];

const founders = [
  {
    initials: "RK",
    name: "Dr. Rajesh Kumar",
    designation: "Founder & Director",
    message:
      "When I founded Commerce Educators in 2010, I had one goal — to make quality CMA education accessible to every aspiring student. Over the years, we've grown from a single classroom to a premier institute, but our core philosophy remains the same: every student deserves personalized attention, world-class faculty, and a clear path to success. We don't just teach — we mentor, guide, and build the confidence that turns aspirants into achievers.",
  },
  {
    initials: "PS",
    name: "Prof. Priya Sharma",
    designation: "Co-Founder & Academic Head",
    message:
      "Education is not just about passing exams — it's about building a mindset that drives lifelong success. At Commerce Educators, we focus on conceptual clarity, practical application, and continuous mentorship. Every student who walks through our doors becomes part of a family that celebrates their growth. Our innovative teaching methods and dedicated faculty ensure that each aspirant is fully prepared — not just for the CMA exam, but for a thriving career in management accounting.",
  },
];

const AboutPage = () => {
  const [founderIndex, setFounderIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (dir: number) => {
    setDirection(dir);
    setFounderIndex((prev) => (prev + dir + founders.length) % founders.length);
  };

  const founder = founders[founderIndex];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            About Commerce Educators
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Empowering CMA aspirants since 2010 with world-class coaching and mentorship.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide accessible, high-quality CMA coaching that transforms careers and builds future finance leaders." },
              { icon: Heart, title: "Our Vision", desc: "To be India's most trusted and results-driven coaching institute for management accounting education." },
              { icon: Award, title: "Our Values", desc: "Excellence, integrity, student-first approach, innovation in education, and a commitment to every student's success." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl border border-border p-8 text-center card-hover">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Slider */}
      <section className="section-padding bg-muted">
        <div className="container-main max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground text-center mb-10">
            Founder's Message
          </motion.h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={founderIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-primary/10 flex items-center justify-center text-3xl md:text-4xl font-bold text-primary shrink-0">
                      {founder.initials}
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-lg font-heading font-bold text-foreground">{founder.name}</p>
                      <p className="text-sm font-medium text-accent mb-4">{founder.designation}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">"{founder.message}"</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              onClick={() => goTo(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              aria-label="Previous founder"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              aria-label="Next founder"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {founders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > founderIndex ? 1 : -1); setFounderIndex(i); }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === founderIndex ? "bg-accent w-6" : "bg-border"}`}
                  aria-label={`Go to founder ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground text-center mb-14">
            Our Journey
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Spacer for alternating side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-accent flex items-center justify-center z-10 shadow-md">
                  <GraduationCap className="h-4 w-4 text-accent-foreground" />
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="bg-card rounded-xl border border-border p-5 card-hover">
                    <span className="text-xs font-bold text-accent">{m.year}</span>
                    <p className="text-sm text-foreground mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary">
        <div className="container-main">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground text-center mb-10">Achievements</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "15,000+", label: "Students Trained" },
              { val: "50+", label: "All India Rankers" },
              { val: "95%", label: "Success Rate" },
              { val: "14+", label: "Years of Excellence" },
            ].map((a, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <div className="text-3xl font-heading font-extrabold text-secondary">{a.val}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
