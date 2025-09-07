import classNames from 'classnames/bind';
import { memo, useRef } from 'react';
import { Link } from 'react-router-dom';

import findGif from '../../assets/images/find.gif';
import freeGif from '../../assets/images/free.gif';
import heroImageWebP from '../../assets/images/hero.webp';
import trendingGif from '../../assets/images/trending.gif';

import AnimatedPath from './components/AnimatedPath/AnimatedPath';
import CustomCursor from './components/CustomCursor/CustomCursor';
import FeatureItem from './components/FeatureItem/FeatureItem';

import styles from './Home.module.css';

const cx = classNames.bind(styles);

const Home = memo(() => {
  const wrapperRef = useRef<HTMLElement>(null);

  return (
    <>
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={heroImageWebP}
          alt="hero image"
          loading="eager"
          fetchPriority="high"
        />
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h3 className={styles.subtitle}>gif search engine for you</h3>
        </div>
        <Link to="/search">
          <button className={cx('cta', 'linkButton')}>start search</button>
        </Link>
      </section>
      <section ref={wrapperRef} className={styles.featureSection}>
        <AnimatedPath wrapperRef={wrapperRef} />
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem title="See trending gif" imageSrc={trendingGif} />
            <FeatureItem title="Find gif for free" imageSrc={findGif} />
            <FeatureItem title="Free for everyone" imageSrc={freeGif} />
          </div>
          <Link to="/search">
            <button className={styles.linkButton}>start search</button>
          </Link>
        </div>
      </section>
      <CustomCursor text="memegle" />
    </>
  );
});

Home.displayName = 'Home';

export default Home;
