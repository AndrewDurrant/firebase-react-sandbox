import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Auth } from '@/components/auth'

export default function Home() {
  return (
    <>
      <Head>
        <title>Firebase React Sandbox</title>
        <meta name="description" content="A place to become familiar with Firebase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Firebase React Sandbox</h1>
        <Auth/>
      </main>
    </>
  )
}
