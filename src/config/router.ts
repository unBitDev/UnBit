export type Route = {
  href: string;
  title: string;
}

export type Routers = Route[];

const routers: Routers = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/blogs',
    title: 'Blogs'
  }
]

export default routers;
