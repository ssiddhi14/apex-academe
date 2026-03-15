import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const blogPosts = [
  {
    title: "How to Prepare for CMA Exams: Complete Guide 2025",
    excerpt: "A comprehensive strategy guide covering study plans, time management, and exam-day tips for CMA Foundation, Inter, and Final exams.",
    date: "March 10, 2025",
    readTime: "8 min read",
    tag: "CMA Preparation",
    slug: "#",
  },
  {
    title: "CMA vs CA – Career Guide: Which is Right for You?",
    excerpt: "An in-depth comparison of CMA and CA career paths, salaries, job prospects, and which certification suits your career goals.",
    date: "March 5, 2025",
    readTime: "10 min read",
    tag: "Career Guide",
    slug: "#",
  },
  {
    title: "Best Study Plan for CA Foundation 2025",
    excerpt: "A month-by-month study plan designed by our expert CA faculty to help you ace the CA Foundation exam on your first attempt.",
    date: "February 28, 2025",
    readTime: "6 min read",
    tag: "CA Preparation",
    slug: "#",
  },
  {
    title: "Top 10 CMA Exam Tips from All India Rankers",
    excerpt: "Our top-performing students share their secrets to cracking the CMA exam with top ranks. Learn from the best!",
    date: "February 20, 2025",
    readTime: "7 min read",
    tag: "CMA Tips",
    slug: "#",
  },
  {
    title: "Career Opportunities After CMA: A Complete Overview",
    excerpt: "Explore lucrative career paths available after CMA qualification — from industry roles to consulting and entrepreneurship.",
    date: "February 15, 2025",
    readTime: "9 min read",
    tag: "Career Guide",
    slug: "#",
  },
  {
    title: "How to Balance Work and CA Studies Effectively",
    excerpt: "Practical tips for working professionals pursuing CA certification. Manage your time, energy, and study schedule like a pro.",
    date: "February 10, 2025",
    readTime: "5 min read",
    tag: "Study Tips",
    slug: "#",
  },
];

const BlogPage = () => {
  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Blog & Resources
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Expert tips, study guides, and career advice for CMA and CA aspirants.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article key={i} variants={fadeInUp} className="bg-card rounded-xl border border-border overflow-hidden card-hover group">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Tag className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-medium">{post.tag}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
