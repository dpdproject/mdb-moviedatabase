import styles from './page.module.css'
import './globals.css'

export default function Loading() {
    return (
        <main className={styles.main}>
            <div className='flex flex-row gap-3 absolute top-1/2 left-1/2'>
                <span className="loading"></span>
                <span className="loading"></span>
                <span className="loading"></span>
            </div>
        </main>
    )
}