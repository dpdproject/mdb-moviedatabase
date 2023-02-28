import Button from "../1.atoms/Button";
import Title from "../1.atoms/Title";

export default function MovieCard({title, releaseDate, id, poster_path, slug }){
    const imagePath = 'https://image.tmdb.org/t/p/original/'

    return (
        <div className="min-w-15 relative shadow-lg hover:shadow-2xl rounded-xl">
            <img src={imagePath + poster_path} alt={title} className="rounded-xl"></img>
            <section className="absolute bottom-0 p-3 w-full h-36 text-center text-white backdrop-blur rounded-xl flex flex-col gap-2 justify-evenly">
                <Title text={title}/>
                <h3>{releaseDate}</h3>
                <Button
                    text='Explore'
                    url={`/${slug}/${id}`}
                ></Button>
            </section>
        </div>
    )
}