import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import TripCard from "@/components/TripCard";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - in real app this would come from API
  const mockTrips = [
    {
      id: "1",
      title: "European Adventure",
      destination: "Paris, Rome, Barcelona",
      dates: "June 15-30, 2024",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop",
      activities: 24
    },
    {
      id: "2", 
      title: "Tropical Paradise",
      destination: "Bali, Indonesia",
      dates: "August 10-20, 2024",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=300&fit=crop",
      activities: 18
    },
    {
      id: "3",
      title: "Mountain Retreat",
      destination: "Swiss Alps",
      dates: "December 5-12, 2024",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      activities: 12
    }
  ];

  const filteredTrips = mockTrips.filter(trip => 
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">My Trips</h1>
            <p className="text-muted-foreground">Plan, organize, and manage your adventures</p>
          </div>
          <Button className="mt-4 md:mt-0 shadow-card">
            <Plus className="h-4 w-4 mr-2" />
            Create New Trip
          </Button>
        </div>

        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search trips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {filteredTrips.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No trips yet</h3>
            <p className="text-muted-foreground mb-6">Create your first trip to get started</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Trip
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map((trip) => (
              <Link key={trip.id} to={`/trip/${trip.id}`}>
                <TripCard trip={trip} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;