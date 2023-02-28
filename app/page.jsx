import styles from './page.module.css'
import { fetchAPI } from './UI Components/0.adapters/ClientAPI'
import Title from './UI Components/1.atoms/Title';
import Sections from './UI Components/5.layouts/Sections'

export default async function Home() {

  const inTheaters = await fetchAPI('movie', 'now_playing');
  const inTV = await fetchAPI('tv', 'on_the_air');

  return (
    <main className={styles.main}>
      <Title
        className='text-2xl font-bold text-red-600'
        text='Esplora film e serie'
      />
      <div className='text-start mb-10'>
        <Sections 
          sectionTitle='Cinema'
          subtitle='Esplora i film attualmente nei cinema'
          category={inTheaters}
          slug='movie'
        />
        <Sections 
          sectionTitle='TV e Streaming'
          subtitle='Esplora le serie TV del momento'
          category={inTV}
          slug='tv'
        />
      </div>
    </main>
  )
}
