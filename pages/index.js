import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I am Tarushi Pathak. I am a fourth year student pursuing BTech in Computer Science Engineering from SRM IST, India.I will be interning with Amazon this winter as a Programmer Analyst. This website is ,currently, a work in progress ✨</p>
        <p>
           Current Tech Stack : NextJs
        </p>
      </section>
      <Link href = "/posts/newpage">
         Navigate if you want to see a mess of website page ⚙️
      </Link>
    </Layout>
  )
}
