import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TripCardProps {
  trip: {
    id: string;
    title: string;
    destination: string;
    dates: string;
    image: string;
    activities: number;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.destination}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-smooth">
          {trip.title}
        </h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{trip.destination}</span>
        </div>
        <div className="flex items-center text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{trip.dates}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {trip.activities} activities planned
        </div>
      </div>
    </Card>
  );
};

export default TripCard;