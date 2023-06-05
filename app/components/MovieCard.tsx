interface MovieCardProps {
  title: string;
  overview: string;
  poster_path: string;
}

const MovieCard = ({ title, overview, poster_path }: MovieCardProps) => {
  const imageUrl = poster_path
    ? `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    : "/no-image-available.png";
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={imageUrl}
        className="w-full h-64 rounded mb-4"
        alt="This is a movie img"
      />
      <h2 className="text-xl text-black font-bold mb-2 ">{title}</h2>
      <p className="text-sm text-gray-500 ">{overview.substring(0, 150)}</p>
    </div>
  );
};

export default MovieCard;
