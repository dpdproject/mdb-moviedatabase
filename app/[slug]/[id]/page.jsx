import styles from '../../page.module.css'
import { fetchMovieDetails } from '../../UI Components/0.adapters/ClientAPI'
import Title from '../../UI Components/1.atoms/Title';
import Pill from '../../UI Components/1.atoms/Pill';
import Details from '../../UI Components/2.molecules/Details';
import Image from '@/app/UI Components/1.atoms/Image';

export default async function MovieCard({ params }) {

    const details = await fetchMovieDetails(params.slug, params.id);

    const genres = details.tempData.genres.map((genre) => (
        <Pill
            key={genre.id}
            text={genre.name}
        ></Pill>
    ))

    const gallery = details.tempImages.backdrops.map((img) => (
        <Image 
            key={img.file_path}
            imageURL={img.file_path}
            className='w-full md:w-2/3 snap-center snap-always rounded-xl'
        />
    ))

    return (
        <main className={styles.main}>
            <section className='lg:flex justify-around items-center lg:items-start md:mx-20'>
                <Image 
                    imageURL={details.tempData.poster_path}
                    className='lg:w-1/4 md:min-w-20 rounded-xl shrink-0'
                />
                <div className='flex-col md:px-20'>
                    <div className='flex flex-col items-center'>
                        <Title 
                            className='font-bold text-3xl text-center p-4'
                            text={details.tempData.title}
                        />
                        <p className='text-md italic'>{details.tempData.tagline}</p>
                        <p className='mt-8'>{details.tempData.overview}</p>
                    </div>
                    <div className='flex gap-2 my-5 justify-center'>
                        {genres}
                    </div>
                    <div className='text-center md:text-start'>
                        <Title 
                            className='text-xl text-red-900 font-bold underline underline-offset-4'
                            text='Dettagli'
                        />
                        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
                            <Details 
                                title='Release Date'
                                text={details.tempData.release_date}
                            />
                            <Details 
                                title='Production Countries'
                                text={details.tempData.production_countries.map((country) => (<li>{country.name}</li>))}
                            />
                            <Details 
                                title='Production Companies'
                                text={details.tempData.production_companies.map((company) => (<li>{company.name} ({company.origin_country})</li>))}
                            />
                            <Details 
                                title='Spoken Languages'
                                text={details.tempData.spoken_languages.map((language) => (<li>{language.english_name}</li>))}
                            />
                            <Details 
                                title='Official Site'
                                text={<a className='underline underline-offset-2' href={details.tempData.homepage} target='_blank'>Click here!</a>}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex items-center relative mb-10'>
                <i class="fi fi-rr-angle-left mt-16 md:pr-5 md:text-2xl"></i>
                <div className='flex flex-nowrap gap-x-10 overflow-x-scroll snap-x snap-mandatory mt-10 relative'>
                    {gallery}
                </div>
                <i class="fi fi-rr-angle-right mt-16 md:pl-5 md:text-2xl"></i>
            </div>
        </main>
    )
}