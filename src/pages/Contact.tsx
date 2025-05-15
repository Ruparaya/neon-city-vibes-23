
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { Instagram, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    reason: "general",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show toast notification
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      reason: "general",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cafe-darker opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1525296335429-d7be0f1cadbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Cafe location"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
            <span className="text-gradient-cyan animate-text-shimmer">CONNECT</span> WITH US
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Drop by for coffee, join us online, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-bebas text-5xl text-white tracking-wider mb-6">
                FIND US. JOIN US.
              </h2>
              
              <div className="mb-8">
                <h3 className="font-bebas text-2xl text-cafe-cyan mb-3">ADDRESS</h3>
                <p className="text-gray-300 text-lg">
                  123 Urban Street<br />
                  Creative District<br />
                  City, ST 12345
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bebas text-2xl text-cafe-pink mb-3">HOURS</h3>
                <div className="text-gray-300">
                  <div className="flex justify-between mb-2">
                    <span>Monday - Thursday</span>
                    <span>8:00 AM - 1:00 AM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Friday</span>
                    <span>8:00 AM - 3:00 AM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Saturday</span>
                    <span>10:00 AM - 3:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bebas text-2xl text-cafe-amber mb-3">CONTACT</h3>
                <div className="text-gray-300 space-y-2">
                  <p>info@nightowlcafe.com</p>
                  <p>555-123-4567</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bebas text-2xl text-cafe-cyan mb-3">CONNECT</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-cafe-pink hover:bg-cafe-pink hover:bg-opacity-20">
                    <Instagram className="h-5 w-5 text-cafe-pink" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-cafe-cyan hover:bg-cafe-cyan hover:bg-opacity-20">
                    <Music className="h-5 w-5 text-cafe-cyan" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0374531503613!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580869b17e9c5%3A0x629060786f540ad5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645594241940!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  title="Location map"
                  className="grayscale contrast-125"
                ></iframe>
              </div>
              
              <div className="mt-6 bg-cafe-gray bg-opacity-20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-gray-300">Currently Open • Closes at 1:00 AM</p>
                </div>
                <div className="flex justify-between">
                  <Button className="bg-cafe-pink hover:bg-opacity-80">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="border-cafe-cyan text-cafe-cyan hover:bg-cafe-cyan hover:bg-opacity-10">
                    Save Location
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Form */}
      <section className="bg-cafe-darker py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="SEND US A MESSAGE" 
            subtitle="Questions? Comments? Event inquiries? We'd love to hear from you."
            glowColor="cyan"
          />

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-200">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cafe-gray bg-opacity-30 border-0 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cafe-cyan focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cafe-gray bg-opacity-30 border-0 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cafe-cyan focus:outline-none"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="reason" className="block mb-2 text-gray-200">Reason for Contact</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full bg-cafe-gray bg-opacity-30 border-0 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cafe-cyan focus:outline-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="reservation">Reservation</option>
                  <option value="event">Event Hosting</option>
                  <option value="feedback">Feedback</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-cafe-gray bg-opacity-30 border-0 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-cafe-cyan focus:outline-none"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="bg-cafe-cyan text-cafe-darker hover:bg-opacity-80 font-bebas tracking-wider text-lg w-full"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="bg-cafe-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="OUR SOUND" 
              subtitle="Get a taste of our cafe's vibe with our curated playlists."
              glowColor="pink"
            />
            
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWjGdmeTyeJ6" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allow="encrypted-media"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
