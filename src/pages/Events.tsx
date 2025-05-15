
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = {
    upcoming: [
      {
        title: "Live Jazz Night",
        date: "May 18",
        time: "8:00 PM - 11:00 PM",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Join us for an intimate evening of live jazz with local artists. Enjoy our special cocktail menu while you listen.",
        category: "music",
        ticketed: true,
      },
      {
        title: "Poetry Slam",
        date: "May 22",
        time: "7:30 PM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Express yourself at our monthly poetry slam. Sign up starts at 7:00 PM. All styles welcome.",
        category: "art",
        ticketed: false,
      },
      {
        title: "DJ Sessions: Electronic Night",
        date: "May 25",
        time: "9:00 PM - 1:00 AM",
        image: "https://images.unsplash.com/photo-1571266028546-6d65b873f728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Local DJ Midnight Electric brings ambient electronic beats to create the perfect late-night vibe.",
        category: "music",
        ticketed: true,
      },
      {
        title: "Latte Art Workshop",
        date: "May 29",
        time: "2:00 PM - 4:00 PM",
        image: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Learn the basics of latte art from our head barista. Limited spots available.",
        category: "workshop",
        ticketed: true,
      },
      {
        title: "Local Artists Showcase",
        date: "June 2",
        time: "6:00 PM - 9:00 PM",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Featuring works from emerging local artists across various mediums. Meet the artists and purchase original pieces.",
        category: "art",
        ticketed: false,
      },
      {
        title: "Vinyl Night",
        date: "June 5",
        time: "7:00 PM - 11:00 PM",
        image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Bring your favorite vinyl records and share your music with fellow enthusiasts. Special menu available.",
        category: "music",
        ticketed: false,
      },
    ],
    recurring: [
      {
        title: "Open Mic Night",
        day: "Every Tuesday",
        time: "7:00 PM - 10:00 PM",
        image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Our weekly open mic night for musicians, poets, comedians, and performers of all kinds. Sign up starts at 6:30 PM.",
        category: "community",
      },
      {
        title: "Creative Writing Group",
        day: "Every Other Thursday",
        time: "6:30 PM - 8:30 PM",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Join fellow writers for prompts, feedback, and creative community. All levels welcome.",
        category: "workshop",
      },
      {
        title: "Sunday Jazz Brunch",
        day: "Every Sunday",
        time: "11:00 AM - 2:00 PM",
        image: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Live jazz accompanies our special brunch menu. Reservations recommended.",
        category: "music",
      },
      {
        title: "Late Night Study Hours",
        day: "Monday - Thursday",
        time: "9:00 PM - 1:00 AM",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Extended quiet hours with free coffee refills for students. Student ID required.",
        category: "community",
      },
    ],
  };

  const filterEvents = (category: string) => {
    if (category === "all") return events.upcoming;
    return events.upcoming.filter(event => event.category === category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cafe-darker opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Live music event"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
            <span className="text-gradient-amber animate-text-shimmer">EVENTS</span> & HAPPENINGS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Music, art, community, and creativity. There's always something happening at Night Owl.
          </p>
        </div>
      </section>

      {/* Events Tabs Section */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-cafe-gray bg-opacity-30 p-1">
                <TabsTrigger 
                  value="upcoming" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-amber data-[state=active]:text-cafe-darker"
                >
                  UPCOMING
                </TabsTrigger>
                <TabsTrigger 
                  value="recurring" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-amber data-[state=active]:text-cafe-darker"
                >
                  RECURRING
                </TabsTrigger>
                <TabsTrigger 
                  value="calendar" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-amber data-[state=active]:text-cafe-darker"
                >
                  CALENDAR
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="bg-cafe-gray bg-opacity-30 p-6 rounded-lg sticky top-24">
                    <h3 className="font-bebas text-2xl text-white mb-4">CATEGORIES</h3>
                    <div className="space-y-3">
                      <Button 
                        variant="ghost"
                        className="w-full justify-start font-medium hover:bg-cafe-amber hover:bg-opacity-10 hover:text-cafe-amber"
                      >
                        All Events
                      </Button>
                      <Button 
                        variant="ghost"
                        className="w-full justify-start font-medium hover:bg-cafe-amber hover:bg-opacity-10 hover:text-cafe-amber"
                      >
                        Music
                      </Button>
                      <Button 
                        variant="ghost"
                        className="w-full justify-start font-medium hover:bg-cafe-amber hover:bg-opacity-10 hover:text-cafe-amber"
                      >
                        Art
                      </Button>
                      <Button 
                        variant="ghost"
                        className="w-full justify-start font-medium hover:bg-cafe-amber hover:bg-opacity-10 hover:text-cafe-amber"
                      >
                        Workshop
                      </Button>
                      <Button 
                        variant="ghost"
                        className="w-full justify-start font-medium hover:bg-cafe-amber hover:bg-opacity-10 hover:text-cafe-amber"
                      >
                        Community
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {events.upcoming.map((event, index) => (
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
                          {event.ticketed && (
                            <div className="absolute bottom-4 right-4 bg-cafe-amber text-cafe-darker px-3 py-1 rounded font-bebas tracking-wider text-xs">
                              TICKETS REQUIRED
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-cafe-amber transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-cafe-pink mt-1">{event.time}</p>
                          <p className="text-gray-400 mt-3 mb-4">{event.description}</p>
                          <Button 
                            className="bg-cafe-amber text-cafe-darker hover:bg-opacity-80 font-medium"
                          >
                            {event.ticketed ? 'Get Tickets' : 'Learn More'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recurring" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.recurring.map((event, index) => (
                  <div 
                    key={index}
                    className="flex bg-cafe-gray bg-opacity-20 rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-1/3 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <div className="bg-cafe-darker inline-block px-3 py-1 rounded-full text-xs font-medium text-cafe-pink mb-3">
                        {event.category}
                      </div>
                      <h3 className="font-bebas text-2xl tracking-wide text-white">{event.title}</h3>
                      <p className="text-cafe-amber mt-1 font-medium">{event.day} • {event.time}</p>
                      <p className="text-gray-400 mt-3 text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="bg-cafe-gray bg-opacity-20 p-6 rounded-lg">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="bg-cafe-dark border-cafe-gray border border-opacity-20 rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-cafe-gray bg-opacity-20 p-6 rounded-lg h-full">
                    <h3 className="font-bebas text-3xl text-white mb-4">
                      {date ? new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date) : 'Select a date'}
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="bg-cafe-darker p-4 rounded-lg">
                        <div className="text-cafe-pink font-medium mb-1">8:00 PM - 11:00 PM</div>
                        <h4 className="font-bebas text-xl text-white">Live Jazz Night</h4>
                        <p className="text-gray-400 mt-2 text-sm">Join us for an intimate evening of live jazz with local artists.</p>
                      </div>
                      <p className="text-gray-400">
                        To see all events for this date, please click "Learn More" below.
                      </p>
                      <Button className="bg-cafe-amber text-cafe-darker hover:bg-opacity-80 font-medium w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Host Your Event */}
      <section className="bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-bebas text-5xl text-white tracking-wider mb-6">
                HOST YOUR <span className="text-gradient-pink animate-text-shimmer">EVENT</span> WITH US
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Looking for a unique venue for your next gathering? Night Owl offers a creative, 
                atmospheric space for private events, performances, workshops, and more.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our space can accommodate up to 75 people and includes full access to our 
                sound system, lighting, and projector. Catering packages available.
              </p>
              <Button 
                className="bg-cafe-pink hover:bg-opacity-80 font-bebas tracking-wider text-lg"
                onClick={() => window.open("mailto:events@nightowlcafe.com", "_blank")}
              >
                INQUIRE NOW
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Event space" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Private event" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg -translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Performance" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Workshop setup" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl text-white tracking-wider mb-6 neon-text-cyan">
              NEVER MISS AN EVENT
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to our newsletter to stay updated on upcoming events, special performances, 
              and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-cafe-gray bg-opacity-30 border-0 text-white placeholder-gray-500 rounded-md px-4 py-2 flex-1 focus:ring-2 focus:ring-cafe-cyan focus:outline-none"
                required
              />
              <Button className="bg-cafe-cyan text-cafe-darker hover:bg-opacity-80 font-bebas tracking-wider">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
