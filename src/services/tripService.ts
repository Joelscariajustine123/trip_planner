import apiClient from './api';

export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  description?: string;
  image?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTripData {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  description?: string;
  image?: string;
}

export interface UpdateTripData extends Partial<CreateTripData> {
  id: string;
}

class TripService {
  async getTrips(): Promise<Trip[]> {
    const response = await apiClient.get('/trips');
    return response.data;
  }

  async getTripById(tripId: string): Promise<Trip> {
    const response = await apiClient.get(`/trips/${tripId}`);
    return response.data;
  }

  async createTrip(tripData: CreateTripData): Promise<Trip> {
    const response = await apiClient.post('/trips', tripData);
    return response.data;
  }

  async updateTrip(tripData: UpdateTripData): Promise<Trip> {
    const { id, ...updateData } = tripData;
    const response = await apiClient.put(`/trips/${id}`, updateData);
    return response.data;
  }

  async deleteTrip(tripId: string): Promise<void> {
    await apiClient.delete(`/trips/${tripId}`);
  }

  async searchTrips(query: string): Promise<Trip[]> {
    const response = await apiClient.get(`/trips/search?q=${encodeURIComponent(query)}`);
    return response.data;
  }
}

export default new TripService();