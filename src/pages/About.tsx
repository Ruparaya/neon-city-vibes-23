
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & Head Barista",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Ex-musician who found a second passion in coffee. Started Night Owl after hosting underground coffee tastings in his apartment.",
    },
    {
      name: "Mia Zhang",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Visual artist and photographer who curates our space, designs our menus, and makes sure our aesthetic stays true to our ethos.",
    },
    {
      name: "Jamal Washington",
      role: "Music Curator & Barista",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "DJ by night, coffee enthusiast by day. Manages our sound system and curates the playlists that set our vibe.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cafe-darker opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1601759226705-56f5ed9bdcf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Coffee beans and equipment"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
            OUR <span className="text-gradient-pink animate-text-shimmer">STORY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            We're not your average café. We're a collective of creators, dreamers, and night owls.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-bebas text-4xl text-white tracking-wider mb-6">
                BORN FROM LATE NIGHT <span className="text-cafe-cyan">CONVERSATIONS</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Night Owl began in 2019 as a series of underground coffee pop-ups in warehouses and 
                art studios around the city. We'd bring our equipment, play some vinyl, and serve 
                exceptional coffee until sunrise.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                What started as a passion project quickly developed a following. People weren't just 
                coming for the coffee – they were coming for the community, the music, and the creative 
                energy that happened when night owls gathered.
              </p>
              <p className="text-gray-300 text-lg">
                In 2021, we found our permanent nest. A forgotten corner space with high ceilings and 
                big windows that we transformed into the Night Owl you know today.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Coffee shop interior"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden border-4 border-cafe-dark">
                  <img 
                    src="https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Night coffee event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="OUR VALUES" 
            align="left"
            glowColor="cyan"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cafe-dark bg-opacity-60 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bebas text-2xl text-cafe-cyan tracking-wider mb-4">CREATIVITY FIRST</h3>
              <p className="text-gray-300">
                We believe in fostering creativity in all its forms. Our space is designed to 
                inspire, challenge, and nurture the creative spirit.
              </p>
            </div>
            <div className="bg-cafe-dark bg-opacity-60 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bebas text-2xl text-cafe-pink tracking-wider mb-4">COMMUNITY FOCUSED</h3>
              <p className="text-gray-300">
                We're more than customers and baristas – we're a community of like-minded 
                individuals who believe in the power of connection.
              </p>
            </div>
            <div className="bg-cafe-dark bg-opacity-60 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bebas text-2xl text-cafe-amber tracking-wider mb-4">QUALITY OBSESSED</h3>
              <p className="text-gray-300">
                From our ethically-sourced beans to our meticulously crafted drinks, 
                we never compromise on quality.
              </p>
            </div>
            <div className="bg-cafe-dark bg-opacity-60 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bebas text-2xl text-cafe-amber tracking-wider mb-4">NIGHT OWL MENTALITY</h3>
              <p className="text-gray-300">
                We embrace the magic of late nights, the quiet productivity of after-hours, 
                and the inspiration that often strikes when the rest of the world is asleep.
              </p>
            </div>
            <div className="bg-cafe-dark bg-opacity-60 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bebas text-2xl text-cafe-cyan tracking-wider mb-4">SUSTAINABILITY MINDED</h3>
              <p className="text-gray-300">
                We minimize our environmental impact through thoughtful practices, 
                from compostable packaging to energy-efficient operations.
              </p>
            </div>
            <div className="bg-cafe-dark bg-opacity-60 p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bebas text-2xl text-cafe-pink tracking-wider mb-4">INCLUSIVITY DRIVEN</h3>
              <p className="text-gray-300">
                Everyone is welcome at Night Owl. We strive to create a safe, accepting 
                space for all people, regardless of background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="THE TEAM" 
            subtitle="Meet the night owls who make it all happen."
            glowColor="pink"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-cafe-darker rounded-lg overflow-hidden group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cafe-darker to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bebas text-2xl text-white tracking-wide">{member.name}</h3>
                  <p className="text-cafe-pink font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <div className="bg-cafe-gray bg-opacity-30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-cafe-darker opacity-60 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Cafe night atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wider mb-6 neon-text">
                  JOIN THE NIGHT OWLS
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Whether you're looking for a creative space to work, a place to connect with others, 
                  or simply the best coffee in town – we're waiting for you.
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
                    FOLLOW US
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

export default About;
