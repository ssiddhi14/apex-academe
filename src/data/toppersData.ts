/**
 * RESULTS PAGE — STUDENT TOPPERS
 * ================================
 * To update student photos, replace the imported files in src/assets/
 * Recommended image size: 200x200px (square)
 */

import deshna      from "@/assets/deshna.jpeg";
import kanika      from "@/assets/kanika.jpeg";
import kunal       from "@/assets/kunal.jpeg";
import mansigoyal  from "@/assets/mansigoyal.jpeg";
import harsh       from "@/assets/harsh.jpeg";

export interface Topper {
  name: string;
  rank: string;
  exam: string;
  quote: string;
  image?: string;
}

export const toppers: Topper[] = [
  {
    name: "Deshna Jain",
    rank: "AIR 5",
    exam: "CMA Final, Dec 2025",
    quote: "Commerce Educators gave me the clarity and confidence I needed to crack the exam with a top rank.",
    image: deshna,
  },
  {
    name: "Kanika Dangayech",
    rank: "AIR 3",
    exam: "CMA Final, Dec 2025",
    quote: "The mock tests and personalized mentoring helped me identify my weak areas and convert them into strengths.",
    image: kanika,
  },
  {
    name: "Kunal Chamoli",
    rank: "AIR 26",
    exam: "CMA Final, Dec 2025",
    quote: "The faculty at Commerce Educators are truly exceptional. Their passion for teaching is contagious.",
    image: kunal,
  },
  {
    name: "Mansi Goyal",
    rank: "AIR 5",
    exam: "CMA Final, Dec 2025",
    quote: "The comprehensive study material and regular tests kept me on track throughout my preparation.",
    image: mansigoyal,
  },
  {
    name: "Harsh Saini",
    rank: "AIR 48",
    exam: "CMA Final, Dec 2025",
    quote: "I joined Commerce Educators as an average student and came out as a topper. The transformation was incredible.",
    image: harsh,
  },
];
