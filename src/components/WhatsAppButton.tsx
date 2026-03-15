import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello!%20I%20am%20interested%20in%20CMA/CA%20coaching%20classes."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-success-foreground" />
    </a>
  );
};

export default WhatsAppButton;
