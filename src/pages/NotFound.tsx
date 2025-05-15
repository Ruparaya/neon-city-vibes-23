
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cafe-darker">
      <div className="text-center px-4">
        <h1 className="font-bebas text-8xl sm:text-9xl text-cafe-pink tracking-wider mb-4 neon-text">404</h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Looks like you've wandered into the wrong part of town.
        </p>
        <Button 
          className="bg-cafe-pink hover:bg-opacity-80 font-bebas tracking-wider text-lg"
          asChild
        >
          <Link to="/">BACK TO HOME</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
