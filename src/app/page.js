"use client";

import MovieCard from "@/features/movie/components/MovieCard";
import { useTrendingMovies } from "@/features/movie/hooks/useTrendingMovie";

export default function Home() {
  const {
    data: movies,
    isLoading,
    error,
  } = useTrendingMovies();

  if (isLoading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500">
        Gagal mengambil data film
      </div>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Trending Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}