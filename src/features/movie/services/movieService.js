import { api } from "@/infrastructure/api/client";
import { ENDPOINTS } from "@/infrastructure/api/endpoints";

export async function getTrendingMovies() {
  const response = await api.get(ENDPOINTS.TRENDING);

  return response.data.results;
}