import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
          <MapPin className="h-6 w-6" />
          <span>TripCraft</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-smooth">
            My Trips
          </Link>
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Sign Up</Button>
        </div>
        
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;