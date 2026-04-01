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
    initials: "RK",
    name: "Dr. Rajesh Kumar",
    designation: "Founder & Director",
    message:
      "When I founded Commerce Educators in 2010, I had one goal — to make quality CMA education accessible to every aspiring student. Over the years, we've grown from a single classroom to a premier institute, but our core philosophy remains the same: every student deserves personalized attention, world-class faculty, and a clear path to success. We don't just teach — we mentor, guide, and build the confidence that turns aspirants into achievers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  },
  {
    initials: "PS",
    name: "Prof. Priya Sharma",
    designation: "Co-Founder & Academic Head",
    message:
      "Education is not just about passing exams — it's about building a mindset that drives lifelong success. At Commerce Educators, we focus on conceptual clarity, practical application, and continuous mentorship. Every student who walks through our doors becomes part of a family that celebrates their growth. Our innovative teaching methods and dedicated faculty ensure that each aspirant is fully prepared — not just for the CMA exam, but for a thriving career in management accounting.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
];
