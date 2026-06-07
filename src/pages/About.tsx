import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Target, Heart, ChevronLeft, ChevronRight, BookOpen, CheckCircle2, ArrowRight, Briefcase, GraduationCap as GradCap, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { founders } from "@/data/foundersData";
import amPhoto from "@/assets/as.jpeg";
import dlPhoto from "@/assets/dl.jpeg";
import slider3 from "@/assets/slider-3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const faculty = [
  {
    name: "CA Akhilesh Maheshwari",
    title: "Chartered Accountant & Senior Faculty",
    photo: amPhoto,
    qualifications: ["Qualified CA (2014)", "NET Qualified", "Practicing Chartered Accountant"],
    experience: "12+ Years of Teaching Experience",
    bio: [
      "CA Akhilesh Maheshwari is a qualified Chartered Accountant who completed his CA qualification in 2014. He is also NET (National Eligibility Test) qualified, demonstrating his strong academic foundation and commitment to excellence in education.",
      "Since 2012, he has been actively involved in teaching students pursuing professional courses such as CA, CMA, and CS. His teaching journey began even before qualifying as a Chartered Accountant, reflecting his passion for mentoring aspiring professionals.",
      "Over the years, he has taught at various reputed institutes in Jaipur through both offline and online platforms, helping thousands of students build strong conceptual understanding and achieve academic success.",
    ],
    philosophy: "His teaching philosophy focuses on simplifying complex concepts, connecting theory with practical application, and preparing students not just for examinations but for their professional careers.",
    quote: "My objective is simple – to make learning easier, concepts stronger, and success achievable for every student.",
    subjects: [
      {
        level: "CA / CMA Final",
        list: ["Strategic Financial Management (SFM)", "Corporate Financial Reporting (CFR)", "Business Valuation (BV)"],
      },
      {
        level: "CA / CMA Intermediate",
        list: ["Financial Accounting", "Corporate Accounting", "Financial Management"],
      },
    ],
  },
  {
    name: "CS Disha Lohana",
    title: "Company Secretary, Educator & Founder",
    photo: dlPhoto,
    qualifications: [
      "Qualified Company Secretary",
      "AIR 14 — CS Foundation",
      "AIR 3 — CS Executive",
      "AIR 5 — CS Professional",
      "Founder, Commerce Educators",
    ],
    experience: "12+ Years of Teaching Experience",
    bio: [
      "CS Disha Lohana is a qualified Company Secretary, educator, mentor, and founder of Commerce Educators. Her journey is a true reflection of dedication, consistency, and academic excellence. She secured AIR 14 in CS Foundation, AIR 3 in CS Executive, and AIR 5 in CS Professional, establishing herself among the top-performing students at every stage of the CS course.",
      "Teaching has always been more than a profession for her — it is a passion. Even before founding Commerce Educators, she was actively involved in guiding and mentoring commerce students, helping them navigate the challenges of professional courses with confidence and clarity.",
      "Over the years, she has guided students pursuing CA, CS, and CMA courses through both online and offline platforms. Her ability to simplify complex legal and auditing concepts, combined with a practical and exam-oriented approach, has helped students build strong conceptual foundations and achieve outstanding results.",
      "Having experienced the journey of securing All India Ranks herself, she understands the mindset, discipline, and preparation required to excel in professional examinations — and strives to instill the same confidence in her students.",
    ],
    philosophy: "Her teaching methodology focuses on conceptual clarity, smart study techniques, structured revision, and continuous motivation. Her vision is to create a learning environment where students not only prepare for examinations but also develop a strong foundation for their professional careers.",
    quote: "Every student has the potential to succeed when provided with the right guidance, strategy, and support.",
    subjects: [
      {
        level: "CA / CMA Final",
        list: ["Corporate and Economic Laws", "Strategic Performance Management", "Cost and Management Audit (CMAD)"],
      },
      {
        level: "CA / CMA Intermediate",
        list: ["Laws and Ethics", "Corporate Accounting and Auditing", "Business Data Analytics"],
      },
    ],
  },
];

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
            Empowering CMA aspirants with world-class coaching and mentorship.
          </motion.p>
        </div>
      </section>

      {/* ── Faculty Section ── */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          {/* Section heading */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Meet Our Educators
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
              Faculty Members
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our faculty brings together decades of professional practice and teaching experience to deliver exam-focused, concept-driven education.
            </motion.p>
          </motion.div>

          {/* Faculty cards — photo always left, bio always right */}
          <div className="space-y-16">
            {faculty.map((f, fi) => (
              <motion.div
                key={fi}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid lg:grid-cols-[340px_1fr] gap-10 items-start"
              >
                {/* ── Photo + quick-info card ── */}
                <motion.div variants={fadeInUp}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img
                        src={f.photo}
                        alt={f.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card/90 to-transparent" />
                    </div>
                    <div className="p-6 -mt-2">
                      <h3 className="text-xl font-heading font-extrabold text-foreground">{f.name}</h3>
                      <p className="text-sm font-semibold text-accent mt-0.5 mb-4">{f.title}</p>
                      <ul className="space-y-2 mb-4">
                        {f.qualifications.map((q, qi) => (
                          <li key={qi} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GradCap className="h-3.5 w-3.5 text-accent shrink-0" />
                            {q}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                        <Briefcase className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm font-semibold text-accent">{f.experience}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ── Bio + subjects + quote ── */}
                <motion.div variants={fadeInUp}>
                  <div className="space-y-3 mb-6">
                    {f.bio.map((para, pi) => (
                      <p key={pi} className="text-muted-foreground leading-relaxed text-sm">{para}</p>
                    ))}
                    <p className="text-muted-foreground leading-relaxed text-sm">{f.philosophy}</p>
                  </div>

                  <h4 className="text-base font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    Subjects Taught
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {f.subjects.map((group, gi) => (
                      <div key={gi} className="bg-card border border-border rounded-xl p-4">
                        <span className={`inline-block text-xs font-bold uppercase tracking-wider rounded-full px-2.5 py-1 mb-3 ${gi === 0 ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                          {group.level}
                        </span>
                        <ul className="space-y-1.5">
                          {group.list.map((subj, si) => (
                            <li key={si} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                              {subj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="relative bg-primary/5 border-l-4 border-accent rounded-r-xl px-5 py-4">
                    <Quote className="h-6 w-6 text-accent/30 absolute top-3 right-4" />
                    <p className="text-sm italic text-foreground font-medium leading-relaxed pr-8">
                      "{f.quote}"
                    </p>
                    <p className="text-xs text-accent font-semibold mt-2">— {f.name}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CMA Intermediate Coaching ── */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">

          {/* Centered intro — same pattern as CMA Final */}
          

          {/* Why Choose — full width below intro */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="rounded-2xl overflow-hidden mb-12 border border-border shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Left — slider-3 image bg */}
              <div
                className="p-10 md:p-14 flex flex-col justify-center relative overflow-hidden min-h-[320px]"
                style={{ backgroundImage: `url(${slider3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-primary/70" />
                {/* decorative circles */}
                <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-white/5 z-0" />
                <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/5 z-0" />
                {/* content above overlay */}
                <div className="relative z-10">
                  <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                    Why Choose Us
                  </motion.span>
                  <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-heading font-extrabold text-white leading-tight mb-4">
                    Why Choose<br />
                    <span className="text-secondary">Commerce Educators</span>
                  </motion.h3>
                  <motion.p variants={fadeInUp} className="text-white/80 text-sm leading-relaxed">
                    Success in CMA Intermediate requires more than just completing the syllabus. Our coaching focuses on concept clarity, practical application, and continuous performance improvement.
                  </motion.p>
                </div>
              </div>
              {/* Right — checklist */}
              <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
                <motion.ul variants={stagger} className="space-y-3">
                  {cmaIntermediateFeatures.map((feature, i) => (
                    <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center mb-12">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Online Coaching
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              CMA Intermediate Online Coaching
              <span className="block text-accent mt-1">by Commerce Educators</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-3">
              CMA Intermediate is a crucial stage in the Cost and Management Accountant journey, where students develop advanced knowledge in accounting, taxation, financial management, cost management, auditing, and business laws.
            </motion.p>
            
          </motion.div>
          {/* Subjects heading */}
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-heading font-bold text-foreground text-center mb-10">
            Subjects Covered in CMA Intermediate
          </motion.h3>

          {/* Subject group cards */}
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
