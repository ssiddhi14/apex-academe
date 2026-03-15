import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const facultyData = [
  { name: "Dr. Rajesh Kumar", subject: "Cost Accounting & Financial Management", exp: "20+ Years", qualification: "PhD, CMA, MBA", bio: "Founder of Pinnacle Academy with over two decades of experience in cost and management accounting education. Known for simplifying complex concepts.", achievements: "50+ All India Rankers mentored" },
  { name: "CA Sunita Agarwal", subject: "Financial Reporting & Auditing", exp: "15+ Years", qualification: "CA, M.Com, DISA", bio: "Renowned CA faculty with expertise in financial reporting standards. Passionate about making accounting principles intuitive for students.", achievements: "Author of bestselling CA preparation books" },
  { name: "CMA Vikram Singh", subject: "Strategic Management & Law", exp: "18+ Years", qualification: "CMA, MBA, LLB", bio: "Corporate strategy expert who brings real-world case studies into the classroom. Students love his practical teaching approach.", achievements: "Former CFO of a Fortune 500 company" },
  { name: "Dr. Priya Mehta", subject: "Business Mathematics & Economics", exp: "12+ Years", qualification: "PhD Economics, M.Sc", bio: "Makes numbers fun and approachable. Specializes in building mathematical foundations for commerce students.", achievements: "Published 15+ research papers" },
  { name: "CA Amit Sharma", subject: "Taxation — Direct & Indirect", exp: "16+ Years", qualification: "CA, LLM (Tax Law)", bio: "Tax law specialist with extensive experience in both direct and indirect taxation. His classes are practical and exam-oriented.", achievements: "Tax consultant to 100+ companies" },
  { name: "CMA Neha Gupta", subject: "Corporate Financial Reporting", exp: "10+ Years", qualification: "CMA, CA Inter, MBA Finance", bio: "Young and dynamic faculty member who connects well with students through interactive teaching methods and digital learning tools.", achievements: "Highest student satisfaction rating" },
];

const FacultyPage = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Our Expert Faculty
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Learn from India's top CMA and CA educators with decades of experience.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                <div className="bg-primary/5 p-6 text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-3xl font-bold text-primary">
                    {f.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mt-4">{f.name}</h3>
                  <p className="text-sm font-medium text-accent">{f.subject}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.qualification}</p>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5 text-accent" /> {f.exp} Experience
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Award className="h-3.5 w-3.5 text-secondary" /> {f.achievements}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FacultyPage;
