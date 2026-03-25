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
    title: "Strategic Financial Management",
    description:
      "Learn advanced financial planning, capital budgeting, mergers & acquisitions, and risk management strategies for corporate decision-making.",
  },
  {
    title: "Corporate Laws",
    description:
      "In-depth study of the Companies Act 2013, SEBI regulations, competition law, and corporate governance frameworks.",
  },
  {
    title: "Cost & Management Audit",
    description:
      "Understand audit principles, cost audit procedures, management audit techniques, and internal control systems for organizations.",
  },
  {
    title: "Strategic Performance Management",
    description:
      "Master performance evaluation tools like Balanced Scorecard, EVA, benchmarking, and strategic decision-making models.",
  },
];

const CMAFinalPage = () => (
  <Layout>
    <section className="gradient-hero section-padding">
      <div className="container-main text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
          CMA Final
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Master advanced strategic management, corporate law, auditing, and performance management to achieve your CMA qualification.
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
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
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

export default CMAFinalPage;
