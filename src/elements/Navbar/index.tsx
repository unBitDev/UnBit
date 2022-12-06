import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link href='/'>home</Link></li>
        <li><Link href='/blogs'>blogs</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
