import Image from 'next/image';

import styles from './index.module.css'

export type BannerProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

const Banner = ({ backgroundImage, title, subtitle }: BannerProps) => {
  return <div className={styles.banner}>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
    <Image src={backgroundImage} alt={`Image Banner ${title}`} width={1280} height={300} className={styles.bannerImage} /> 
  </div>
}

export default Banner;
