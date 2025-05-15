
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Instagram } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images with categories
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511933617088-859b414a42a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Cafe at night",
      category: "space"
    },
    {
      src: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Cafe interior",
      category: "space"
    },
    {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Late night coffee",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Jazz performance",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee art",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Latte art",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Open mic night",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1563459802257-2a97df940f11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee preparation",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Working at cafe",
      category: "people"
    },
    {
      src: "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee shop corner",
      category: "space"
    },
    {
      src: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Night gathering",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Team meeting",
      category: "people"
    },
    {
      src: "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Barista pouring coffee",
      category: "drinks"
    },
    {
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Friends at cafe",
      category: "people"
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee shop entrance",
      category: "space"
    },
  ];

  const filterImages = (category: string) => {
    if (category === "all") return galleryImages;
    return galleryImages.filter(image => image.category === category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cafe-darker opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Gallery of coffee moments"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
            OUR <span className="text-gradient-pink animate-text-shimmer">GALLERY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Visual moments from our space, our people, and our nightlife.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-cafe-gray bg-opacity-30 p-1">
                <TabsTrigger 
                  value="all" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  ALL
                </TabsTrigger>
                <TabsTrigger 
                  value="space" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  OUR SPACE
                </TabsTrigger>
                <TabsTrigger 
                  value="events" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  EVENTS
                </TabsTrigger>
                <TabsTrigger 
                  value="drinks" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  DRINKS
                </TabsTrigger>
                <TabsTrigger 
                  value="people" 
                  className="font-bebas text-lg tracking-wider data-[state=active]:bg-cafe-pink data-[state=active]:text-white"
                >
                  PEOPLE
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {["space", "events", "drinks", "people"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filterImages(category).map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="FOLLOW US ON INSTAGRAM" 
            subtitle="Tag your photos with #NightOwlCafe for a chance to be featured."
            glowColor="pink"
          />

          <div className="flex justify-center">
            <Button 
              className="bg-cafe-pink hover:bg-opacity-80 font-bebas tracking-wider text-lg flex items-center gap-2"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <Instagram className="h-5 w-5" />
              @NIGHTOWL
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-cafe-darker border-cafe-gray max-w-4xl p-0 overflow-hidden">
          <div className="relative pb-[66.67%]">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
