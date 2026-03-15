import { motion } from "framer-motion";
import { Award, BookOpen, Target, Users, Heart, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const milestones = [
  { year: "2010", event: "Founded with a vision to democratize CMA & CA education" },
  { year: "2013", event: "First batch of students achieved 100% pass rate" },
  { year: "2016", event: "Expanded to online classes reaching students pan-India" },
  { year: "2019", event: "Produced first All India Rank 1 in CMA examinations" },
  { year: "2022", event: "15,000+ students trained milestone achieved" },
  { year: "2025", event: "Launched advanced AI-powered learning platform" },
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            About Pinnacle Academy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Empowering CMA and CA aspirants since 2010 with world-class coaching and mentorship.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide accessible, high-quality CMA and CA coaching that transforms careers and builds future finance leaders." },
              { icon: Heart, title: "Our Vision", desc: "To be India's most trusted and results-driven coaching institute for commerce and management accounting education." },
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

      {/* Founder Message */}
      <section className="section-padding bg-muted">
        <div className="container-main max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary shrink-0">
                RK
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Founder's Message</h2>
                <p className="text-sm font-medium text-accent mb-3">Dr. Rajesh Kumar — Founder & Director</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "When I founded Pinnacle Academy in 2010, I had one goal — to make quality CMA and CA education accessible to every aspiring student. Over the years, we've grown from a single classroom to a premier institute, but our core philosophy remains the same: every student deserves personalized attention, world-class faculty, and a clear path to success. We don't just teach — we mentor, guide, and build the confidence that turns aspirants into achievers."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Our Journey
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-accent flex items-center justify-center z-10">
                  <GraduationCap className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="flex-1 ml-12 md:ml-0 bg-card rounded-xl border border-border p-4 card-hover">
                  <span className="text-xs font-bold text-accent">{m.year}</span>
                  <p className="text-sm text-foreground mt-1">{m.event}</p>
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
