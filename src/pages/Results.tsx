import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Layout from "@/components/Layout";
import { toppers } from "@/data/toppersData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const ResultsPage = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Our Student Results
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Celebrating the success of our students who achieved top ranks in CMA examinations.
          </motion.p>
        </div>
      </section>

      {/* Stats Banner */}
      {/* <section className="bg-muted section-padding py-10">
        <div className="container-main grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { val: "50+", label: "All India Rankers" },
            { val: "95%", label: "Pass Rate" },
            { val: "5", label: "AIR Rank 1 Holders" },
            { val: "500+", label: "Toppers in 2024" },
          ].map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl font-heading font-extrabold text-accent">{s.val}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Toppers */}
      <section className="section-padding">
        <div className="container-main">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            <Trophy className="h-8 w-8 text-secondary inline-block mr-2 -mt-1" />
            Our Toppers
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-5">
            {toppers.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl border border-border p-5 card-hover text-center w-[220px]">
                <div className="h-28 w-28 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <span className="text-2xl font-bold text-secondary">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-2">
                  <Trophy className="h-3 w-3" /> {t.rank}
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm">{t.name}</h3>
                <p className="text-xs text-accent font-medium">{t.exam}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ResultsPage;
