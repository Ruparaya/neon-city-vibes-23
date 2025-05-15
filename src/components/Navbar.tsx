
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/menu", label: "MENU" },
    { path: "/events", label: "EVENTS" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT" },
  ];

  const activeClass = "text-cafe-pink neon-text";
  const inactiveClass = "hover:text-cafe-pink transition-colors";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-cafe-darker bg-opacity-90 backdrop-blur py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <NavLink to="/" className="font-bebas text-3xl tracking-wider neon-text">
            NIGHT<span className="text-cafe-pink">OWL</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-bebas text-lg tracking-wider transition-all ${isActive ? activeClass : inactiveClass}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button 
              className="bg-cafe-pink hover:bg-opacity-80 text-white font-bebas tracking-wider ml-2 animate-pulse-glow"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              RESERVE A SEAT
            </Button>
          </nav>
          
          {/* Music toggle - visible on all screens */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="mr-2 text-cafe-cyan hover:bg-cafe-gray hover:text-cafe-cyan neon-text-cyan"
              aria-label="Toggle music"
            >
              <Music className="h-5 w-5" />
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-cafe-darker bg-opacity-95 z-40 md:hidden backdrop-blur-sm transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `font-bebas text-2xl tracking-wider transition-all ${isActive ? activeClass : inactiveClass}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button 
            className="bg-cafe-pink hover:bg-opacity-80 text-white font-bebas tracking-wider mt-4"
            onClick={() => {
              window.open("https://instagram.com", "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            RESERVE A SEAT
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
