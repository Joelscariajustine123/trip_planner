import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4 text-foreground">Oops! Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="shadow-card">
          <a href="/">
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
