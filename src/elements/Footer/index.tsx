import Link from 'next/link';
import { Instagram, Youtube } from 'react-feather';

import styles from './index.module.css';

const Footer = () => {
  return <footer className={styles.footer}>
    <div className={styles.container}>
      <ul className={styles.itemsPolices}>
        <li className={styles.itemPolices}><Link className={styles.linkPolice} href='/legal-warning'>Legal warning</Link></li>
        <li className={styles.itemPolices}><Link className={styles.linkPolice} href='/privacy-polices'>Privacy polices</Link></li>
        <li className={styles.itemPolices}><Link className={styles.linkPolice} href='/cookie-polices'>Cookie polices</Link></li>
        <li className={styles.itemPolices}><Link className={styles.linkPolice} href='/about'>About Us</Link></li>
      </ul>

      <ul className={styles.icons}>
        <li className={styles.itemIcon}><Link href='/' target='_blank' className={styles.icon}><Instagram /></Link></li>
        <li className={styles.itemIcon}><Link href='/' target='_blank' className={styles.icon}><Youtube /></Link></li>
      </ul>

      <div className={styles.greetings}>
        <h3 className={styles.titleGreetings}>Saludos mis queridos Bits</h3>
        <p className={styles.copyrigth}>Copirigth © 2022 Ezequiel Vega</p>
      </div>
    </div>
  </footer>
}

export default Footer;
