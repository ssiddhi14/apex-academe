/**
 * HOME PAGE SLIDER IMAGES
 * ========================
 * To update slider images:
 * 1. Add your new image to the src/assets/slider/ folder
 * 2. Import it below
 * 3. Update the corresponding slide's `src` field
 *
 * Recommended image size: 1920x800px (landscape)
 */

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

export interface Slide {
  src: string;
  alt: string;
  headline: string;
  sub: string;
}

export const slides: Slide[] = [
  {
    src: slider1,
    alt: "Modern classrooms at Commerce Educators",
    headline: "Best CMA Coaching Institute",
    sub: "Expert faculty, proven results, and personalized attention to crack CMA exams.",
  },
  {
    src: slider2,
    alt: "Students celebrating CMA exam success",
    headline: "95% Success Rate",
    sub: "Join thousands of successful CMA professionals trained by Commerce Educators.",
  },
  {
    src: slider3,
    alt: "Expert faculty teaching CMA courses",
    headline: "Learn from the Best",
    sub: "Industry-experienced CMA faculty with 14+ years of proven teaching excellence.",
  },
];
