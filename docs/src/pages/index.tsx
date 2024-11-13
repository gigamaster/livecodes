/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// eslint-disable-next-line import/no-internal-modules
import HomepageFeatures from '../components/HomepageFeatures';
import { loadAds } from '../custom-content';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
    >
      <div className={styles.heroContent}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.tryButton + ' button button--secondary button--lg'}
            href="#features-editor"
          >
            Start Coding ⚡
          </Link>
        </div>
        <div className={styles.description}>
          <p>Free open source standalone app, embedded playgrounds and AI code assistant.</p>
          <p>Powerful Editor with support for 90+ languages/frameworks<br />
            React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP</p>
        </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    loadAds();
  }, []);

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
