import Link from 'next/link';
import { Instagram, Youtube } from 'react-feather';

const Footer = () => {
  return <footer className="bottom-0 inset-x-0 bg-black p-4 sm:p-6">
    <div className="text-white grid place-items-center">
      <ul className="grid text-center justify-self-center grid-rows-1 grid-cols-4 gap-8 pt-2 pb-6 sm:gap-6">
        <li><Link className="text-white" href='/legal-warning'>Legal warning</Link></li>
        <li><Link className="text-white" href='/privacy-polices'>Privacy polices</Link></li>
        <li><Link className="text-white" href='/cookie-polices'>Cookie polices</Link></li>
        <li><Link className="text-white" href='/about'>About Us</Link></li>
      </ul>

      <ul className="grid grid-rows-1 grid-cols-[40px_40px] justify-center pb-6">
        <li className="p-2 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] justify-self-center hover:from-pink-500 hover:via-red-500 hover:to-yellow-500"><Link href='/' target='_blank'><Instagram /></Link></li>
        <li className="p-2 rounded-full hover:bg-error justify-self-center"><Link href='/' target='_blank'><Youtube /></Link></li>
      </ul>

      <div className="text-center">
        <h3>Saludos mis queridos Bits</h3>
        <p className="font-bold">Copirigth © 2022 Ezequiel Vega</p>
      </div>
    </div>
  </footer>
}

export default Footer;
