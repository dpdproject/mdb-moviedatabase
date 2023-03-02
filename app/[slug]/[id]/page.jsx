import styles from '../../page.module.css'
import { fetchAPI, fetchMovieDetails } from '@/app/UI Components/0.adapters/ClientAPI';
import Title from '../../UI Components/1.atoms/Title';
import Pill from '../../UI Components/1.atoms/Pill';
import Details from '../../UI Components/2.molecules/Details';
import Image from '@/app/UI Components/1.atoms/Image';

export default async function Page({ params }) {

    const details = await fetchMovieDetails(params.slug, params.id);

    return (
        <main className={styles.main}>
            <section className='lg:flex justify-around items-center lg:items-start md:mx-20'>
                <Image 
                    imageURL={details.poster_path}
                    className='lg:w-1/4 md:min-w-20 rounded-xl shrink-0'
                />
                <div className='flex-col md:px-20'>
                    <div className='flex flex-col items-center'>
                        <Title 
                            className='font-bold text-3xl text-center p-4'
                            text={details.title || details.name}
                        />
                        <p className='text-md italic'>{details.tagline}</p>
                        <p className='mt-8'>{details.overview}</p>
                    </div>
                    <div className='flex gap-2 my-5 justify-center'>
                        {details?.genres.map((genre) => (
                            <Pill
                                key={genre.id}
                                text={genre.name}
                            ></Pill>
                        ))}
                    </div>
                    <div className='text-center md:text-start'>
                        <Title 
                            className='text-xl text-red-900 font-bold underline underline-offset-4'
                            text='Dettagli'
                        />
                        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
                            <Details 
                                title='Release Date'
                                text={details?.release_date}
                            />
                            <Details 
                                title='Production Countries'
                                text={details?.production_countries.map((country) => (<li key={country.iso_3166_1}>{country.name}</li>))}
                            />
                            <Details 
                                title='Production Companies'
                                text={details?.production_companies.map((company) => (<li key={company.id}>{company.name} ({company.origin_country})</li>))}
                            />
                            <Details 
                                title='Spoken Languages'
                                text={details?.spoken_languages.map((language) => (<li key={language.iso_639_1}>{language.english_name}</li>))}
                            />
                            <Details 
                                title='Official Site'
                                text={<a className='underline underline-offset-2' href={details?.homepage} target='_blank'>Click here!</a>}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex items-center relative mb-10'>
                <i className="fi fi-rr-angle-left mt-16 md:pr-5 md:text-2xl"></i>
                <div className='flex flex-nowrap gap-x-10 overflow-x-scroll snap-x snap-mandatory mt-10 relative'>
                    {details?.images.backdrops.map((img) => (
                        <Image 
                            key={img.file_path}
                            imageURL={img.file_path}
                            className='w-full md:w-2/3 snap-center snap-always rounded-xl'
                        />
                    ))}
                </div>
                <i className="fi fi-rr-angle-right mt-16 md:pl-5 md:text-2xl"></i>
            </div>
        </main>
    )
}

export async function generateStaticParams() {

    const data = await fetchAPI();

    const moviePaths = data.theatersRes.results.map((movie) => ({
        params: {
            id: `${movie.id}`,
        }
    }))
    const tvPaths = data.tvRes.results.map((movie) => ({
        params: {
            id: `${movie.id}`,
        }
    }))

    return [
        {
            slug: "movie",
            id: `${moviePaths.map((movie) => (
                movie.params.id
            ))}`
        },
        {
            slug: "tv",
            id: `${tvPaths.map((movie) => (
                movie.params.id
            ))}`
        },
    ]
}