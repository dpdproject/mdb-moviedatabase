import styles from './page.module.css'
import { fetchAPI } from './UI Components/0.adapters/ClientAPI'
import Title from './UI Components/1.atoms/Title';
import Sections from './UI Components/5.layouts/Sections'

export default async function Home() {

  const res = fetchAPI();

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
          category={(await res).theatersRes}
          slug='movie'
        />
        <Sections 
          sectionTitle='TV e Streaming'
          subtitle='Esplora le serie TV del momento'
          category={(await res).tvRes}
          slug='tv'
        />
      </div>
    </main>
  )
}
