import Image from 'next/image';
import { styles } from './styles';

export type BannerProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  sx?: string;
}

const Banner = ({ backgroundImage, title, subtitle, sx }: BannerProps) => {
  return <div className={`${sx} ${styles.container}`}>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
    <Image src={backgroundImage} alt={`Image Banner ${title}`} width={1280} height={300} className="w-full object-cover" />
  </div>
}

export default Banner;
