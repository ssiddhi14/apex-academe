/**
 * RESULTS PAGE — STUDENT TOPPERS
 * ================================
 * To add a student photo:
 * 1. Add the image to src/assets/toppers/ folder (e.g., anita-desai.jpg)
 * 2. Import it below
 * 3. Set the `image` field for the corresponding topper
 *
 * If `image` is undefined, the student's initials will be shown as fallback.
 * Recommended image size: 200x200px (square)
 */

// Example imports (uncomment and update when adding real photos):
// import anitaDesai from "@/assets/toppers/anita-desai.jpg";
// import rohitPatel from "@/assets/toppers/rohit-patel.jpg";

export interface Topper {
  name: string;
  rank: string;
  exam: string;
  quote: string;
  /** Optional student photo. Falls back to initials if not provided. */
  image?: string;
}

export const toppers: Topper[] = [
  { name: "Anita Desai", rank: "AIR 1", exam: "CMA Intermediate, Dec 2024", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
  { name: "Rohit Patel", rank: "AIR 2", exam: "CMA Final, June 2024", quote: "The mock tests and personalized mentoring helped me identify my weak areas and convert them into strengths.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
  { name: "Priya Sharma", rank: "AIR 3", exam: "CMA Final, Dec 2024", quote: "The faculty at Commerce Educators are truly exceptional. Their passion for teaching is contagious.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
  { name: "Arjun Nair", rank: "AIR 5", exam: "CMA Foundation, Dec 2024", quote: "The comprehensive study material and regular tests kept me on track throughout my preparation.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
  { name: "Sneha Reddy", rank: "AIR 7", exam: "CMA Foundation, June 2024", quote: "I joined Commerce Educators as an average student and came out as a topper. The transformation was incredible.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
  { name: "Karan Malhotra", rank: "AIR 10", exam: "CMA Intermediate, June 2024", quote: "Best coaching institute for CMA preparation. The doubt-solving sessions were incredibly helpful.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
  { name: "Meera Iyer", rank: "AIR 12", exam: "CMA Final, May 2024", quote: "Commerce Educators doesn't just teach — they build your confidence to face the toughest exams.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" },
  { name: "Rahul Verma", rank: "AIR 15", exam: "CMA Intermediate, Nov 2024", quote: "The online classes were just as good as offline. I could study from home without missing anything.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" },
];
