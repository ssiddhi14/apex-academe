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
    group: "Group III",
    papers: [
      {
        code: "Paper 13",
        title: "Corporate and Economic Laws",
        videoId: "Jpsbcj1tF6Q",
        description:
        "Strengthen your understanding of corporate and regulatory frameworks with our CMA Final Corporate and Economic Laws course. This paper covers the Companies Act, 2013, Insolvency and Bankruptcy Code (IBC), Corporate Governance, Sustainability, SEBI Regulations, Competition Act, FEMA and key laws governing banking, insurance and MSME sectors. Students also gain insights into Cyber Security, Data Privacy and Anti-Money Laundering regulations. The course focuses on conceptual clarity, practical interpretation of legal provisions and exam-oriented preparation through case-based discussions, amendments and previous examination questions. Comprehensive coverage and structured learning help students build confidence for CMA Final examinations and professional practice."      },
      {
        code: "Paper 14",
        title: "Strategic Financial Management (SFM)",
        videoId: "sNiasve8ZlQ",
        description:
        "Master advanced financial decision-making with our CMA Final Strategic Financial Management course. This paper covers Investment Decisions, Capital Budgeting, Project Evaluation, Security Analysis, Portfolio Management, Asset Pricing Theories and Financial Risk Management. Students also gain expertise in Derivatives, International Financial Management, Foreign Exchange Markets and Digital Finance. The course focuses on conceptual clarity, analytical thinking and practical application of financial strategies through comprehensive numerical problem-solving and exam-oriented discussions. With structured learning, previous examination question practice and revision support, students develop the skills required to excel in CMA Final examinations and make effective strategic financial decisions in professional practice."      },
    ],
  },
  {
    group: "Group IV",
    papers: [
      {
        code: "Paper 17",
        title: "Cost and Management Audit (CMAD)",
        videoId: "M7rISUq91-U",
        description:
        "Develop expertise in Cost Audit, Management Audit and Internal Audit with our CMA Final Paper 17 course. This paper covers Cost Audit procedures, Cost Accounting Standards, Cost Audit Reports, Management Audit, Internal Control Systems, Operational Audit and Information Systems Security Audit. Students also gain practical knowledge of Forensic Audit and Anti-Money Laundering regulations, which are increasingly important in today’s business environment. The course focuses on conceptual clarity, professional application and exam-oriented preparation through practical illustrations, case studies and previous examination questions. Comprehensive coverage and structured learning help students build confidence for CMA Final examinations and professional audit assignments."      },
      {
        code: "Paper 18",
        title: "Corporate Financial Reporting (CFR)",
        videoId: "n9liLqAwEY8",
        description:
        "Master advanced financial reporting concepts with our CMA Final Corporate Financial Reporting course. This paper covers Indian Accounting Standards (Ind AS), Valuation of Shares, Financial Instruments, NBFC Accounting and Reporting, Business Combinations, Corporate Restructuring and Consolidated Financial Statements. Students also gain an understanding of recent developments in financial reporting and Government Accounting in India. The course focuses on conceptual clarity, practical application and exam-oriented preparation through comprehensive illustrations, case studies and previous examination questions. With structured learning and revision support, students develop the expertise required to excel in CMA Final examinations and handle complex corporate reporting requirements confidently."      },
      {
        code: "Paper 20A",
        title: "Strategic Performance Management and Business Valuation",
        videoId: "iOclv6W8cpA",
        description:
        "Enhance your strategic decision-making and valuation expertise with our CMA Final Strategic Performance Management and Business Valuation course. This paper covers Performance Measurement, Performance Evaluation, Enterprise Risk Management, Business Valuation Methods, Valuation of Assets and Liabilities, and Valuation in Mergers and Acquisitions. Students gain practical insights into analysing business performance, improving organisational efficiency and determining business value using professional valuation techniques. The course focuses on conceptual clarity, practical application and exam-oriented preparation through case studies, numerical problem-solving and previous examination questions. Comprehensive coverage and structured learning help students excel in CMA Final examinations and develop skills relevant to finance, consulting and valuation professionals."      },
    ],
  },
];

