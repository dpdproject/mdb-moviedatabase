import styles from '../page.module.css'

import Title from "../UI Components/1.atoms/Title";

export default async function Page({params}) {
    return (
        <main className={styles.main}>
            <Title 
                text={`This is the ${params.slug} section`}
            />
        </main>
    )
}