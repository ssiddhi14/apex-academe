import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen, ArrowRight, ArrowLeft, MonitorPlay, Users, Globe2,
  BookCopy, ClipboardCheck, MessageCircle, GraduationCap, LibraryBig,
  Video, ListChecks, Clock, Infinity, Laptop, Gauge, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const subjectGroups = [
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

const courseOverview = [
  { icon: GraduationCap, label: "Course Name",          value: "CMA Intermediate" },
  { icon: MonitorPlay,   label: "Mode of Classes",      value: "100% Online Recorded Lectures" },
  { icon: Users,         label: "Faculty",              value: "CA Akhilesh Maheshwari & CS Disha Lohana" },
  { icon: Globe2,        label: "Language",             value: "Hindi + English (Mixed for better understanding)" },
  { icon: BookCopy,      label: "Study Material",       value: "Book Notes + Concept Sheets + Practice Questions" },
  { icon: LibraryBig,    label: "Book",                 value: "Hard Copy only" },
  { icon: ClipboardCheck,label: "Self Assessment Tests",value: "Available (Subject-wise)" },
  { icon: MessageCircle, label: "Doubt Support",        value: "WhatsApp / Telegram Support" },
  { icon: Users,         label: "Suitable For",         value: "Students & Working Professionals" },
  { icon: BookOpen,      label: "Course Coverage",      value: "Study Material, Previous Year Questions (PYQs), Model Question Papers (MQPs), MCQs and Extra practice questions from CA and CS study materials" },
];

const lectureStructure = [
  { icon: Video,        label: "Lecture Type",           value: "Pre-recorded Conceptual Lectures" },
  { icon: ListChecks,   label: "Total Lectures",         value: "80 – 150 (depending on subject)" },
  { icon: Clock,        label: "Duration per Lecture",   value: "1 to 2 Hours" },
  { icon: Clock,        label: "Total Course Duration",  value: "100 – 150 Hours (depending on subject)" },
  { icon: Globe2,       label: "Viewing Flexibility",    value: "Watch Anytime, Anywhere" },
  { icon: Infinity,     label: "Revision Access",        value: "Unlimited Views within validity" },
  { icon: Laptop,       label: "Device Access",          value: "Mobile (android/iOS) + Laptop + Tablet" },
  { icon: Gauge,        label: "Speed Control",          value: "Available (1x – 2x playback)" },
  { icon: RefreshCw,    label: "Updates",                value: "Amendments / Updates provided (if applicable)" },
];

/* Reusable styled table component */
const InfoTable = ({
  title,
  rows,
  accentClass = "bg-accent/10 text-accent",
}: {
  title: string;
  rows: { icon: React.ElementType; label: string; value: string }[];
  accentClass?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={stagger}
    className="mb-10"
  >
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
      <h3 className="text-xl font-heading font-bold text-foreground whitespace-nowrap">{title}</h3>
      <div className="h-px flex-1 bg-border" />
    </motion.div>

    <motion.div variants={fadeInUp} className="rounded-xl border border-border overflow-hidden shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-[1fr_2fr] bg-muted px-6 py-3">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Particulars</span>
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Details</span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => {
        const Icon = row.icon;
        return (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] px-6 py-4 gap-4 items-start border-t border-border transition-colors hover:bg-muted/40 ${
              i % 2 === 0 ? "bg-card" : "bg-background"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`h-7 w-7 rounded-md flex items-center justify-center shrink-0 ${accentClass}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{row.label}</span>
            </div>
            <span className="text-sm text-muted-foreground leading-relaxed">{row.value}</span>
          </div>
        );
      })}
    </motion.div>
  </motion.div>
);

const CMAIntermediatePage = () => (
  <Layout>
    <section className="gradient-hero section-padding">
      <div className="container-main text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
          CMA Intermediate
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Advance your CMA preparation with in-depth knowledge of financial accounting, cost management, law, and taxation.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to All Courses
        </Link>

        {/* Subjects — grouped by Group I / II */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-2xl font-heading font-bold text-foreground text-center mb-10"
        >
          Subjects Covered in CMA Intermediate
        </motion.h2>

        {subjectGroups.map((group, gi) => (
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

        {/* Course Overview Table */}
        <InfoTable
          title="Course Overview"
          rows={courseOverview}
          accentClass="bg-accent/10 text-accent"
        />

        {/* Lecture Structure Table */}
        <InfoTable
          title="Lecture Structure"
          rows={lectureStructure}
          accentClass="bg-secondary/20 text-secondary-foreground"
        />

        <div className="text-center mt-8">
          <Button variant="gold" size="lg" asChild>
            <a href="https://www.commerceeducators.com/courses" target="_blank" rel="noopener noreferrer">
              Enroll Now <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CMAIntermediatePage;
