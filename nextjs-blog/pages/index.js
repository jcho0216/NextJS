import Head from 'next/head'
import Layout, { siteTitle } from '../pages/components/layout';
import utilStyles from '../pages/styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Name is Junseo</p>
        <p>
          Whats up boyz<br/>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}