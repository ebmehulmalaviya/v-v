import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col gap-4">
      {isVisible && (
        <>
          {/* Scroll to Top Button */}
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="bg-primary/80 hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
          </div>

         
        </>
      )}
       {/* WhatsApp Button */}
       <a
            href="https://wa.me/9428865629" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 flex h-10 w-10 items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
    </div>
  );
}
