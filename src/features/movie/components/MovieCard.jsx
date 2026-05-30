import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="w-full h-auto"
      />

      <div className="p-2">
        <h3 className="font-semibold">
          {movie.title}
        </h3>
      </div>
    </div>
  );
}