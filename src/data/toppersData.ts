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
    name: "Deshna",
    rank: "AIR 1",
    exam: "CMA Intermediate, Dec 2024",
    quote: "Commerce Educators gave me the clarity and confidence I needed to crack the exam with a top rank.",
    image: deshna,
  },
  {
    name: "Kanika",
    rank: "AIR 2",
    exam: "CMA Final, June 2024",
    quote: "The mock tests and personalized mentoring helped me identify my weak areas and convert them into strengths.",
    image: kanika,
  },
  {
    name: "Kunal",
    rank: "AIR 3",
    exam: "CMA Final, Dec 2024",
    quote: "The faculty at Commerce Educators are truly exceptional. Their passion for teaching is contagious.",
    image: kunal,
  },
  {
    name: "Mansi Goyal",
    rank: "AIR 5",
    exam: "CMA Foundation, Dec 2024",
    quote: "The comprehensive study material and regular tests kept me on track throughout my preparation.",
    image: mansigoyal,
  },
  {
    name: "Harsh",
    rank: "AIR 7",
    exam: "CMA Foundation, June 2024",
    quote: "I joined Commerce Educators as an average student and came out as a topper. The transformation was incredible.",
    image: harsh,
  },
  {
    name: "Deshna",
    rank: "AIR 10",
    exam: "CMA Intermediate, June 2024",
    quote: "Best coaching institute for CMA preparation. The doubt-solving sessions were incredibly helpful.",
    image: deshna,
  },
  {
    name: "Kanika",
    rank: "AIR 12",
    exam: "CMA Final, May 2024",
    quote: "Commerce Educators doesn't just teach — they build your confidence to face the toughest exams.",
    image: kanika,
  },
  {
    name: "Kunal",
    rank: "AIR 15",
    exam: "CMA Intermediate, Nov 2024",
    quote: "The online classes were just as good as offline. I could study from home without missing anything.",
    image: kunal,
  },
];
