/**
 * ABOUT PAGE — FOUNDERS
 * =======================
 * To add founder photos:
 * 1. Add the image to src/assets/founders/ folder (e.g., rajesh-kumar.jpg)
 * 2. Import it below
 * 3. Set the `image` field for the corresponding founder
 *
 * If `image` is undefined, initials will be shown as fallback.
 * Recommended image size: 300x300px (square)
 */

// Example imports (uncomment and update when adding real photos):
// import rajeshKumar from "@/assets/founders/rajesh-kumar.jpg";
// import priyaSharma from "@/assets/founders/priya-sharma.jpg";
import founderImage from "../assets/as.jpeg";
import FounderImage from "../assets/dl.jpeg";

export interface Founder {
  name: string;
  initials: string;
  designation: string;
  message: string;
  /** Optional founder photo. Falls back to initials if not provided. */
  image?: string;
}

export const founders: Founder[] = [
  {
    initials: "AM",
    name: "CA Akhilesh Maheshwari",
    designation: "Founder",
    message:"Education is not just about exams—it is about building confidence, gaining knowledge, and preparing for a successful future. At Commerce Educators, we focus on conceptual clarity, practical learning, and continuous support to help students achieve their goals.By joining us, you become part of a learning community dedicated to your growth and success. Thank you for your trust, and we look forward to being a part of your academic journey.Wishing you success in all your future endeavors.",
    image: founderImage,
  },
  {
    initials: "DL",
    name: "CS Disha Lohana",
    designation: "Founder",
    message:
    "It gives me immense pleasure to welcome you to Commerce Educators, a platform dedicated to making professional education accessible, engaging, and result-oriented. We believe that success comes from the right guidance, strong concepts, and consistent effort. Our focus is on helping students build confidence, gain practical understanding, and excel in professional courses such as CA, CS, and CMA. At Commerce Educators, you are not just a student—you are part of a learning community committed to your growth and success. Thank you for placing your trust in us. We look forward to being a part of your academic journey and helping you achieve your goals. Wishing you a journey filled with learning, growth, confidence, and success.",
    image: FounderImage,
  },
];
