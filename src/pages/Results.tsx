import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const toppers = [
  { name: "Anita Desai", rank: "AIR 1", exam: "CMA Intermediate, Dec 2024", quote: "Pinnacle Academy's structured approach and dedicated faculty made all the difference. I couldn't have done it without them." },
  { name: "Rohit Patel", rank: "AIR 2", exam: "CMA Final, June 2024", quote: "The mock tests and personalized mentoring helped me identify my weak areas and convert them into strengths." },
  { name: "Priya Sharma", rank: "AIR 3", exam: "CMA Final, Dec 2024", quote: "The faculty at Pinnacle are truly exceptional. Their passion for teaching is contagious." },
  { name: "Arjun Nair", rank: "AIR 5", exam: "CMA Foundation, Dec 2024", quote: "The comprehensive study material and regular tests kept me on track throughout my preparation." },
  { name: "Sneha Reddy", rank: "AIR 7", exam: "CMA Foundation, June 2024", quote: "I joined Pinnacle as an average student and came out as a topper. The transformation was incredible." },
  { name: "Karan Malhotra", rank: "AIR 10", exam: "CMA Intermediate, June 2024", quote: "Best coaching institute for CMA preparation. The doubt-solving sessions were incredibly helpful." },
  { name: "Meera Iyer", rank: "AIR 12", exam: "CMA Final, May 2024", quote: "Pinnacle Academy doesn't just teach — they build your confidence to face the toughest exams." },
  { name: "Rahul Verma", rank: "AIR 15", exam: "CMA Intermediate, Nov 2024", quote: "The online classes were just as good as offline. I could study from home without missing anything." },
];

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
      <section className="bg-muted section-padding py-10">
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
      </section>

      {/* Toppers */}
      <section className="section-padding">
        <div className="container-main">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            <Trophy className="h-8 w-8 text-secondary inline-block mr-2 -mt-1" />
            Our Toppers
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {toppers.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card rounded-xl border border-border p-5 card-hover text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-3 text-xl font-bold text-secondary">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-2">
                  <Trophy className="h-3 w-3" /> {t.rank}
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm">{t.name}</h3>
                <p className="text-xs text-accent font-medium">{t.exam}</p>
                <div className="flex items-center justify-center gap-0.5 my-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">"{t.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ResultsPage;
