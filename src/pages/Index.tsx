
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const featuredDrinksRef = useRef<HTMLDivElement>(null);

  // Drink selection state
  const [activeDrink, setActiveDrink] = useState(0);
  const featuredDrinks = [
    {
      name: "Midnight Espresso",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Double-shot espresso with a hint of vanilla and cinnamon",
    },
    {
      name: "Electric Blue",
      image: "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Butterfly pea flower tea, lemon, and a splash of soda water",
    },
    {
      name: "Neon Matcha",
      image: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Ceremonial grade matcha with oat milk and honey",
    },
  ];

  // Events
  const upcomingEvents = [
    {
      title: "Live Jazz Night",
      date: "May 18",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "music"
    },
    {
      title: "Poetry Slam",
      date: "May 22",
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "art"
    },
    {
      title: "DJ Sessions",
      date: "May 25",
      image: "https://images.unsplash.com/photo-1571266028546-6d65b873f728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "music"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFeatured = () => {
    if (featuredDrinksRef.current) {
      featuredDrinksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cafe-darker opacity-60"
            style={{ backgroundImage: "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.4) 100%)" }}
          ></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="https://images.unsplash.com/photo-1511933617088-859b414a42a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          >
            <source src="https://player.vimeo.com/external/492456168.hd.mp4?s=ad68e6621a2e24fac153fb77b5aca6ea331af87e&profile_id=175" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div 
          className="relative z-10 text-center px-4 max-w-5xl" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl text-white tracking-wider mb-4 animate-fade-in">
            SIP. <span className="text-gradient-pink animate-text-shimmer">CREATE.</span> REPEAT.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
            Where coffee meets creativity. A space for night owls to connect, create, and caffeinate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <Button 
              className="bg-cafe-pink hover:bg-opacity-80 font-bebas tracking-wider text-lg px-8 py-6"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              RESERVE A SEAT
            </Button>
            <Button 
              variant="outline"
              className="border-cafe-cyan text-cafe-cyan hover:bg-cafe-cyan hover:bg-opacity-10 font-bebas tracking-wider text-lg px-8 py-6"
              asChild
            >
              <Link to="/menu">EXPLORE MENU</Link>
            </Button>
          </div>
        </div>

        <button 
          onClick={scrollToFeatured}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" 
          aria-label="Scroll down"
        >
          <ArrowDown className="h-10 w-10 text-white opacity-75 hover:opacity-100 transition-opacity" />
        </button>
      </section>

      {/* Featured Drinks */}
      <section ref={featuredDrinksRef} className="bg-cafe-dark py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="FEATURED DRINKS" 
            subtitle="Bold flavors for the bold creatives. Try our signature drinks that keep the night owls up."
            glowColor="cyan"
          />

          <div className="mt-12 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                {featuredDrinks.map((drink, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeDrink === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img 
                      src={drink.image} 
                      alt={drink.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cafe-darker to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-bebas text-3xl text-white neon-text-cyan">{drink.name}</h3>
                      <p className="text-gray-300 mt-2 max-w-xs">{drink.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 flex flex-col">
              <p className="text-xl text-gray-300 mb-8">
                Our baristas are artists in their own right. Each drink is crafted with precision
                and passion, designed to fuel your creative energy.
              </p>
              
              <div className="flex flex-col space-y-4">
                {featuredDrinks.map((drink, index) => (
                  <button
                    key={index}
                    className={`text-left p-4 rounded-lg transition-all ${
                      activeDrink === index 
                        ? "bg-cafe-cyan bg-opacity-10 border border-cafe-cyan" 
                        : "hover:bg-white hover:bg-opacity-5"
                    }`}
                    onClick={() => setActiveDrink(index)}
                  >
                    <h3 className={`font-bebas text-2xl tracking-wide ${
                      activeDrink === index ? "text-cafe-cyan" : "text-white"
                    }`}>{drink.name}</h3>
                    <p className={`mt-1 ${
                      activeDrink === index ? "text-gray-200" : "text-gray-400"
                    }`}>{drink.description}</p>
                  </button>
                ))}
              </div>
              
              <div className="mt-auto pt-8">
                <Button 
                  variant="outline"
                  className="border-cafe-cyan text-cafe-cyan hover:bg-cafe-cyan hover:bg-opacity-10 font-bebas tracking-wider"
                  asChild
                >
                  <Link to="/menu">VIEW FULL MENU</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-cafe-darker py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-bebas text-5xl text-white tracking-wider mb-6">
                MORE THAN JUST <span className="text-gradient-pink animate-text-shimmer">COFFEE</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Night Owl isn't just a café – it's a vibe, a mood, and a community.
                We're a space where creativity flows as freely as our coffee.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Founded by a collective of artists, musicians, and caffeine addicts,
                we created the kind of place we always wanted to hang out in —
                open late, with great coffee, good music, and even better company.
              </p>
              <Button 
                className="bg-cafe-amber text-cafe-darker hover:bg-opacity-80 font-bebas tracking-wider text-lg"
                asChild
              >
                <Link to="/about">OUR STORY</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Cafe interior" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1563459802257-2a97df940f11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Coffee art" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg -translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="People enjoying cafe" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Latte art" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-cafe-dark py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="UPCOMING EVENTS" 
            subtitle="More than a café, we're a venue for creativity and connection. Check out what's happening."
            glowColor="amber"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="group bg-cafe-gray bg-opacity-20 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-cafe-pink px-3 py-1 rounded font-bebas tracking-wider text-sm">
                    {event.date}
                  </div>
                  <div className="absolute top-4 left-4 bg-cafe-darker bg-opacity-70 backdrop-blur-sm px-3 py-1 rounded font-bebas tracking-wider text-xs uppercase">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-cafe-amber transition-colors">
                    {event.title}
                  </h3>
                  <Button 
                    variant="ghost"
                    className="mt-4 px-0 text-cafe-amber hover:text-cafe-amber hover:bg-transparent hover:underline underline-offset-4 font-medium p-0"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-cafe-amber text-cafe-darker hover:bg-opacity-80 font-bebas tracking-wider text-lg"
              asChild
            >
              <Link to="/events">ALL EVENTS</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="bg-cafe-darker py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="OUR GALLERY" 
            subtitle="Glimpses of our space, our people, and our vibes."
            glowColor="pink"
          />

          <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="shrink-0 w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden"
              >
                <img 
                  src={`https://source.unsplash.com/random/600x600?coffee,cafe,night,music&sig=${index}`}
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-cafe-pink hover:bg-opacity-80 font-bebas tracking-wider text-lg"
              asChild
            >
              <Link to="/gallery">VIEW GALLERY</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Spotify Section */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-bebas text-5xl text-white tracking-wider mb-6">
                OUR <span className="text-gradient-cyan animate-text-shimmer">SOUNDTRACK</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Music is in our DNA. We curate playlists that set the perfect mood for
                creating, connecting, or simply vibing with a cup of coffee.
              </p>
              <Button 
                className="bg-cafe-cyan text-cafe-darker hover:bg-opacity-80 font-bebas tracking-wider text-lg"
                onClick={() => window.open("https://open.spotify.com", "_blank")}
              >
                FOLLOW ON SPOTIFY
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTmY8erWK5UW" 
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allow="encrypted-media"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="relative bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <div className="bg-cafe-gray bg-opacity-30 rounded-2xl p-8 md:p-12 backdrop-blur relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-cafe-darker opacity-60 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Cafe background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wider mb-6 neon-text">
                  FIND US. JOIN US.
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  We're open late. Really late. Come find us in the heart of the city,
                  where the night owls gather.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-cafe-pink hover:bg-opacity-80 font-bebas tracking-wider text-lg"
                    asChild
                  >
                    <Link to="/contact">FIND US</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:bg-opacity-10 font-bebas tracking-wider text-lg"
                    onClick={() => window.open("https://instagram.com", "_blank")}
                  >
                    FOLLOW @NIGHTOWL
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
