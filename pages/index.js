import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className={styles.images}>
          <Image
            src="/cloud.svg"
            alt="Picture of the author"
            layout="fill"
            className={styles.cloud}
          />
          <Image
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="Picture of the author"
            height={200}
            width={600}
            layout="intrinsic"
            className={styles.building}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://thedigitalacademy.co.za"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brought to you by {'The Digital Academy '}
        </a>
      </footer>
    </div>
  );
}
