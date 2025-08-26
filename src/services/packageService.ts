import apiClient from './api';

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in days
  destinations: string[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
  rating: number;
  reviewsCount: number;
  category: string;
  difficulty?: 'easy' | 'moderate' | 'challenging';
  createdAt: string;
  updatedAt: string;
}

export interface PackageFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minDuration?: number;
  maxDuration?: number;
  destination?: string;
  difficulty?: string;
}

class PackageService {
  async getPackages(filters?: PackageFilters): Promise<Package[]> {
    const params = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    
    const response = await apiClient.get(`/packages?${params.toString()}`);
    return response.data;
  }

  async getPackageById(packageId: string): Promise<Package> {
    const response = await apiClient.get(`/packages/${packageId}`);
    return response.data;
  }

  async getFeaturedPackages(): Promise<Package[]> {
    const response = await apiClient.get('/packages/featured');
    return response.data;
  }

  async searchPackages(query: string): Promise<Package[]> {
    const response = await apiClient.get(`/packages/search?q=${encodeURIComponent(query)}`);
    return response.data;
  }

  async getPackagesByCategory(category: string): Promise<Package[]> {
    const response = await apiClient.get(`/packages/category/${category}`);
    return response.data;
  }

  async bookPackage(packageId: string, bookingData: any): Promise<any> {
    const response = await apiClient.post(`/packages/${packageId}/book`, bookingData);
    return response.data;
  }
}

export default new PackageService();