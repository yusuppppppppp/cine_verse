"use client";

import Image from "next/image";
import MovieCard from "@/features/movie/components/MovieCard";
import { useTrendingMovies } from "@/features/movie/hooks/useTrendingMovie";
import CursorImageTrail from "@/shared/components/CursorImageTrail/CursorImageTrail";

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

  const trailImages =
    movies?.slice(0, 20).map(
      (movie) =>
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    ) || [];

  return (
    <main>

      {/* section hero */}

      <section className="relative pb-100 overflow-hidden w-full h-screen">
        <div className="w-full h-full mx-auto">
          <div className="inset-0">
            <Image
              src="assets/images/CineVerse_LogoV4.svg"
              alt="CineVerse_Logo"
              width={300}
              height={300}
              className="w-75 h-auto"
              loading="eager"
            />
          </div>
          <div className="w-full h-full z-10 absolute">
            <CursorImageTrail items={trailImages}/>
          </div>
        </div>
      </section>

      {/* section hero end */}

      <h1 className="text-4xl font-bold mb-8 pt-50">
        Trending Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-8">
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