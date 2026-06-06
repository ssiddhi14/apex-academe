import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Target, Heart, GraduationCap, ChevronLeft, ChevronRight, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { founders } from "@/data/foundersData";

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

const cmaIntermediateFeatures = [
  "High-Quality Recorded Lectures",
  "Comprehensive Study Material",
  "Topic-Wise Practice Questions",
  "Regular Mock Tests & Assessments",
  "Exam-Oriented Question Discussions",
  "Personal Mentorship & Guidance",
  "Dedicated Doubt-Solving Sessions",
  "Flexible Learning Schedule",
  "Performance Tracking & Progress Analysis",
];

const cmaIntermediateSubjects = [
  {
    group: "Group I",
    papers: [
      {
        code: "Paper 5",
        title: "Laws and Ethics",
        description:
          "Understand business laws, corporate regulations, governance principles, and ethical practices relevant to professional accountants.",
      },
      {
        code: "Paper 6",
        title: "Financial Accounting",
        description:
          "Develop expertise in accounting standards, preparation of financial statements, branch accounting, and corporate accounting concepts.",
      },
    ],
  },
  {
    group: "Group II",
    papers: [
      {
        code: "Paper 10",
        title: "Corporate Accounting and Auditing",
        description:
          "Gain knowledge of advanced accounting topics, corporate financial reporting, and auditing procedures.",
      },
      {
        code: "Paper 11",
        title: "Financial Management and Business Data Analytics",
        description:
          "Understand capital budgeting, working capital management, investment decisions, risk analysis, and business analytics techniques.",
      },
    ],
  },
];

