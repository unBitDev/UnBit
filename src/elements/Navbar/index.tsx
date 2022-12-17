import Link from 'next/link'
import Image from 'next/image';

import styles from './index.module.css';
import Routers, { Route } from '../../config/router';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Image src="/img/Logo.png" alt="logo-unBit" width={50} height={50} />
        <h1 className={styles.titleNav}>UnBit</h1>
      </div>
      <div className={styles.nav}>
        <ul className={styles.itemsNav}>
          {Routers.map((route: Route, key: number) => (
            <li className={styles.itemNav} key={key}>
              <Link href={route.href} className={styles.itemLink}>{route.title}</Link>
            </li>
          ))} 
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
