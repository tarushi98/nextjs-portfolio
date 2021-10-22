import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Layout from "../../components/layout.js"


export default function FirstPost()
{
    return (
        <Layout>
            <Head> 
                <title>Posts</title> 
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>First Post</h1>
                <p>Go back to <Link href="/"> Home </Link></p>
            </main>
        </Layout>
    )
}