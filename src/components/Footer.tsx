
import { Instagram, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cafe-darker py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bebas text-3xl md:text-4xl tracking-wider mb-2">
              NIGHT<span className="text-cafe-pink">OWL</span>
            </h2>
            <p className="text-gray-400 max-w-xs">
              Coffee by day. Creative energy by night. 
              A space for night owls to connect.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon" className="text-cafe-pink hover:bg-cafe-pink hover:bg-opacity-20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cafe-cyan hover:bg-cafe-cyan hover:bg-opacity-20">
                <Music className="h-5 w-5" />
              </Button>
            </div>
            <Button 
              className="bg-cafe-pink hover:bg-opacity-80 text-white font-bebas tracking-wider" 
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              RESERVE A SEAT
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © 2025 Night Owl Café. All vibes reserved.
            </p>
          </div>
          
          <div>
            <ul className="flex flex-wrap space-x-4 md:space-x-6 justify-center text-sm text-gray-500">
              <li><Link to="/" className="hover:text-cafe-pink">Home</Link></li>
              <li><Link to="/about" className="hover:text-cafe-pink">About</Link></li>
              <li><Link to="/menu" className="hover:text-cafe-pink">Menu</Link></li>
              <li><Link to="/events" className="hover:text-cafe-pink">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-cafe-pink">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-cafe-pink">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
