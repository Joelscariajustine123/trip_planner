import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

const PlannerPage = () => {
  const { tripId } = useParams();
  const [selectedDay, setSelectedDay] = useState(1);

  // Mock data - in real app this would come from API
  const mockTrip = {
    id: tripId,
    title: "European Adventure",
    destination: "Paris, Rome, Barcelona",
    dates: "June 15-30, 2024",
    totalDays: 5
  };

  const mockSuggestions = [
    {
      id: "1",
      name: "Eiffel Tower",
      type: "Attraction",
      rating: 4.8,
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&h=200&fit=crop"
    },
    {
      id: "2", 
      name: "Le Comptoir du Relais",
      type: "Restaurant",
      rating: 4.5,
      duration: "1.5 hours",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
    },
    {
      id: "3",
      name: "Louvre Museum",
      type: "Museum",
      rating: 4.7,
      duration: "3 hours", 
      image: "https://images.unsplash.com/photo-1566479179817-0e6b0e3b5e37?w=300&h=200&fit=crop"
    }
  ];

  const mockDayActivities = {
    1: [
      { id: "a1", name: "Eiffel Tower", time: "09:00", type: "Attraction" },
      { id: "a2", name: "Seine River Cruise", time: "14:00", type: "Activity" }
    ],
    2: [],
    3: [],
    4: [],
    5: []
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <div className="border-b border-border bg-gradient-subtle">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center mb-4">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Trips
              </Button>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{mockTrip.title}</h1>
            <p className="text-muted-foreground">{mockTrip.destination} • {mockTrip.dates}</p>
          </div>
        </div>

        <div className="flex h-[calc(100vh-140px)]">
          {/* Suggestions Panel */}
          <div className="w-80 border-r border-border bg-card overflow-y-auto">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-card-foreground">Suggestions</h2>
              <div className="space-y-4">
                {mockSuggestions.map((suggestion) => (
                  <Card key={suggestion.id} className="p-4 cursor-pointer hover:shadow-card transition-all duration-200 group">
                    <div className="flex space-x-3">
                      <img 
                        src={suggestion.image} 
                        alt={suggestion.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm group-hover:text-primary transition-smooth">
                          {suggestion.name}
                        </h3>
                        <div className="flex items-center mt-1 space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {suggestion.type}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                            {suggestion.rating}
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {suggestion.duration}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex h-full">
              {Array.from({ length: mockTrip.totalDays }, (_, index) => {
                const dayNumber = index + 1;
                const activities = mockDayActivities[dayNumber] || [];
                
                return (
                  <div 
                    key={dayNumber}
                    className={`min-w-80 border-r border-border p-6 ${
                      selectedDay === dayNumber ? 'bg-accent/20' : 'bg-background'
                    } cursor-pointer hover:bg-accent/10 transition-colors`}
                    onClick={() => setSelectedDay(dayNumber)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-foreground">
                        Day {dayNumber}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {activities.length} activities
                      </div>
                    </div>
                    
                    <div className="space-y-3 min-h-96">
                      {activities.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                          <MapPin className="h-8 w-8 mx-auto mb-3 opacity-50" />
                          <p className="text-sm">Drag activities here</p>
                        </div>
                      ) : (
                        activities.map((activity) => (
                          <Card key={activity.id} className="p-3 bg-card shadow-card">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-sm text-card-foreground">
                                  {activity.name}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {activity.time} • {activity.type}
                                </p>
                              </div>
                            </div>
                          </Card>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerPage;