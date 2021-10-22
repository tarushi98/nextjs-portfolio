import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profilepic from "../public/Images/me.jpg"

const name = 'Tarushi Pathak'
export const siteTitle = 'Tarushi Pathak'

const GetProfileImage = () => (
    <Image
        src = {profilepic}
        className = {utilStyles.borderCircle}
        height = {144}
        width = {144}
        alt = {"This pic was supposed to show how I look"}
    />
)

export default function Layout({children,home}){
    return (
    <div className = {styles.container}>
        <Head> 
            <link rel="icon" href = "/favicon.ico"/>
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
            {
                home?
                (
                    <>
                        <GetProfileImage/>
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                ) :
                (
                    <>
                        <Link href="/">
                                <GetProfileImage/>
                        </Link>

                        <h2 className = {utilStyles.headingLg}>
                            <Link href="/">
                                <h1 className={utilStyles.colorInherit}>{name}</h1>    
                            </Link>
                        </h2>
                    </>
                )
            }
        
        </header>
        <main>{children}</main>
        {
            !home && (
                <div className = {styles.backToHome}>
                    <Link href="/">
                         <h2> Back To Home</h2>
                    </Link>
                </div>           
            )

        }   
    </div>
    )
}