const courseOverview = [
  { icon: GraduationCap,  label: "Course Name",           value: "CMA Final" },
  { icon: MonitorPlay,    label: "Mode of Classes",       value: "100% Online Recorded Lectures" },
  { icon: Users,          label: "Faculty",               value: "CA Akhilesh Maheshwari & CS Disha Lohana" },
  { icon: Globe2,         label: "Language",              value: "Hindi + English (Mixed for better understanding)" },
  { icon: BookCopy,       label: "Study Material",        value: "Book Notes + Concept Sheets + Practice Questions" },
  { icon: LibraryBig,     label: "Book",                  value: "Hard Copy only" },
  { icon: ClipboardCheck, label: "Self Assessment Tests", value: "Available (Subject-wise)" },
  { icon: MessageCircle,  label: "Doubt Support",         value: "WhatsApp / Telegram Support" },
  { icon: Users,          label: "Suitable For",          value: "Students & Working Professionals" },
  { icon: BookOpen,       label: "Course Coverage",       value: "Study Material, Previous Year Questions (PYQs), Model Question Papers (MQPs), MCQs and Extra practice questions from CA and CS study materials" },
];

const lectureStructure = [
  { icon: Video,       label: "Lecture Type",          value: "Pre-recorded Conceptual Lectures" },
  { icon: ListChecks,  label: "Total Lectures",        value: "100 – 150 (depending on subject)" },
  { icon: Clock,       label: "Duration per Lecture",  value: "1 to 2 Hours" },
  { icon: Clock,       label: "Total Course Duration", value: "130 – 180 Hours (depending on subject)" },
  { icon: Globe2,      label: "Viewing Flexibility",   value: "Watch Anytime, Anywhere" },
  { icon: Infinity,    label: "Revision Access",       value: "Unlimited Views within validity" },
  { icon: Laptop,      label: "Device Access",         value: "Mobile (android/iOS) + Laptop + Tablet" },
  { icon: Gauge,       label: "Speed Control",         value: "Available (1x – 2x playback)" },
  { icon: RefreshCw,   label: "Updates",               value: "Amendments / Updates provided (if applicable)" },
];

/* Reusable styled table */
const InfoTable = ({
  title,
  rows,
  accentClass = "bg-primary/10 text-primary",
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
        {/* <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to All Courses
        </Link> */}

        {/* Subjects — grouped by Group III / IV */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-2xl font-heading font-bold text-foreground text-center mb-10"
        >
          Subjects Covered in CMA Final
        </motion.h2>

        {subjectGroups.map((group, gi) => (
          <motion.div key={gi} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
                {group.group}
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {group.papers.map((paper, pi) => (
                <motion.div key={pi} variants={fadeInUp} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
                  {/* Clickable YouTube thumbnail */}
                  <a
                    href={`https://www.youtube.com/watch?v=${paper.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-video bg-black group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${paper.videoId}/hqdefault.jpg`}
                      alt={paper.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="h-6 w-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* YouTube badge */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                      <svg className="h-3 w-3 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-1-1.9-1-2.3-1C17.2 2.7 12 2.7 12 2.7s-5.2 0-8.3.2c-.5.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.2 8 .2 9.8v1.7c0 1.8.3 3.6.3 3.6s.2 1.6.9 2.3c.9 1 2 .9 2.6 1 1.9.2 8 .2 8 .2s5.2 0 8.3-.2c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.3-1.8.3-3.6V9.8c0-1.8-.3-3.6-.3-3.6zM9.7 15.5V8l6.3 3.8-6.3 3.7z"/></svg>
                      Watch on YouTube
                    </div>
                  </a>
                  {/* Card content */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{paper.code}</span>
                        <h4 className="text-base font-heading font-bold text-foreground mt-0.5 mb-2">{paper.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{paper.description}</p>
                      </div>
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
          accentClass="bg-primary/10 text-primary"
        />

        {/* Lecture Structure Table */}
        <InfoTable
          title="Lecture Structure"
          rows={lectureStructure}
          accentClass="bg-accent/10 text-accent"
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

export default CMAFinalPage;
