
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "@/components/SectionTitle";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuItems = {
    coffee: [
      {
        name: "Midnight Espresso",
        price: "$4.50",
        description: "Double-shot espresso with a hint of vanilla and cinnamon",
        featured: true,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Electric Latte",
        price: "$5.50",
        description: "Our signature latte with house-made caramel and sea salt",
        featured: false,
      },
      {
        name: "Neon Cold Brew",
        price: "$5.00",
        description: "24-hour steeped cold brew with a splash of oat milk",
        featured: true,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mocha Madness",
        price: "$6.00",
        description: "Espresso, dark chocolate, steamed milk, and a hint of orange zest",
        featured: false,
      },
      {
        name: "Flat White",
        price: "$5.00",
        description: "Double-shot espresso with velvety microfoam",
        featured: false,
      },
      {
        name: "Pour Over",
        price: "$5.50",
        description: "Single-origin beans, carefully brewed to perfection",
        featured: false,
      },
    ],
    specialty: [
      {
        name: "Electric Blue",
        price: "$6.50",
        description: "Butterfly pea flower tea, lemon, and a splash of soda water",
        featured: true,
        image: "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Neon Matcha",
        price: "$6.00",
        description: "Ceremonial grade matcha with oat milk and honey",
        featured: true,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c504d37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Twilight Chai",
        price: "$5.50",
        description: "House-made masala chai with a kick of cinnamon and star anise",
        featured: false,
      },
      {
        name: "The Dreamer",
        price: "$7.00",
        description: "Lavender and chamomile tea with honey and steamed oat milk",
        featured: false,
      },
    ],
    food: [
      {
        name: "Midnight Toast",
        price: "$8.50",
        description: "Sourdough toast with avocado, chili flakes, and microgreens",
        featured: true,
        image: "https://images.unsplash.com/photo-1588137378633-dbd4ede285be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Electric Bagel",
        price: "$9.00",
        description: "Everything bagel with cream cheese, lox, and capers",
        featured: false,
      },
      {
        name: "Vegan Power Bowl",
        price: "$11.00",
        description: "Quinoa, roasted vegetables, tahini, and toasted seeds",
        featured: true,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Night Owl Pastry",
        price: "$5.00",
        description: "Flaky pastry with dark chocolate and espresso filling",
        featured: false,
      },
    ],
    latenight: [
      {
        name: "Insomniac Special",
        price: "$7.50",
        description: "Triple-shot espresso with cold foam and caramel",
        featured: true,
        image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "The 2AM Toastie",
        price: "$9.00",
        description: "Grilled cheese with three cheeses and truffle oil",
        featured: false,
      },
      {
        name: "Lunar Cookies",
        price: "$4.00",
        description: "Dark chocolate and sea salt cookies",
        featured: true,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cafe-darker opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Coffee and food"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
            OUR <span className="text-gradient-cyan animate-text-shimmer">MENU</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Fuel your creativity with our carefully crafted offerings.
          </p>
        </div>
      </section>

      {/* Menu Tabs Section */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="coffee" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-cafe-gray bg-opacity-30 p-1">
                <TabsTrigger 
                  value="coffee" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  COFFEE
                </TabsTrigger>
                <TabsTrigger 
                  value="specialty" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  SPECIALTY
                </TabsTrigger>
                <TabsTrigger 
                  value="food" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  FOOD
                </TabsTrigger>
                <TabsTrigger 
                  value="latenight" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  LATE NIGHT
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Featured Items with Images */}
                  <div className="space-y-8">
                    {items.filter(item => item.featured).map((item, index) => (
                      <div key={index} className="group relative rounded-lg overflow-hidden">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-cafe-darker via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                          <div className="flex justify-between items-center w-full">
                            <h3 className="font-bebas text-3xl text-white tracking-wide">{item.name}</h3>
                            <span className="font-bebas text-xl text-cafe-pink">{item.price}</span>
                          </div>
                          <p className="text-gray-300 mt-2">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Standard Menu Items */}
                  <div className="space-y-6 mt-4 lg:mt-0">
                    <h3 className="font-bebas text-3xl text-cafe-pink tracking-wider mb-6">MORE OPTIONS</h3>
                    <div className="space-y-8">
                      {items.filter(item => !item.featured).map((item, index) => (
                        <div 
                          key={index}
                          className="border-b border-cafe-gray border-opacity-30 pb-6 last:border-0"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bebas text-2xl text-white tracking-wide">{item.name}</h4>
                            <span className="font-bebas text-xl text-cafe-pink">{item.price}</span>
                          </div>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Special Diets */}
      <section className="bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl text-white tracking-wider mb-6">
              SPECIAL DIETS & ALLERGIES
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're committed to accommodating all dietary needs. Our menu includes vegan, 
              gluten-free, and dairy-free options. Just ask our baristas for recommendations 
              or modifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-cafe-dark px-4 py-2 rounded-full text-cafe-cyan font-medium">Vegan Options</div>
              <div className="bg-cafe-dark px-4 py-2 rounded-full text-cafe-pink font-medium">Gluten-Free</div>
              <div className="bg-cafe-dark px-4 py-2 rounded-full text-cafe-amber font-medium">Dairy-Free</div>
              <div className="bg-cafe-dark px-4 py-2 rounded-full text-cafe-cyan font-medium">Nut-Free</div>
              <div className="bg-cafe-dark px-4 py-2 rounded-full text-cafe-pink font-medium">Low Sugar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <div className="bg-cafe-gray bg-opacity-30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-cafe-darker opacity-60 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Catering spread" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wider mb-6 neon-text-amber">
                  CATERING & EVENTS
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Bring the Night Owl experience to your next event. From corporate meetings 
                  to art openings, our catering team delivers exceptional coffee and food.
                </p>
                <Button 
                  className="bg-cafe-amber text-cafe-darker hover:bg-opacity-80 font-bebas tracking-wider text-lg"
                  onClick={() => window.open("mailto:catering@nightowlcafe.com", "_blank")}
                >
                  GET IN TOUCH
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