const cmaFinalSubjects = [
  {
    group: "Group III",
    papers: [
      {
        code: "Paper 13",
        title: "Corporate and Economic Laws",
        description:
          "Understand advanced corporate laws, economic regulations, governance frameworks, and legal compliance requirements applicable in modern businesses.",
      },
      {
        code: "Paper 14",
        title: "Strategic Financial Management (SFM)",
        description:
          "Develop expertise in investment decisions, portfolio management, derivatives, risk management, international finance, mergers and acquisitions, and corporate restructuring.",
      },
    ],
  },
  {
    group: "Group IV",
    papers: [
      {
        code: "Paper 17",
        title: "Cost and Management Audit (CMAD)",
        description:
          "Understand audit procedures, internal controls, compliance auditing, management auditing, and professional reporting standards.",
      },
      {
        code: "Paper 18",
        title: "Corporate Financial Reporting (CFR)",
        description:
          "Gain in-depth knowledge of financial reporting standards, Ind AS, consolidated financial statements, and corporate disclosure requirements.",
      },
      {
        code: "Paper 20A",
        title: "Strategic Performance Management and Business Valuation",
        description:
          "Develop skills in business performance evaluation, value creation, business valuation models, and strategic decision-making frameworks.",
      },
    ],
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

      {/* Timeline */}
      {/* <section className="section-padding">
        <div className="container-main max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground text-center mb-14">
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-accent flex items-center justify-center z-10 shadow-md">
                  <GraduationCap className="h-4 w-4 text-accent-foreground" />
                </div>

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
      </section> */}

      {/* Achievements */}
      {/* <section className="section-padding bg-primary">
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
      </section> */}

      {/* ── CMA Intermediate Coaching ── */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">
          {/* Rich intro — two column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="rounded-2xl overflow-hidden mb-16 border border-border shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              {/* Left — gradient panel */}
              <div className="gradient-hero p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                {/* decorative circles */}
                <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/5" />
                <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                  Online Coaching
                </motion.span>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground leading-tight mb-5">
                  CMA Intermediate<br />
                  <span className="text-secondary">Online Coaching</span><br />
                  <span className="text-primary-foreground/80 text-2xl font-semibold">by Commerce Educators</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-primary-foreground/75 text-sm leading-relaxed mb-6">
                  CMA Intermediate is a crucial stage in the Cost and Management Accountant journey, where students develop advanced knowledge in accounting, taxation, financial management, cost management, auditing, and business laws.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-primary-foreground/75 text-sm leading-relaxed">
                  Our experienced faculty members combine practical industry insights with exam-oriented teaching methodologies to ensure students are fully prepared for the CMA Intermediate examination conducted by the Institute of Cost Accountants of India.
                </motion.p>
              </div>

              {/* Right — features checklist */}
              <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
                <motion.h3 variants={fadeInUp} className="text-xl font-heading font-bold text-foreground mb-2">
                  Why Choose Commerce Educators?
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-7 leading-relaxed">
                  Success in CMA Intermediate requires more than just completing the syllabus. Our coaching focuses on concept clarity, practical application, and continuous improvement.
                </motion.p>
                <motion.ul variants={stagger} className="space-y-3">
                  {cmaIntermediateFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                      </span>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Subjects */}
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-heading font-bold text-foreground text-center mb-10">
            Subjects Covered in CMA Intermediate
          </motion.h3>
          {cmaIntermediateSubjects.map((group, gi) => (
            <motion.div key={gi} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-10">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
                  {group.group}
                </span>
                <div className="h-px flex-1 bg-border" />
              </motion.div>
              <div className="grid md:grid-cols-2 gap-5">
                {group.papers.map((paper, pi) => (
                  <motion.div key={pi} variants={fadeInUp} className="bg-card rounded-xl border border-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                        <BookOpen className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{paper.code}</span>
                        <h4 className="text-base font-heading font-bold text-foreground mt-0.5 mb-2">{paper.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{paper.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/cma-intermediate">
                Explore CMA Intermediate <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CMA Final Coaching ── */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          {/* Intro */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center mb-12">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Online Coaching
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              CMA Final Online Coaching
              <span className="block text-accent mt-1">by Commerce Educators</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed">
              Our CMA Final coaching program comprehensively covers all major subjects prescribed under the latest ICMAI syllabus, preparing students for the pinnacle of the Cost and Management Accountant qualification.
            </motion.p>
          </motion.div>

          {/* Subjects */}
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-heading font-bold text-foreground text-center mb-10">
            Subjects Covered in CMA Final
          </motion.h3>
          {cmaFinalSubjects.map((group, gi) => (
            <motion.div key={gi} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-10">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
                  {group.group}
                </span>
                <div className="h-px flex-1 bg-border" />
              </motion.div>
              <div className="grid md:grid-cols-2 gap-5">
                {group.papers.map((paper, pi) => (
                  <motion.div key={pi} variants={fadeInUp} className="bg-card rounded-xl border border-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{paper.code}</span>
                        <h4 className="text-base font-heading font-bold text-foreground mt-0.5 mb-2">{paper.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{paper.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/cma-final">
                Explore CMA Final <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Founder's Message ── (bottom, before footer) */}
      <section className="section-padding relative overflow-hidden">
        {/* decorative background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-main max-w-5xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-3">
              From Our Leaders
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
              Founder's Message
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={founderIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="grid md:grid-cols-[280px_1fr]">
                    {/* Photo panel */}
                    <div className="gradient-hero flex flex-col items-center justify-center p-10 gap-4 relative overflow-hidden">
                      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/5" />
                      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />
                      <div className="h-36 w-36 rounded-full border-4 border-secondary/60 shadow-xl overflow-hidden bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary-foreground relative z-10">
                        {founder.image ? (
                          <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />
                        ) : (
                          <span>{founder.initials}</span>
                        )}
                      </div>
                      <div className="text-center relative z-10">
                        <p className="text-base font-heading font-bold text-primary-foreground">{founder.name}</p>
                        <p className="text-xs font-semibold text-secondary mt-1">{founder.designation}</p>
                      </div>
                    </div>

                    {/* Message panel */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                      {/* large decorative quote mark */}
                      <span className="text-7xl font-serif leading-none text-accent/15 select-none mb-2">"</span>
                      <p className="text-foreground leading-relaxed text-base md:text-lg italic -mt-6">
                        {founder.message}
                      </p>
                      <span className="text-7xl font-serif leading-none text-accent/15 select-none self-end mt-2">"</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={() => goTo(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 h-10 w-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors z-20"
              aria-label="Previous founder"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 h-10 w-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors z-20"
              aria-label="Next founder"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {founders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > founderIndex ? 1 : -1); setFounderIndex(i); }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === founderIndex ? "bg-accent w-7" : "bg-border w-2.5"}`}
                  aria-label={`Go to founder ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
