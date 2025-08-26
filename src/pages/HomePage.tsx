import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-travel.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Plan Your Perfect
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Create stunning itineraries with our intuitive drag-and-drop planner. 
            Discover amazing places and organize your dream trips effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
              <Link to="/dashboard">Start Planning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose TripCraft?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Smart Suggestions</h3>
              <p className="text-muted-foreground">
                Get personalized recommendations for places to visit, restaurants, and activities.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                <Calendar className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Visual Timeline</h3>
              <p className="text-muted-foreground">
                Organize your trip with an intuitive day-by-day timeline view.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Collaborate</h3>
              <p className="text-muted-foreground">
                Plan together with friends and family in real-time.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Instant Updates</h3>
              <p className="text-muted-foreground">
                Changes sync instantly across all your devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;