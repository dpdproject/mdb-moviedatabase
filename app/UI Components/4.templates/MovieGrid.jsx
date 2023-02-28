import MovieCard from "../3.organisms/MovieCard";

export default function MovieGrid({category, slug}) {
  return (
    <div className="flex flex-nowrap gap-x-10 overflow-x-scroll">
      {category.results.map((item) => (
        <MovieCard 
          key={item.id}
          title={item.title || item.name}
          releaseDate={item.release_date || item.first_air_date}
          poster_path={item.poster_path}
          id={item.id}
          slug={slug}
        />
      ))}
    </div>
  )
}