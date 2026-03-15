import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Clock, BookOpen, Users, CheckCircle, ArrowRight, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const allCourses = [
  {
    category: "CMA",
    courses: [
      {
        title: "CMA Foundation",
        duration: "8 Months",
        fees: "₹15,000",
        subjects: ["Fundamentals of Economics & Management", "Fundamentals of Accounting", "Fundamentals of Laws & Ethics", "Fundamentals of Business Mathematics & Statistics"],
        highlights: ["Daily doubt sessions", "Weekly mock tests", "Comprehensive study material", "Online + Offline mode"],
        schedule: "Morning: 7-9 AM | Evening: 5-7 PM",
        color: "border-accent",
      },
      {
        title: "CMA Intermediate",
        duration: "12 Months",
        fees: "₹25,000",
        subjects: ["Financial Accounting", "Laws & Ethics", "Direct Taxation", "Cost Accounting", "Operations Management", "Cost & Management Accounting", "Indirect Taxation", "Company Accounts & Audit"],
        highlights: ["Expert CMA faculty", "Practice-heavy approach", "Previous year paper analysis", "Personalized mentoring"],
        schedule: "Morning: 7-10 AM | Evening: 4-7 PM",
        color: "border-secondary",
      },
      {
        title: "CMA Final",
        duration: "12 Months",
        fees: "₹30,000",
        subjects: ["Corporate Laws & Compliance", "Strategic Financial Management", "Strategic Cost Management", "Direct Tax Laws & International Taxation", "Corporate Financial Reporting", "Indirect Tax Laws & Practice", "Cost & Management Audit", "Strategic Performance Management"],
        highlights: ["Case study approach", "Industry expert guest lectures", "Intensive revision batches", "1-on-1 mentorship"],
        schedule: "Weekdays: 8-11 AM | Weekends: 9 AM-1 PM",
        color: "border-primary",
      },
    ],
  },
  {
    category: "CA",
    courses: [
      {
        title: "CA Foundation",
        duration: "8 Months",
        fees: "₹18,000",
        subjects: ["Principles & Practices of Accounting", "Business Laws", "Business Mathematics & Statistics", "Business Economics"],
        highlights: ["Chapter-wise tests", "Concept clarity focus", "RTP & MTP coverage", "Experienced CA faculty"],
        schedule: "Morning: 6:30-9 AM | Evening: 5-7:30 PM",
        color: "border-success",
      },
      {
        title: "CA Intermediate",
        duration: "12 Months",
        fees: "₹35,000",
        subjects: ["Advanced Accounting", "Corporate & Other Laws", "Cost & Management Accounting", "Taxation", "Auditing & Assurance", "Financial Management & Economics"],
        highlights: ["Toppers' study strategy", "Exam-oriented approach", "Regular assessments", "Doubt clearing marathons"],
        schedule: "Morning: 7-10 AM | Evening: 4-7 PM",
        color: "border-accent",
      },
      {
        title: "CA Final",
        duration: "14 Months",
        fees: "₹40,000",
        subjects: ["Financial Reporting", "Strategic Financial Management", "Advanced Auditing", "Corporate & Economic Laws", "Strategic Cost Management", "Elective Paper", "Direct Tax Laws & International Taxation", "Indirect Tax Laws"],
        highlights: ["All India mock tests", "Answer writing practice", "Dedicated revision sessions", "Placement guidance"],
        schedule: "Weekdays: 7-11 AM | Weekends: 8 AM-2 PM",
        color: "border-secondary",
      },
    ],
  },
];

const CoursesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Our CMA & CA Courses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive coaching programs designed to help you excel in CMA and CA examinations with expert guidance.
          </motion.p>
        </div>
      </section>

      {allCourses.map((cat) => (
        <section key={cat.category} className="section-padding" id={cat.category.toLowerCase()}>
          <div className="container-main">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              {cat.category} Courses
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
              {cat.courses.map((course, i) => (
                <motion.div key={i} variants={fadeInUp} className={`bg-card rounded-2xl border-l-4 ${course.color} border border-border p-6 md:p-8 card-hover`}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{course.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><IndianRupee className="h-4 w-4" /> {course.fees}</span>
                        <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.subjects.length} Subjects</span>
                        <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.schedule}</span>
                      </div>

                      <h4 className="text-sm font-semibold text-foreground mb-2">Subjects Covered:</h4>
                      <ul className="grid sm:grid-cols-2 gap-1.5 mb-4">
                        {course.subjects.map((s, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 mt-0.5 text-accent shrink-0" /> {s}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.highlights.map((h, j) => (
                          <span key={j} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">{h}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:items-end gap-3 lg:min-w-[200px]">
                      <div className="text-3xl font-heading font-extrabold text-foreground">{course.fees}</div>
                      <Button variant="gold" size="lg" asChild>
                        <Link to="/contact">Enroll Now <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">Book Free Demo</Link>
                      </Button>
                    </div>
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

export default CoursesPage;
