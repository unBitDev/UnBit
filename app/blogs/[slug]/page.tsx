type params = {
  params: any
}

const Blog = ({ params }: params) => {
  const { slug } = params
  return(<h1>Blog {slug}</h1>)
}

export default Blog;
