import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import TripCard from "@/components/TripCard";
import tripService, { Trip } from "@/services/tripService";
import { useAuthState } from "@/hooks/useAuth";
import { toast } from "sonner";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuthState();

  useEffect(() => {
    if (isAuthenticated) {
      fetchTrips();
    } else {
      // Redirect to login if not authenticated
      window.location.href = '/login';
    }
  }, [isAuthenticated]);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const userTrips = await tripService.getTrips();
      setTrips(userTrips);
    } catch (error: any) {
      console.error('Error fetching trips:', error);
      toast.error('Failed to load trips');
    } finally {
      setLoading(false);
    }
  };

  const filteredTrips = trips.filter(trip => 
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Convert API trips to display format
  const displayTrips = filteredTrips.map(trip => ({
    id: trip.id,
    title: trip.title,
    destination: trip.destination,
    dates: `${new Date(trip.startDate).toLocaleDateString()} - ${new Date(trip.endDate).toLocaleDateString()}`,
    image: trip.image || "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop",
    activities: 0 // This would come from itinerary data
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center py-16">
            <div className="text-lg text-muted-foreground">Loading your trips...</div>
          </div>
        </div>
      </div>
    );
  }

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

        {displayTrips.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {searchQuery ? "No trips found" : "No trips yet"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery ? "Try adjusting your search terms" : "Create your first trip to get started"}
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Trip
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTrips.map((trip) => (
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