import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const categories = [
  {
    title: "Classrooms",
    images: [
      { desc: "Modern air-conditioned classroom with projector setup", gradient: "from-accent/20 to-primary/20" },
      { desc: "Computer lab for online practice tests", gradient: "from-secondary/20 to-accent/20" },
      { desc: "Library and self-study area", gradient: "from-primary/20 to-secondary/20" },
    ],
  },
  {
    title: "Events & Seminars",
    images: [
      { desc: "Annual student awards ceremony 2024", gradient: "from-secondary/30 to-accent/20" },
      { desc: "Industry expert guest lecture on GST", gradient: "from-accent/20 to-primary/20" },
      { desc: "Career guidance seminar for CMA aspirants", gradient: "from-primary/20 to-secondary/20" },
    ],
  },
  {
    title: "Student Activities",
    images: [
      { desc: "Group study session before exams", gradient: "from-primary/20 to-accent/20" },
      { desc: "Students celebrating exam results", gradient: "from-secondary/20 to-primary/20" },
      { desc: "Annual sports day and cultural festival", gradient: "from-accent/20 to-secondary/20" },
    ],
  },
];

const GalleryPage = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Photo Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A glimpse into life at Pinnacle Academy — our classrooms, events, and student activities.
          </motion.p>
        </div>
      </section>

      {categories.map((cat, ci) => (
        <section key={ci} className={`section-padding ${ci % 2 === 1 ? "bg-muted" : ""}`}>
          <div className="container-main">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <Camera className="h-6 w-6 text-accent" /> {cat.title}
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-5">
              {cat.images.map((img, i) => (
                <motion.div key={i} variants={fadeInUp} className="rounded-xl overflow-hidden border border-border card-hover group">
                  <div className={`h-48 bg-gradient-to-br ${img.gradient} flex items-center justify-center`}>
                    <Camera className="h-12 w-12 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-card p-4">
                    <p className="text-sm text-muted-foreground">{img.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default GalleryPage;
