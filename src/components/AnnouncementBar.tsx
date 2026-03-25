import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnnouncementBar = () => {
  return (
    <div className="w-full gradient-hero shadow-md animate-fade-in">
      <div className="container-main flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3">
        <p className="text-primary-foreground font-bold text-base md:text-lg text-center">
          🎓 Admissions Open for 2025–26 Batch!
        </p>
        <Button variant="gold" size="sm" asChild>
          <Link to="/contact">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
