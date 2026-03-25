import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const subjects = [
  {
    title: "Fundamentals of Economics",
    description:
      "Understand micro and macroeconomic concepts, national income, money & banking, and Indian economic policies essential for management accounting professionals.",
  },
  {
    title: "Fundamentals of Accounting",
    description:
      "Master the principles of double-entry bookkeeping, preparation of financial statements, accounting standards, and rectification of errors.",
  },
  {
    title: "Business Laws",
    description:
      "Learn the Indian Contract Act, Sale of Goods Act, Negotiable Instruments Act, and other commercial laws critical for business compliance.",
  },
  {
    title: "Quantitative Aptitude",
    description:
      "Build strong foundations in arithmetic, algebra, statistics, and probability to solve complex business and financial problems effectively.",
  },
];

const CMAFoundationPage = () => (
  <Layout>
    <section className="gradient-hero section-padding">
      <div className="container-main text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
          CMA Foundation
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Begin your CMA journey with a solid understanding of economics, accounting, law, and quantitative methods.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to All Courses
        </Link>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
          {subjects.map((subject, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{subject.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{subject.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Enroll Now <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CMAFoundationPage;
